import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import Portfolio from "../src/components/Portfolio"
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {" "}
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="glitch-box">
          <div
            className="glitch"
            style={{ backgroundImage: "url(static/img/home-banner.jpeg)" }}
          />
        </div>
        <div className="home-banner-01 glitch-home">
          <div className="container">
            <div className="row full-screen align-items-center justify-content-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <div className="img">
                  </div>
                  <h1 className="font-alt">Sebastian Quesada</h1>
                  <p className="lead">
                    I Am <TypingAnimation />
                  </p>
                  <div className="nav justify-content-center social-icons">
                    <a target="_blank" href="https://www.linkedin.com/in/sebas-quesada/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a target="_blank" href="https://github.com/MrDavidson23">
                      <i className="fab fa-github" />
                    </a>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=50661818868&text=Hello!%20I%20would%20like%20to%20hire%20you%20for%20a%20freelance%20project.%20Are%20you%20available%20for%20an%20online%20meeting%3Fwa.link/25z5pg">
                      <i className="fab fa-whatsapp" />
                    </a>
                  </div>
                  <div className="btn-bar mt-3">
                  <a className="px-btn px-btn-theme" target="_blank" href='static/CV.pdf'>
                    <span>Download CV</span>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
    </Layout>
  );
};
export default Index;
