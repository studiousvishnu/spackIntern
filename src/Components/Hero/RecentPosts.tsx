import "./RecentPosts.css";
interface RecentPostsProps {
  postImg: string;
  postHeading: string;
  postDate: string;

  //   postTime: string;
}
const RecentPosts: React.FC<RecentPostsProps> = ({
  postImg,
  postHeading,
  postDate,

  //   postTime,
}) => {
  return (
    <div className="recent-post-main-container mb-4">
      <div className="row">
        <div className="recent-post-container d-lg-flex col-12  align-items-center  ">
          <div className="left-recent-post-container">
            <div className="recent-post-img-container col-12  col-lg-4 text-center ">
              <img
                className=" recent-post-img img rounded-3  mb-4 "
              
                src={postImg}
                alt=""
              />
            </div>
          </div>
          <div className="" style={{width:"30px"}}></div>

          <div className="right-recent-post-container col-lg-6  ">
            <p className="fw-bold text-center text-lg-start ">
              {postHeading}
            </p>
            <div className="postDate d-lg-flex">
              <p className="text-center text-lg-start">
                <i className="fa-solid fa-calendar-days me-2"></i>
                <span className="date ms-2 ">{postDate}</span>
              </p>
              <p className="text-center text-lg-start">
                {/* <span className="date ms-2 ">{postTime} </span> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
