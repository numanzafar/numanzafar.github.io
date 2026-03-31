import "./App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div>
      <header className="topbar">
        <div className="topbar-inner">
        <div className="topbar-left">
          <a href="#" className="brand">Numan</a>

          <nav className="nav">
            <a href="#publications">Publications</a>
            <a href="#Acdemic-Services">Acdemic Services</a>
            <a href="#awards">Awards</a>
            <a href="#teaching">Teaching</a>
            <a
              href="https://docs.google.com/document/d/1zdfoc2-LBLkNjb11hweBIOdW-XOW-23p/edit?usp=sharing&ouid=114512959792367442978&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </nav>
        </div>

        <div className="topbar-right">
          <a
            href="https://scholar.google.com/citations?user=QyrnrU8AAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <img src="/google.svg" alt="Google Scholar" className="header-icon" />
          </a>


          <a
            href="inkedin.com/in/numan-zafar/"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <FaLinkedin />
          </a>
        </div>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-image">
            <img src="/dp.jpeg" alt="Numan" />

            <div className="image-contact">
              <p className="email-row">
                <MdEmail className="email-icon" />
                <span>zafarn@clarkson.edu</span>
              </p>

              <p className="email-row">
                <MdEmail className="email-icon" />
                <span>numanzafar7@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="hero-text">
            <h1>Numan Zafar</h1>

            <p>
              Final-year PhD Candidate in Computer Science at Clarkson University.
            </p>

            <p>
              Numan is a final-year PhD candidate in the Department of Computer
              Science at Clarkson University. His research focuses on the
              intersection of virtual reality (VR), deep learning, and
              human-computer interaction (HCI), modeling user behavior and
              cognitive patterns in immersive environments to improve interaction
              design, usability, and user trust.
            </p>

            <p>
              Research interests include Human-Computer Interaction, Interactive
              Systems, User Familiarity, User Experience, AI for HCI, Virtual
              Reality, and Deep Learning.
            </p>
          </div>
        </section>

        {/* <section className="banner-section">
          <img src="/banner.gif" alt="Research banner" className="banner-gif" />
        </section> */}

        <section id="publications" className="section">
          <h2>Publications</h2>

          <div className="publication-item">
            <div className="publication-image">
              <img src="/vrcai.png" alt="Publication 1" />
              <p className="publication-links">
                <a
                  href="https://doi.org/10.1145/3779232.3779463"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
                Similarity-Aware Behavioral Biometrics for Detecting User Familiarity in VR
              </h3>
              <p className="publication-authors">
                <strong>Numan Zafar</strong>, Shafique Ahmad Chaudhry
              </p>
              <p className="publication-venue">
                <em>20th ACM SIGGRAPH International Conference on Virtual-Reality Continuum and its Applications in Industry<br /> 
                  (ACM SIGGRAPH VRCAI), Macau, China, 2025</em>
              </p>

            </div>
          </div>

          <div className="publication-item">
            <div className="publication-image">
              <img src="/ism.png" alt="Publication 2" />
              <p className="publication-links">
                <a
                  href="https://doi.org/10.1109/ISM66958.2025.00061"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
                Knowledge-Based Behavioral Biometrics for Secure Authentication in Virtual Reality
              </h3>
              <p className="publication-authors">
                <strong>Numan Zafar</strong>, Priyo Ranjan Kundu Prosun, Shafique Ahmad Chaudhry
              </p>
              <p className="publication-venue">
                <em>IEEE 27th International Symposium on Multimedia<br />
                (IEEE ISM), Naples, Italy, 2025
                </em>
              </p>
              <p className="publication-description">
                
              </p>
            </div>
          </div>

          <div className="publication-item">
            <div className="publication-image">
              <img src="/isemv.png" alt="Publication 3" />
              <p className="publication-links">
                <a
                  href="https://doi.org/10.48550/arXiv.2510.12994"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
                Deep Learning-Based Visual Fatigue Detection Using Eye Gaze Patterns in VR
              </h3>
              <p className="publication-authors">
                <strong>Numan Zafar</strong>, Johnathan Locke, Shafique Ahmad Chaudhry
              </p>
              <p className="publication-venue">
                <em>2025 IEEE International Symposium on Emerging Metaverse<br /> 
                (ISEMV), Honolulu, HI, USA, 2025
                </em>
              </p>
            </div>
          </div>

          <div className="publication-item">
            <div className="publication-image">
              <img src="/qomex.png" alt="Publication 4" />
              <p className="publication-links">
                <a
                  href="https://doi.org/10.48550/arXiv.2510.12988"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
                Behavioral Biometrics for Automatic Detection of User Familiarity in VR
              </h3>
              <p className="publication-authors">
                <strong>Numan Zafar</strong>, Priyo Ranjan Kundu Prosun, Shafique Ahmad Chaudhry
              </p>
              <p className="publication-venue">
                <em>17th International Conference on Quality of Multimedia Experience<br />
                (QoMEX), Madrid, Spain, 2025
                </em>
              </p>
            </div>
          </div>

          <div className="publication-item">
            <div className="publication-image">
              <img src="/aixvr.png" alt="Publication 5" />
              <p className="publication-links">
                <a
                  href="https://doi.org/10.48550/arXiv.2401.16443"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
                Evaluating deep networks for detecting user familiarity with VR from hand interactions
              </h3>
              <p className="publication-authors">
                Mingjun Li, <strong>Numan Zafar</strong>, Natasha Kholgade Banerjee, Sean Banerjee
              </p>
              <p className="publication-venue">
                <em>6th IEEE International Conference on Artificial Intelligence and eXtended 
                  and Virtual Reality<br />  
                  (IEEE AIxVR), Los Angles, California, 2024
                  </em>
              </p>
            </div>
          </div>

            <div className="publication-item">
            <div className="publication-image">
              <img src="/2023.png" alt="Publication 6" />
              <p className="publication-links">
                <a
                  href="https://link.springer.com/chapter/10.1007/978-981-97-3682-9_72"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
                Novel Attention-Based Framework for Person Re-identification in Video Surveillance
              </h3>
              <p className="publication-authors">
                Lichao Cui, Mingxin Liu, Ruhua Wang, <strong>Numan Zafar</strong>
              </p>
              <p className="publication-venue">
                <em>International Conference on SmartRail, Traffic and Transportation Engineering<br /> 
                  (ICSTTE),Changsha, China, 2023
                </em>
              </p>
            </div>
          </div>

            <div className="publication-item">
            <div className="publication-image">
              <img src="/music.png" alt="Publication 7" />
              <p className="publication-links">
                <a
                  href="https://link.springer.com/chapter/10.1007/978-981-16-7618-5_21"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
                Collaborative filtering based hybrid music recommendation system
              </h3>
              <p className="publication-authors">
                Muhammad Umair Hassan, <strong>Numan Zafar</strong>, Haider Ali, Irfan Yaqoob, 
                Saleh Abdel Afou Alaliyat, Ibrahim A Hameed
              </p>
              <p className="publication-venue">
                <em>Proceedings of International Conference on Information Technology and Applications<br />  
                  (ICITA), Dubai, UAE, 2021
                </em>
              </p>
            </div>
          </div>

            <div className="publication-item">
            <div className="publication-image">
              <img src="/review.png" alt="Publication 8" />
              <p className="publication-links">
                <a
                  href="https://doi.org/10.1109/ICAI52203.2021.9445247"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
                Towards deep learning: A review on adversarial attacks
              </h3>
              <p className="publication-authors">
                Muhammad Maaz Irfan, Sheraz Ali, Irfan Yaqoob, <strong>Numan Zafar</strong>
              </p>
              <p className="publication-venue">
                <em>IEEE International Conference on Artificial Intelligence<br /> 
                (IEEE ICAI), Islamabad, Pakistan, 2021
                </em>
              </p>
            </div>
          </div>

          <div className="publication-item">
            <div className="publication-image">
              <img src="/pvgg.png" alt="Publication 8" />
              <p className="publication-links">
                <a
                  href="https://doi.org/10.1016/j.neucom.2020.10.086"
                  target="_blank"
                  rel="noreferrer"
                  className="doi-button"
                >
                  Paper
                </a>
              </p>
            </div>
            <div className="publication-content">
              <h3>
                PointVGG: Graph convolutional network with progressive aggregating features on point clouds
              </h3>
              <p className="publication-authors">
                Rongkang Li, Yumeng Zhang, Dongmei Niu, Guangchao Yang, <strong>Numan Zafar</strong>, Caiming Zhang, Xiuyang Zhao
              </p>
              <p className="publication-venue">
                <em>ELSEVIER, Neurocomputing, 2021<br /> 
                Impact Factor 6.5
                </em>
              </p>
            </div>
          </div>

        </section>

        <section id="Acdemic-Services" className="section">
          <h2>Acdemic Services</h2>
          <p>
          < strong>Reivewer</strong><br />
          IEEE VIS 2026 <br />
          QoMEX 2026<br />
          FLICS 2026

          
          </p>
        </section>

        <section id="awards" className="section">
          <h2>Awards</h2>
          <p>
            < strong>Travel Grant</strong> : Awarded by QoMEX 2025 <br/>
            < strong>Travel Grant</strong> : Awarded by Clarkson University Graduate Student Association (CUGSA) 2025
          </p>
        </section>

        <section id="teaching" className="section">
          <h2>Teaching</h2>

          <p><strong>Students Mentored</strong></p>

          <ul className="mentored-students">
            <li>
              <strong>Priyo Prosun</strong> (Ph.D., Clarkson University)<br/>
              <span className="student-date">Jan 2025 – Current</span> <br/>
              <span className="student-description">
              Virtual Reality, Unity, Machine Learning, server usage, and maintenance. </span>
            </li>

            <li>
              <strong>Trey Rachall</strong> (B.S., Texas State University), NSF REU Summer Researcher<br/>
              <span className="student-date">May 2025 – Aug 2025</span><br />
              <span className="student-description">
              Virtual Reality, Unity, data collection and visualization, data analysis, Python programming, machine learning, server usage, and maintenance.
              </span>
            </li>

            <li>
              <strong>Johnathan Locke</strong> (B.S., Clarkson University), Jan 2025 – May 2025<br />
              <span className="student-description">
              Virtual Reality, Python programming, data visualization, data analysis, machine learning, and paper writing.
              </span>
            </li>

            <li>
              <strong>Deepthi Yanamala</strong> (M.S., Clarkson University), Sep 2024 – Apr 2025<br />
              <span className="student-description">
              Virtual Reality, Python programming, and machine learning. </span>
            </li>

            <li>
              <strong>Jyothinadh Minnekanti</strong> (M.S., Clarkson University), Sep 2022 – May 2024<br />
              <span className="student-description">
              Virtual Reality, Unity, data collection and visualization, data analysis, machine learning, server usage and maintenance, and paper writing.
              </span>
            </li>
          </ul>
        </section>

      </main>
      <footer className="bottombar">
      <p>Updated in March 2026 by Numan</p>
    </footer>
    </div>
  );
}

export default App;