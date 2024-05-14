import "./Footer.css";

const Footer = () => {
  return (
    <div className="  ">
      <div className="footer-container d-lg-flex text-center bg-white py-4 mb-4">
        <div className="col-lg-2 "></div>
        <div className="col-lg-4">
          <h2 className="text-lg-start fw-bold">Join our Community</h2>
          <p className="text-lg-start">
            Unlock full access to Zento and see the entire library of
            paid-members only posts.
          </p>
        </div>
        <div className="col-lg-4">
          <p>Subscribe to our news letter cancel at any time</p>
          <button className="btn px-4 my-4">Join Now</button>
        </div>
        <div className="col-lg-2  "></div>
      </div>

      <div className="footer-content mt-4 ">
        <div className="container d-lg-flex text-center text-lg-start  pt-4">
          <div className="col-lg-3">
            <p className="fw-bold">Follow Me</p>
            <div className="footer-sub-content-1">
              <div className="twitter d-flex justify-content-between align-items-center">
                <p className="pt-4">
                  Follow me on <span className="fw-bold">Twitter</span>
                </p>

                <i className="  me-2 me-lg-4  mt-2 fa-brands fa-x-twitter"></i>
              </div>
              <div className="facebook d-flex justify-content-between align-items-center">
                <p className="pt-4">
                  Follow me on <span className="fw-bold">Facebook</span>
                </p>
                <i className="  me-2 mt-2 me-lg-4 fa-brands fa-facebook"></i>
              </div>
              <div className="instagram d-flex justify-content-between align-items-center">
                <p className="pt-4">
                  Follow me on <span className="fw-bold">Instagram</span>
                </p>
                <i className=" mt-2 me-2 me-lg-4 fa-brands fa-instagram"></i>
              </div>
              <div className="tik-tok d-flex justify-content-between align-items-center">
                <p className="pt-4">
                  Follow me on <span className="fw-bold">Tik Tok </span>
                </p>
                <i className=" mt-2 me-2 me-lg-4 fa-brands fa-tiktok"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ms-lg-2 mb-4 mt-4 mt-lg-0">
            <h5 className="fw-bold py-2">Quick Links</h5>
            <p className="pb-4">Home</p>
            <p className="pb-4">Features</p>
            <p className="pb-4">Contact</p>
            <p className="pb-4">Terms & Conditions</p>
            <p className="pb-4">Privacy Policy</p>
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold  pb-4 footer-heading">ZENTO</h3>
            <p>
              Subscribe to our email newsletter and unlock access to
              members-only content and exclusive updates.
                </p>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
