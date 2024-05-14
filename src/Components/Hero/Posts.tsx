import "./Posts.css";
interface PostsProps {
  postImg: string;
  postHeading: string;
  postDate: string;
  postContent: string;

  postTime: string;
}
const Posts: React.FC<PostsProps> = ({
  postImg,
  postHeading,
  postDate,
  postContent,

  postTime,
}) => {
  return (
    <>
      <div className="posts-container d-lg-flex bg-white p-2 rounded-4 mb-4">
        <div className="posts-left-container col-lg-4">
          <div className="posts-img-container ">
            <img
              className=" post-img img-fluid rounded-4 mb-sm-4 mb-lg-0  "
              src={postImg}
              alt=""
            />
          </div>
        </div>

        <div className="posts-right-container col-lg-8 ms-lg-4 mt-4">
          <div className="postDuration d-lg-flex  flex-wrap ">
            <div className="flexx-1">
              <p className="text-center text-lg-start">
                <i className="  fa-solid fa-calendar-days "></i>
                <span className="date  ms-2 me-4 ">{postDate}</span>
              </p>
            </div>
            <div className="flexx-2">
              <p className="text-center text-lg-start">
                <i className="fa-solid fa-clock  fa-clocks"></i>
                <span className="date ms-2  me-4">{postTime} </span>
              </p>
            </div>
            <div className="flexx-3">
              <p className="text-center text-lg-start">
                <i className="fa-solid fa-medal  fa-clocks"></i>
                <span className="date ms-2">Rating </span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </p>
            </div>
            <div className="posts-heading  ">
              <p className="fw-bold    fs-4 text-center text-lg-start col-lg-10 ">
                {postHeading}
              </p>
            </div>
            <div className="posts-heading   col-lg-12">
              <p className="  text-center text-lg-start col-lg-10 fw-medium ">
                {postContent}
              </p>
            </div>
            <div className="posts-footer d-lg-flex justify-content-between col-lg-10 pt-4  ">
              <div className="  left-posts-footer me-lg-4">
                <ul
                  className="d-flex flex-wrap justify-content-center justify-content-lg-start  text-center posts-ul "
                  style={{
                    listStyleType: "none",
                    lineHeight: "1.5rem",
                    paddingLeft: "1px",
                  }}
                >
                  <li style={{ paddingRight: "20px" }}>Inspiration</li>
                  <li style={{ paddingRight: "20px" }}>Music</li>
                </ul>
              </div>

              <div className="  right-posts-footer  text-center d-flex justify-content-center   ">
                <div className="  d-flex  mt-lg-1   ">
                  <div className="hero-small-img">
                    <img
                      className="img-fluid rounded-pill  me-2  "
                      style={{ height: "25px" }}
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
      </div>
    </>
  );
};

export default Posts;
