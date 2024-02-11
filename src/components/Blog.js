import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Blog.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/blog1">
                  <a>
                    <Image
                      src="/static/img/blog.png"
                      title=""
                      alt=""
                      width={300}
                      height={300}
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">15/NOV/2023</div>
                <h6>
                  <Link href="/blog1">
                    <a>
                      Tips for Efficient Code Management in Collaborative
                      Projects
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/blog2">
                  <a>
                    <Image
                      src="/static/img/blog.png"
                      title=""
                      alt=""
                      width={300}
                      height={300}
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">15/DIC/2023</div>
                <h6>
                  <Link href="/blog2">
                    <a>
                      The Importance of Responsive Design in Web Development
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/blog3">
                  <a>
                    <Image
                      src="/static/img/blog.png"
                      title=""
                      alt=""
                      width={300}
                      height={300}
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">15/JAN/2024</div>
                <h6>
                  <Link href="/blog3">
                    <a>
                      Mastering SEO for Web Developers: A Comprehensive Guide
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          {/* <div className="col-12 read-more-blog text-center">
            <Link href="/blog">
              <a className="px-btn px-btn-theme">More Blogs</a>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Blog;
