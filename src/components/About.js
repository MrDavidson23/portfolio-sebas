const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Freelancer FullStack Developer with over 5 years of
                  experience.{" "}
                </h3>
                <p>
                  {`I'm`} from Costa Rica, the most happy place on Earth. I code
                  and create web elements for amazing people around the world. I
                  like work with new people. New people new Experiences.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">+10</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">+10</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2019-2022</span>
                <h6>Computer Science Engineer</h6>
                <p>Costa Rican Technology Institute</p>
              </li>
              <li>
                <span>2024-2025</span>
                <h6>CyberSecurity</h6>
                <p>Southen New Hampshire University</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Freelancer FullStack Engineer with over 5 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="skill-lt">
                <h6>React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>NodeJS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>UI/UX</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>NextJS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a1.jpeg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>FullStack Developer</h6>
                  <label>Pancake | Remote | Jan 2020 - Jan 2022</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Developed program logic for new applications based on fresh
                    coding or revamped logic from existing applications.
                    Analyzed project requirements, translating specifications
                    into functional application components. Coded, tested,
                    debugged, documented, and implemented Web software
                    applications. Applied feedback from code review and
                    implemented changes to meet standards. Updated web pages and
                    navigation tools to meet the {`client's`} current needs and
                    improve usability. Documented style guidelines to keep the
                    design consistent across the team.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.jpeg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>FullStack Developer</h6>
                  <label>First Factory | Remote | Feb 2022 - Jan 2023</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Used ReactJS, NestJs and NodeJS to plan, test and implement
                    various web-based applications. Updated existing software to
                    resolve errors and adapt it to new performance requirements.
                    Produced clean, tight code to create well-functioning web
                    software applications Coordinated the successful deployment
                    of new software applications and checked the functionality
                    against design specifications. Corrected errors in software
                    to fix performance issues and improve usability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.jpg" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer</h6>
                  <label>IBM | Remote | Jan 2023 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Automated, maintained and optimized systems and software
                    infrastructure for clients. Developed and directed software
                    system testing and validation procedures. Maintained product
                    quality by analyzing feedback, managing integration and
                    performing continual tests. Determined system performance
                    standards.Analyzed information to determine, recommend and
                    plan installation of new systems and modifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
