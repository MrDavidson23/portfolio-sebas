import Image from "next/image";
const Portfolio = () => {
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>My Portfolio.</h3>
        </div>
        <div className="portfolio-content grid-gutter-lg grid-col-3">
          <div className="grid-item">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Freelance Navigator WebPage</h5>
                <span>ReactJS Landing Page</span>
              </div>
              <div className="portfolio-img">
                <Image
                  src="/static/img/portfolio-1.png"
                  title=""
                  alt=""
                  width={300}
                  height={450}
                />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Necotium Searcher</h5>
                <span>Searcher Web Page</span>
              </div>
              <div className="portfolio-img">
                <Image
                  src="/static/img/portfolio-2.png"
                  title=""
                  alt=""
                  width={300}
                  height={450}
                />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Red Universitaria WebPage</h5>
                <span>HTML and CSS</span>
              </div>
              <div className="portfolio-img">
                <Image
                  src="/static/img/portfolio-3.png"
                  title=""
                  alt=""
                  width={300}
                  height={450}
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
