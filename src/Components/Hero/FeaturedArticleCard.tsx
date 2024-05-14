import "./FeaturedArticleCard.css";
const FeaturedArticleCard = () => {
  return (
    <>
      <div className=" card-main-container border border-2 m-2 text-white rounded-4 py-4">
        <div className="card-container-heading col-3 col-lg-3 col-xl-4  col-xxl-4 py-2 rounded-end-4 my-4 ">
          Inspiration
        </div>
        <div className="card-container d-flex justify-content-between mx-2 me-auto   ">
          <div className="left-card-container mr-2  col-md-5 col-lg-4 ">
            <div className="hero-info d-flex align-items-center ">
            <img
                className="img-fluid rounded-pill  me-2  " style={{height:"25px"}}
                src="https://ik.imagekit.io/freeflo/production/7df2c2dc-4bc9-4284-97e5-8e4525496b62.png?tr=w-1920,q-75&alt=media&pr-true"
                alt=""
              />
              <div className="hero-name">
              <p className="pt-2">Jonathan Doe</p>
              </div>
            </div>
             <div className="reading d-flex">
             <i className="fa-solid fa-clock me-2 mt-1" style={{fontSize:"20px"}}></i> <p>1 Min Reading</p>
            
             </div>
             <p> <i className="fa-solid fa-medal me-2 pt-1 " style={{fontSize:"20px"}}></i>Rating</p>
           
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="right-card-container text-end  px-2  ">
            <p className=" col-md-text-start text-end fs-sm-2 fs-5 ms-auto ">
              The spectacle before us was indeed sublime
            </p>
            <button className="btn bg-black text-white  ">Read more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedArticleCard;
