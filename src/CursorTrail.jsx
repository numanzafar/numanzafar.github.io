import { useEffect, useRef, useState } from "react";

function CursorTrail() {
  const [prints, setPrints] = useState([]);

  const lastMoveRef = useRef({
    x: 0,
    y: 0,
    time: Date.now(),
  });

  const lastPrintTimeRef = useRef(0);
  const footSideRef = useRef(1); // 1 = right, -1 = left

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();

      const lastMove = lastMoveRef.current;

      const dx = e.clientX - lastMove.x;
      const dy = e.clientY - lastMove.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const timeDiff = now - lastMove.time;

      const speed = timeDiff > 0 ? distance / timeDiff : 0;

      lastMoveRef.current = {
        x: e.clientX,
        y: e.clientY,
        time: now,
      };

      const speedThreshold = 0.12;
      const printDelay = 170;

      if (speed < speedThreshold) {
        return;
      }

      if (now - lastPrintTimeRef.current < printDelay) {
        return;
      }

      lastPrintTimeRef.current = now;

      // Direction angle of mouse movement
      const angle = Math.atan2(dy, dx);

      // Perpendicular direction, used to move footprint left/right
      const sideAngle = angle + Math.PI / 2;

      // How far left/right each step appears
      const sideOffset = 12;

      // Alternate left and right
      footSideRef.current = footSideRef.current * -1;

      const offsetX = Math.cos(sideAngle) * sideOffset * footSideRef.current;
      const offsetY = Math.sin(sideAngle) * sideOffset * footSideRef.current;

      const newPrint = {
        id: now + Math.random(),
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
        rotation: angle * (180 / Math.PI) + 90,
      };

      setPrints((prev) => [...prev.slice(-30), newPrint]);

      setTimeout(() => {
        setPrints((prev) => prev.filter((print) => print.id !== newPrint.id));
      }, 2200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-trail">
      {prints.map((print) => (
        <img
          key={print.id}
          src="/footsteps.png"
          alt=""
          className="cursor-print"
          style={{
            left: `${print.x}px`,
            top: `${print.y}px`,
            transform: `translate(-50%, -50%) rotate(${print.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export default CursorTrail;