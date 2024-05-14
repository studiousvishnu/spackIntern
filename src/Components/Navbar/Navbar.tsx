import "./Navbar.css";
const Navbar = () => {
  return (
    <>
   <div className="container pt-4 ">
    <div className="row">
      <div className="navbar-container d-flex justify-content-between align-items-center bg-white p-4 rounded-pill">
      <div className=" d-flex align-items-center col-3 ">
      <i className="fa-solid fa-magnifying-glass "></i>
      <input type="text" placeholder ="quicksearch" className="search-text-area w-75" /></div>
        <div className="fs-3 col-3 text-center"><strong>ZENTO</strong></div>
        <div className="col-3 text-end"><button  className="btn ">subscribe</button></div>
      </div>
    </div>
   </div>

   


    </>
  );
};

export default Navbar;
