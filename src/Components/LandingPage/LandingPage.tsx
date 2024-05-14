import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container my-4 ">
      <div className="row">
        <div className="left-container col-12 col-lg-4     mt-4">
          <div className="landing-page--heading text-center text-lg-start ">
            <h5 className="fw-bold">
              <i className="fa-solid fa-star fa-landing me-2 my-2 "></i>Article
              Information
            </h5>
          </div>

          <div className="container ">
            <div className="row ">
              <div className="article-information-container   text-center text-lg-start  rounded-3  py-4 d-flex justify-content-center justify-content-lg-start">
                <div className="container bg-white py-4 rounded-4">
                  <ul
                    className=""
                    style={{ listStyle: "none", color: "#475e82" }}
                  >
                    <li className=" my-3 fs-6  fw-bold">
                      <i className="fa-solid fa-tag"></i> Category:
                      <span className="fw-light">Inspiration</span>
                    </li>
                    <li className=" my-3 fs-6  fw-bold">
                      <i className="fa-solid fa-clock  fa-clocks"></i> Updated:{" "}
                      <span className="fw-light">March 27 2024</span>
                    </li>

                    <li className=" my-3 fs-6  fw-bold">
                      <i className="fa-solid fa-user"></i> Author:{" "}
                      <span className="fw-light"> Jonathan Doe</span>
                    </li>

                    <li className=" my-3 fs-6  fw-bold">
                      <i className="fa-solid fa-stopwatch"></i> Reading Time:
                      <span className="fw-light">1 Min</span>
                    </li>

                    <li className=" my-3 fs-6  fw-bold">
                      <i className="fa-solid fa-medal fa-medals"></i> Rating:
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="table-of-contents-heading text-center text-lg-start">
                <p className="fw-bold fs-5 mb-2 mt-4">
                  {" "}
                  <i className="fa-solid fa-star fa-landing  my-2 me-2 " />
                  Table of Contents
                </p>
              </div>
              <div className="table-of-contents d-flex gap-2 ms-lg-2 text-center text-lg-start justify-content-center justify-content-lg-start ">
                <div className="rect-style  "></div>

                <div className="table-of-contentData mb-10  ms-3">
                  <p className="fw-bold">
                    A few things you should know upfront
                  </p>
                  <p>Next up,the editor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-container col-12 col-lg-8   ">
          <div className=" text-center  rounded-4 bg-white rounded-3">
            <div className="heading p-3 d-flex justify-content-center  ">
              <h2 className="fw-bold  w-75 ">
                The Spectacle before us was indeed sublime
              </h2>
            </div>

            <div className="landing-page-publish text-center">
              <i className="  fa-solid fa-calendar-days me-2"></i>
              <span>Published:September 26,2019</span>
            </div>

            <div className="  landing-page-img-container  p-4">
              <img
                className=" img  landing-page-img rounded-3 text-center"
                src="https://img.freepik.com/premium-photo/psychedelic-vintage-abstract-landscape-design-retro-60s-70s-trippy-design_575980-43783.jpg?w=1060"
                alt=""
              />
              <div className="landing-page-content py-4 text-center text-lg-start">
                <p>Welcome, it's great to have you here.</p>
              </div>
              <div className="landing-page-content-2 t text-lg-start">
                <p>
                  We know that first impressions are important, so we've
                  populated your new site with some initial getting started
                  posts that will help you get familiar with everything in no
                  time, This is the first one!
                </p>
                <h5 className="fw-bold py-2">
                  A few things you should know upfront
                </h5>
                <div className="container">
                  <ul className="landing-page-list text-start">
                    <li>
                      Ghost is designed for ambitious, professional publishers
                      who want to actively build a business around their
                      content. That's who it works best for.
                    </li>
                    <li>
                      The entire platform can be modified and customised to suit
                      your needs. It's very powerful, but does require some
                      knowledge of code. Ghost is not necessarily a good
                      platform for beginners or people who just want a simple
                      personal blog.
                    </li>
                    <li>
                      For the best experience we recommend downloading the Ghost
                      Desktop App for your computer, which is the best way to
                      access your Ghost site on a desktop device.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="img-container img-fluid col-12 d-lg-flex pe-lg-3 mb-3">
                <img
                  className="  rounded-4 col-12 col-lg-4"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTw68vXuaBgN3r5nVFu8DhkLrKGOQYnC3hKX_k2EmepvOBtkMvX"
                  alt=""
                />
                <img
                  className=" rounded-4 col-12 col-lg-4 mx-lg-2 my-2 my-lg-0"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTw68vXuaBgN3r5nVFu8DhkLrKGOQYnC3hKX_k2EmepvOBtkMvX"
                  alt=""
                />
                <img
                  className=" rounded-4 col-12 col-lg-4"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTw68vXuaBgN3r5nVFu8DhkLrKGOQYnC3hKX_k2EmepvOBtkMvX"
                  alt=""
                />
              </div>
              <div className="landing-page-content-3 text-center text-lg-start">
                <p>
                  Ghost is made by an independent non-profit organisation called
                  the Ghost Foundation. We are 100% self funded by revenue from
                  our Ghost(Pro) service, and every penny we make is re-invested
                  into funding further development of free, open source
                  technology for modern publishing.
                </p>
              </div>

              <div className="col-12 text-center d-lg-flex justify-content-center">
                <div className="img-fluid  ">
                  <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPh1rJw--IyoMCpnESGHvHZ6Y1FCM4Yi3CknAz7szyfgoqIAZf"
                    className="img-3 rounded-3"
                    alt="Your Image"
                  />
                </div>
              </div>
              <div className="caption text-center py-2 pb-4">
                Exmaple Caption
              </div>
              <div className=" text-center text-lg-start">
                <p>
                  The version of Ghost you are looking at right now would not
                  have been made possible without generous contributions from
                  the open source{" "}
                  <span className="special-title fw-bold text-start">
                    community
                  </span>
                  .
                </p>
              </div>
              <div className="landing-page-content  text-center text-lg-start">
                <p className="text-lg-start fs-4 fw-bold">
                  Next up, the editor
                </p>
                <p className="">
                  The main thing you'll want to read about next is probably:
                  <span className="special-title fw-bold text-start">
                    the Ghost editor
                  </span>
                  , This is where the good stuff happens.
                </p>
                <div className="container">
                  <div className="seperator my-4 text-start "></div>
                </div>
                <div className="container  ms-lg-4 px-lg-4 py-2">
                  <p>
                    By the way, once you're done reading, you can simply delete
                    the default Ghost user from your team to remove all of these
                    introductory posts!
                  </p>
                </div>
                <div className="container">
                  <div className="seperator my-4 text-start "></div>
                </div>
                <p className="fw-bold text-center py-4">
                  Categorized in{" "}
                  <span className="special-title">
                    Inspiration,LifeStyle,Travel
                  </span>
                </p>
                <div className="seperator my-4 text-start "></div>
                <div className="landing-page-social-media d-flex justify-content-center  gap-2 gap-lg-4 ">
                  <p>Share article</p>
                  <div className="social-media-apps ">
                    <i className="  me-2 me-lg-4 fa-brands fa-facebook"></i>
                    <i className="  me-2 me-lg-4 fa-brands fa-x-twitter"></i>
                    <i className="  me-2 me-lg-4 fa-solid fa-envelope"></i>
                    <i className="  me-2 me-lg-4 fa-brands fa-whatsapp"></i>
                  </div>
                </div>
                <div className="landing-page-link d-md-flex justify-content-center  align-items-center container mb-4">
                  <input
                    type="text"
                    placeholder="https://themes.estudiopatagon.com/wordpress/zento/wfjekfneafe/"
                    className=" landing-search  col-lg-6 me-1"
                  />
                  <div className="py-2 d-lg-none"></div>

                  <button className="btn search-text-area  ">Copy Link</button>
                </div>
              </div>
            </div>
          </div>
          <div className="  col-lg-5  ">
            <div className="prev-page-container  mt-4 d-flex rounded-3 py-3 ">
              <div className="arrow-container col-2 bg-white rounded-start rounded-pill  ps-2 ps-lg-3  my-4 py-2">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="prev-page-data col-1"></div>
              <div className="prev-page-data  text-white pt-2 ">
                <span>
                  Previous Article <br />{" "}
                </span>
                <span> far far away, behind the word mountains</span>
              </div>
            </div>
          </div>
          <div className="more-container py-4 my-4 bg-white rounded-3">
            <div className="container">
              <div className="row ">
                <div className="more-container-heading   px-4 col-sm-12 d-sm-flex justify-content-center justify-content-sm-between align-items-center  ">
                  <div className="more-heading-img d-flex  align-items-center">
                    <div className="left-container d-flex py-4 ">
                      <img
                        src="https://ik.imagekit.io/freeflo/production/7df2c2dc-4bc9-4284-97e5-8e4525496b62.png?tr=w-1920,q-75&alt=media&pr-true"
                        style={{ height: "70px " }}
                        className="rounded-pill me-4"
                        alt=""
                      />
                      <div className="left-content mt-1">
                        <p>
                          More in this <span className="fw-bold">category</span>
                        </p>
                        <h3 className="fw-bold">Inspiration</h3>
                      </div>
                    </div>
                  </div>
                  <div className="right-content text-center text-lg-start">
                    <button className="btn-article p-2 rounded-2 text-white">
                      View all Articles
                    </button>
                  </div>
                </div>

                <div className="container mx-lg-3">
                  <div className="row"></div>
                  <div className="more-container-content container text-center my-4 text-lg-start">
                    <p>Musical improvisation is the spontaneous music</p>
                    <div className="seperator my-1  text-start "></div>
                    <p>Musical improvisation is the spontaneous music</p>
                    <div className="seperator my-1 text-start "></div>
                    <p>Musical improvisation is the spontaneous music</p>
                    <div className="seperator my-1 text-start "></div>
                    <p>Musical improvisation is the spontaneous music</p>
                    <div className="seperator my-1 text-start "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="comments-container fw-bold fs-5 text-center text-lg-start">
                <i className="fa-solid fa-star fa-landing me-2 my-2 " />{" "}
                Comments
              </div>
            </div>
            <div className="comment-body d-flex mt-3">
              <div className="col-lg-1">
                <img
                  src="https://ik.imagekit.io/freeflo/production/7df2c2dc-4bc9-4284-97e5-8e4525496b62.png?tr=w-1920,q-75&alt=media&pr-true"
                  style={{ height: "40px " }}
                  className="rounded-pill  me-2 me-lg-4"
                  alt=""
                />
              </div>
              <div className="col-lg-10 text-start">
                <p>
                  <span className="fw-bold">Jonathan Doe</span> on May 16 2022
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                  quae atque alias accusantium quo voluptate, quas at mollitia
                  enim laudantiums aperiam?
                </p>
                <div className="comment-btn text-start">
                  <button className="btn  ">Reply</button>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row"></div>
            <div className="comment-body d-flex mt-3 ms-4 container mt-4">
              <div className="col-lg-1">
                <img
                  src="https://ik.imagekit.io/freeflo/production/7df2c2dc-4bc9-4284-97e5-8e4525496b62.png?tr=w-1920,q-75&alt=media&pr-true"
                  style={{ height: "40px " }}
                  className="rounded-pill  ms-4 me-2 me-lg-4  "
                  alt=""
                />
              </div>
              <div className="col-lg-10 text-start ms-lg-4">
                <p>
                  <span className="fw-bold">Jonathan Doe</span> on May 16 2022
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                  quae atque alias accusantium quo voluptate, quas at mollitia
                  enim laudantiums aperiam?
                </p>
                <div className="comment-btn text-start">
                  <button className="btn  ">Reply</button>
                </div>
              </div>
            </div>
          </div>

          <div className="leave-a-reply-container  mt-4 container ">
            <p className="fw-bold"> Leave a Reply</p>
            <div className="comment-container ">
              <textarea
                name="post-reply"
                rows={10}
                cols={50}
                className=" text-area rounded-3 w-100 border-0"
              />
            </div>
            <div className="comment-details-container d-md-flex justify-content-between mt-2 gap-2 ">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Name"
                  className=" rounded-2  px-2 mb-4 width text-area text-center text-md-start py-2"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Email"
                  className=" rounded-2 px-2 width text-area text-center text-md-start py-2"
                />
              </div>
            </div>
            <div className="mt-4 mt-lg-0">
              <input
                type="text"
                placeholder="Website"
                className="  rounded-2 px-2 w-100 text-area text-center text-md-start py-2"
              />
            </div>
            <div className="check-btn mt-4 ">
              <input type="checkbox" className="me-2 " />
              <span className="">
                Save my name, email, and website in this browser for the next
                time I comment.
              </span>
            </div>
            <div className="reply-btn text-center text-lg-start">
              <button className="btn p-2 px-4 my-4">Post Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
