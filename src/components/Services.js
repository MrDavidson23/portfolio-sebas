import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Web Development</h5>
                <p>
                  With a keen eye for design and a passion for coding, I
                  transform ideas into fully functional websites that not only
                  look great but also perform seamlessly across various devices
                  and browsers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Web Design</h5>
                <p>
                  My approach combines creativity with technical expertise,
                  allowing me to tackle projects of any scale with precision and
                  efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>SEO Marketing</h5>
                <p>
                  From concept to deployment, I am committed to creating
                  engaging online platforms that leave a lasting impression and
                  drive business success.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Mobile App Development</h5>
                <p>
                  Whether it's building responsive layouts, optimizing
                  performance, or integrating cutting-edge features, I pride
                  myself on delivering solutions that exceed client
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="separated" /> */}
        {/* <Testimonials />s */}
      </div>
    </section>
  );
};
export default Services;
