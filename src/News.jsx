function News() {
  return (
    <main className="container">
      <section id="news" className="section news-page">
        <h2 className="news-title">News</h2>

        <div className="news-item">
          <div className="news-date">
            April 22, 2026
          </div>

          <div className="news-content">
            <p>
              Organized and hosted the Basant Festival at Clarkson University in my 
              role as Secretary of the Pakistani Students Association.
            </p>

            <div className="news-images two-images">
              <img src="/b1.jpg" alt="b 1" />
              <img src="/b2.jpg" alt="b 2" />
            </div>
          </div>
        </div>

        <div className="news-item">
          <div className="news-date">
            November 23, 2025
          </div>

          <div className="news-content">
            <p>
              Similarity-Aware Behavioral Biometrics for Detecting User Familiarity in VR
              has been <strong>ACCEPTED </strong>for publication at the 20th ACM SIGGRAPH 
              International Conference on Virtual-Reality Continuum and its Applications 
              in Industry (ACM SIGGRAPH VRCAI 2025)
            </p>
          </div>
        </div>

        <div className="news-item">
          <div className="news-date">
            October 28, 2025
          </div>

          <div className="news-content">
            <p>
              Knowledge-Based Behavioral Biometrics for Secure Authentication in Virtual Reality
              has been <strong>ACCEPTED </strong>for publication at the IEEE 27th International 
              Symposium on Multimedia.
            </p>
          </div>
        </div>

        <div className="news-item">
          <div className="news-date">
            September 29 - October 3, 2025
          </div>

          <div className="news-content">
            <p>
              Attended and presented my research at the 17th International Conference on 
              Quality of Multimedia Experience at Charles III University of Madrid 
              (Universidad Carlos III de Madrid) in Madrid, Spain.
            </p>

            <div className="news-images news-images-featured">
            <img
                src="/c1.jpg"
                alt="News image 1"
                className="news-image-large"
            />
            <img
                src="/c2.JPG"
                alt="News image 2"
                className="news-image-small"
            />
            <img
                src="/c4.jpg"
                alt="News image 3"
                className="news-image-small"
            />
            </div>
          </div>
        </div>

        <div className="news-item">
          <div className="news-date">
            July 11, 2025
          </div>

          <div className="news-content">
            <p>
              Deep Learning-Based Visual Fatigue Detection Using Eye Gaze Patterns in VR 
              has been <strong>ACCEPTED </strong>for publication at the upcoming IEEE International 
              Symposium on Emerging Metaverse.
            </p>
          </div>
        </div>

        <div className="news-item">
          <div className="news-date">
            May 2025
          </div>

          <div className="news-content">
            <p>
              Behavioral Biometrics for Automatic Detection of User Familiarity in VR has been  
              <strong> ACCEPTED</strong> in the 17th International Conference on Quality of 
              Multimedia Experience, (QoMEX)
            </p>
          </div>
        </div>

        <div className="news-item">
          <div className="news-date">
            April 12, 2025
          </div>

          <div className="news-content">
            <p>
              I am honored to receive the prestigious Clarkson University 
              <strong> Phalanx Award</strong> in recognition of my contributions, 
              leadership, and service to the Clarkson community.
            </p>

            <img
              src="/c3.jpg"
              alt="RAPS award"
              className="news-image"
            />
          </div>
        </div>

        <div className="news-item">
          <div className="news-date">
            December 13, 2024
          </div>

          <div className="news-content">
            <p>
              Presented a talk titled “VR App on User Familiarity via Hand Interaction” 
              at the Faculty Seminar on Virtual Reality in Teaching and Research, 
              Clarkson University.
            </p>
          </div>

        </div>

        <div className="news-item">
          <div className="news-date">
            May 09, 2024
          </div>

          <div className="news-content">
            <p>
            Celebrating the conferral of my Master of Science degree in Computer Science
            </p>
            <div className="news-images news-images-featured">
            <img
                src="/m1.jpg"
                alt="News image 1"
                className="news-image-large"
            />
            <img
                src="/m2.jpg"
                alt="News image 2"
                className="news-image-small"
            />
            <img
                src="/m3.jpg"
                alt="News image 3"
                className="news-image-small"
            />
            </div>
          </div>
        </div>


      </section>
    </main>
  );
}

export default News;