import Image from "next/image";
import Layout from "../src/layout/Layout";
const SingleBlog = () => {
  return (
    <Layout blog>
      <div className="single-blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">Lifestyle</a>
                  </h6>
                  <h2>They Now Bade Farewell To The Kind But Unseen People</h2>
                  <div className="media">
                    <div className="avatar">
                      {/* <Image src="/static/img/team-1.jpg" title="" alt="" layout='fill'/> */}
                    </div>
                    <div className="media-body">
                      <label>Sergio Roth</label>
                      <span>26 FEB 2022</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem. Adipiscing veni amet
                    luctus enim sem libero tellus viverra venenatis aliquam.
                    Commodo natoque quam pulvinar elit.
                  </p>
                  <p>
                    Eget aenean tellus venenatis. Donec odio tempus. Felis arcu
                    pretium metus nullam quam aenean sociis quis sem neque vici
                    libero. Venenatis nullam fringilla pretium magnis aliquam
                    nunc vulputate integer augue ultricies cras. Eget viverra
                    feugiat cras ut. Sit natoque montes tempus ligula eget vitae
                    pede rhoncus maecenas consectetuer commodo condimentum
                    aenean.
                  </p>
                  <h4>What are my payment options?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Dick Grayson</cite>
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="nav tag-cloud">
                  <a href="#">Design</a>
                  <a href="#">Development</a>
                  <a href="#">Travel</a>
                  <a href="#">Web Design</a>
                  <a href="#">Marketing</a>
                  <a href="#">Research</a>
                  <a href="#">Managment</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SingleBlog;
