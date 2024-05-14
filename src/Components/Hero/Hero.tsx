import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import FeaturedArticleCard from "./FeaturedArticleCard";
import RecentPosts from "./RecentPosts";
import Posts from "./Posts";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="container mt-4  ">
        <div className="row">
          <div className="d-none d-lg-block" style={{ height: "100px" }}></div>
          <div className="left-container col-12 col-md-6  mt-4">
            <div className="intro-heading text-center text-md-start ">
              <h1>
                Hi I'm <span className="name">Jonathan Doe</span>
              </h1>
            </div>

            <div className="intro-data mt-4 text-center text-md-start">
              <p>
                I'm a design technologist in Atlanta. I like working on the
                front-end of the web. This is my site, Zento where I blog, share
                and write about my personal projects..
              </p>
            </div>
            <div
              className="d-none d-lg-block "
              style={{ height: "100px" }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="connect-container">
                  <p className="text-center  text-md-start ">
                    <strong>Lets connect</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-white mb-4 rounded p-2">
              <div className="row">
                <div className="email-btn d-flex justify-content-between align-items-center">
                  <div className="email align-items-center">
                    <input
                      type="text"
                      placeholder="Enter your email-address"
                      className="search-text-area"
                    />
                  </div>

                  <div className="get-started">
                    <button className="btn search-text-area fs-8">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container col-12 col-md-6  ">
            <div className="container">
              <div className="row ">
                <img
                  className="img-fluid  "
                  src="https://ik.imagekit.io/freeflo/production/7df2c2dc-4bc9-4284-97e5-8e4525496b62.png?tr=w-1920,q-75&alt=media&pr-true"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="title text-center ">
          <h5>
            <i className="fa-solid fa-bolt"></i>Featured Articles
          </h5>
        </div>
        <div className="featured-articles">
          <Swiper
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={20}
            grabCursor={true}
            pagination={false}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
              2000: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <FeaturedArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedArticleCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedArticleCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div style={{ height: "60px" }}></div>

      <div className="container ">
        <div className="row">
          <div className="second-section d-lg-flex    ">
            <div className="second-left-section col-lg-4">
              <div className="container about-me-container my-4  ">
                <div className="row">
                  <div className="left-posts-container ">
                    <div className="about-me text-center text-lg-start col-lg-11 ">
                      <h5 style={{ marginBottom: "50px" }}>About Me</h5>
                      <div className="hero-small-info bg-white rounded-4 container ">
                        <div className="hero-small-intro ">
                          <div className="container pt-4 d-flex  justify-content-center justify-content-lg-start align-items-center">
                            <div className="hero-small-img">
                              <img
                                className="img-fluid rounded-pill  me-2  "
                                style={{ height: "70px" }}
                                src="https://ik.imagekit.io/freeflo/production/7df2c2dc-4bc9-4284-97e5-8e4525496b62.png?tr=w-1920,q-75&alt=media&pr-true"
                                alt=""
                              />
                            </div>
                            <div className="hero-small-intro text-center text-lg-start ">
                              <span className="fw-bold">
                                Jonathan Doe <br />
                              </span>
                              <span className="fw-lighter ">
                                Founder & Editor
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="container my-4">
                          <div className="row">
                            <div className="hero-small-data   ">
                              <p className="lh-2">
                                Hello! My name is Jonathan Doe!, Actively
                                writing articles for this website. I really like
                                tutorials and illustrations, so stay alert for
                                my next tutorials.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="social-container pb-4 ">
                          <div className="hero-small-social-media d-flex justify-content-between px-4 ">
                            <p>
                              <i className="fa-brands fa-x-twitter"></i>Twitter
                            </p>
                            <p>
                              <i className="fa-brands fa-facebook"></i>Facebook
                            </p>
                            <p>
                              <i className="fa-solid fa-globe"></i>Mail
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: "60px" }}></div>

              <div className="container tag-cloud-container">
                <div className="row">
                  <div className="tag-cloud-heading text-center text-lg-start">
                    <h5>Tag Cloud</h5>
                  </div>

                  <ul
                    className="d-flex flex-wrap justify-content-center justify-content-lg-start hero-ul  "
                    style={{ listStyleType: "none", lineHeight: "1.5rem" }}
                  >
                    <li style={{ paddingRight: "20px" }}>Inspiration</li>
                    <li style={{ paddingRight: "20px" }}>Music</li>
                    <li style={{ paddingRight: "20px" }}>Inspiration</li>
                    <li style={{ paddingRight: "20px" }}>Music</li>
                    <li style={{ paddingRight: "20px" }}>Inspiration</li>
                    <li style={{ paddingRight: "20px" }}>Music</li>
                    <li style={{ paddingRight: "20px" }}>Inspiration</li>
                  </ul>
                </div>
              </div>

              <div style={{ height: "60px" }}></div>

              <div className="container recent-posts-container">
                <div className="row">
                  <div className="recent-post-heading text-center text-lg-start">
                    <h5>Recent Posts</h5>
                    <div style={{ height: "30px" }}></div>
                    <Link to="/LandingPage" className="linking">
                      {" "}
                      <RecentPosts
                        postImg="https://ik.imagekit.io/freeflo/production/7df2c2dc-4bc9-4284-97e5-8e4525496b62.png?tr=w-1920,q-75&alt=media&pr-true"
                        postHeading="The spectacle before us was indeed sublime"
                        postDate="September 26 2019"
                      />
                    </Link>

                    <Link to="/LandingPage" className="linking">
                      <RecentPosts
                        postImg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTw68vXuaBgN3r5nVFu8DhkLrKGOQYnC3hKX_k2EmepvOBtkMvX"
                        postHeading="The spectacle before us was indeed sublime"
                        postDate="September 26 2019"
                      />
                    </Link>
                    <Link to="/LandingPage" className="linking">
                      {" "}
                      <RecentPosts
                        postImg="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPh1rJw--IyoMCpnESGHvHZ6Y1FCM4Yi3CknAz7szyfgoqIAZf"
                        postHeading="The spectacle before us was indeed sublime"
                        postDate="September 26 2019"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="container ">
              <div className="row">
                <div className="section-right-container text-center  text-lg-start ">
                  <div className="post-container">
                    <h5 className="fw-bold my-2">Posts</h5>
                    <Link to="/LandingPage" className="linking">
                      <Posts
                        postImg="https://ik.imagekit.io/freeflo/production/7df2c2dc-4bc9-4284-97e5-8e4525496b62.png?tr=w-1920,q-75&alt=media&pr-true"
                        postHeading="The spectacle before us was indeed sublime"
                        postDate="September 26 2019"
                        postTime="1 Min Read"
                        postContent="Welcome, it's great to have you here. We know that first
                      impressions are important, so we've populated your new siteSpain is home to some of the most stunning architecture
                      in Europe, known throughout the world for its
                      distinguishable form......"
                      />
                    </Link>
                    <Link to="/LandingPage" className="linking">
                      <Posts
                        postImg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTw68vXuaBgN3r5nVFu8DhkLrKGOQYnC3hKX_k2EmepvOBtkMvX"
                        postHeading="The spectacle before us was indeed sublime"
                        postDate="September 26 2019"
                        postTime="1 Min Read"
                        postContent="Welcome, it's great to have you here. We know that first
                      impressions are important, so we've populated your new site..."
                      />
                    </Link>
                    <Link to="/LandingPage" className="linking">
                      <Posts
                        postImg="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPh1rJw--IyoMCpnESGHvHZ6Y1FCM4Yi3CknAz7szyfgoqIAZf"
                        postHeading="The spectacle before us was indeed sublime"
                        postDate="September 26 2019"
                        postTime="1 Min Read"
                        postContent="Welcome, it's great to have you here. We know that first
                      impressions are important, so we've populated your new site..."
                      />
                    </Link>
                    <Link to="/LandingPage" className="linking">
                      <Posts
                        postImg="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTw68vXuaBgN3r5nVFu8DhkLrKGOQYnC3hKX_k2EmepvOBtkMvX"
                        postHeading="The spectacle before us was indeed sublime"
                        postDate="September 26 2019"
                        postTime="1 Min Read"
                        postContent="Welcome, it's great to have you here. We know that first
                      impressions are important, so we've populated your new site..."
                      />
                    </Link>
                    <Link to="/LandingPage" className="linking"></Link>
                    <Link to="/LandingPage" className="linking">
                      <Posts
                        postImg="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPh1rJw--IyoMCpnESGHvHZ6Y1FCM4Yi3CknAz7szyfgoqIAZf"
                        postHeading="The spectacle before us was indeed sublime"
                        postDate="September 26 2019"
                        postTime="1 Min Read"
                        postContent="Welcome, it's great to have you here. We know that first
                      impressions are important, so we've populated your new site..."
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/LandingPage" className="linking">
                <div className="final-post bg-white rounded-3">
                  <div className="final-post-img-container ">
                    <div className="img-style position-absolute  rounded-start-0 rounded-end-pill  py-1 ms-2 ps-1 pe-4 mt-4 text-white ">
                      Inspiration
                    </div>
                    <img
                      src="https://img.freepik.com/premium-photo/pink-futuristic-city-with-towering-buildings-flying-cars-clear-blue-sky_124507-163527.jpg?w=1060"
                      className="img-fluid final-post-img p-2 rounded-4 col-sm-12"
                      alt=""
                    />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="final-post-time d-flex justify-content-center flex-wrap">
                        <p className="text-center text-lg-start">
                          <i className="  fa-solid fa-calendar-days "></i>
                          <span className="date  ms-2 me-4 ">
                            26 September 2024
                          </span>
                        </p>
                        <p className="text-center text-lg-start">
                          <i className="fa-solid fa-clock  fa-clocks"></i>
                          <span className="date ms-2  me-4">
                            10 Min Reading
                          </span>
                        </p>
                        <p className="text-center text-lg-start">
                          <i className="fa-solid fa-medal  fa-clocks"></i>
                          <span className="date ms-2">Rating </span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row  px-4">
                      <div className="final-post-heading text-center flex-wrap d-flex justify-content-center">
                        <h3 className="fw-bold fs-2">
                          5 Spanish Cities that will make you fall in Love
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="final-post-data text-center ms-lg-3">
                        <p>
                          Spain is home to some of the most stunning
                          architecture in Europe, known throughout the world for
                          its distinguishable form...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="final-author-data d-flex justify-content-center py-4">
                        <div className="  d-flex  mt-lg-1   ">
                          <div className="hero-small-img">
                            <img
                              className="img-fluid rounded-pill  me-2  "
                              style={{ height: "30px" }}
                              src="https://ik.imagekit.io/freeflo/production/7df2c2dc-4bc9-4284-97e5-8e4525496b62.png?tr=w-1920,q-75&alt=media&pr-true"
                              alt=""
                            />
                          </div>
                          <div className="hero-small-intro text-center text-lg-start ">
                            <span className=" text-center">
                              Jonathan Doe <br />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="container mb-4">
                <div className="row">
                  <div className="pagination d-flex justify-content-center align-items-center">
                    <p className="me-4 my-5">Page 1 of 2</p>
                    <button className="btn">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
