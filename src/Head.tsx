const Head = () => {
  return (
    <>
    <div className="container text-center mt-5 ">
      <div className="row">
        <table className="table table-dark table-hover table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vishnu</td>
              <td>jithesh</td>
              <td>vishnu@gmail.com</td>
            </tr>
            <tr>
              <td>Jithesh</td>
              <td>patinjare purayil</td>
              <td>jithesh@gmail.com</td>
            </tr>
            <tr>
              <td>Swamy</td>
              <td>madavarapu</td>
              <td>swamy@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="container  rounded d-lg-flex d-xl-flex   justify-content-between mb-5 px-5 py-5  bg-dark text-center  ">
      <div className="img mb-4 rounded  ">
        {" "}
        <img
          className="rounded"
          src="https://www.w3schools.com/bootstrap5/cinqueterre.jpg"
          alt=""
        />
      </div>
      <div className="img mb-4 rounded ">
        {" "}
        <img
          className="rounded-circle"
          src="https://www.w3schools.com/bootstrap5/cinqueterre.jpg"
          alt=""
        />
      </div>
      <div className="img mb-4 rounded">
        {" "}
        <img
          className="img-thumbnail"
          src="https://www.w3schools.com/bootstrap5/cinqueterre.jpg"
          alt=""
        />
      </div>
    </div>

    <div className="container mb-4 ">
      <div className="img">
        <img
          className="rounded "
          src="https://www.w3schools.com/bootstrap5/cinqueterre.jpg"
          alt=""
          style={{ width: "50%" }}
        />
      </div>
    </div>

    <div className="container">
      <div className="img">
        <img
          className="rounded img-fluid "
          src="https://www.w3schools.com/bootstrap5/cinqueterre.jpg"
          alt=""
        />
      </div>
    </div>

    <div className="alert alert-success alert-dismissible">
      <p>Sucess click on close icon to continue</p>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
      ></button>
    </div>

    <div className="btn-group ">
      <button className="btn btn-primary">sonyX</button>
      <button className="btn btn-primary">apple</button>

      <div className="btn-group ">
        <button
          className=" btn dropdown-toggle btn-primary"
          data-bs-toggle="dropdown"
        >
          china
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="">
            area
          </a>
          <a className="dropdown-item" href="">
            area
          </a>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="progress">
        <div className="progress-bar" style={{ width: "50%" }}></div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          style={{ width: "90%" }}
        ></div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="progress ">
        <div className="progress-bar bg-warning" style={{ width: "33%" }}>
          10%
        </div>
        <div className="progress-bar bg-success" style={{ width: "33%" }}>
          10%
        </div>
        <div className="progress-bar bg-danger" style={{ width: "33%" }}>
          10%
        </div>
      </div>
    </div>

    <div className="container text-center my-2">
      <button type="button" className="btn btn-primary ">
        <span className="spinner-border spinner-border-sm"> </span>
        Loading..
      </button>
    </div>
    <div className="container ">
      <ul className="pagination d-flex justify-content-center">
        <li className="page-item">
          <span className="page-link ">Previous</span>
        </li>
        <li className="page-item">
          <span className="page-link active">1</span>
        </li>
        <li className="page-item">
          <span className="page-link">2</span>
        </li>
        <li className="page-item">
          <span className="page-link">3</span>
        </li>
        <li className="page-item">
          <span className="page-link">Next</span>
        </li>
      </ul>
    </div>

    <div className="container text-center">
      <ul className="list-group list-group-numbered list-group-horizontal  ">
        <li className="list-group-item list-group-item-action active">hi</li>
        <li className="list-group-item list-group-item-action">hi</li>
        <li className="list-group-item list-group-item-action">hi</li>
      </ul>
    </div>

    <div className="container">
      <div className="card text-center">
        <div className="card-header">Jonathan Doe</div>
        <div className="card-img-top">
          <img
            className="rounded  "
            src="https://www.w3schools.com/bootstrap5/cinqueterre.jpg"
            alt=""
            style={{ width: "100%", height: "600px" }}
          />
        </div>
        <div className="card-body">h</div>
        <div className="card-footer">h</div>
      </div>
    </div>

    <div className="container">
      <div className="card">
        <div className="card-img-top">
          <img
            className="rounded  "
            src="https://www.w3schools.com/bootstrap5/cinqueterre.jpg"
            alt=""
            style={{ width: "100%", height: "600px" }}
          />
        </div>
        <div className="card-img-overlay text-center ">
          <h1>Mountains</h1>
          <p>cant do anything</p>
        </div>
      </div>
    </div>

    <div className="container text-center my-4">
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          Drop down button
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Link 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Link 2
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Link 3
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="container">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="collapse"
        data-bs-target="#demo"
      >
        dropdown
      </button>
      <div className="collapse" id="demo">
        lorem
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="content-1 d-flex  ">
          <div className="flex-fill">span</div>
          <div className=" flex-flow ">span</div>
          <div className="flex-fill">span</div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="d-flex">
        <div className="flex-flow">Item 1 (End in LTR, Start in RTL)</div>
        <div className="me-auto">Item 2 (Start in LTR, End in RTL)</div>
      </div>
    </div>

    <div className="container">
      <div className="row"></div>

      <div className="container">
        <div className="row">
          <div className="data d-flex " style={{ height: "150px" }}>
            <div className="align-self-end">span</div>
            <div>span</div>
            <div>span</div>
          </div>
        </div>
      </div>
      <div className="toast show">
        <div className="toast-header">
          Toast Header
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
          ></button>
        </div>
        <div className="toast-body">Some text inside the toast body</div>
      </div>
    </div>

    <div className="container my-5">
      <div className="row">
        <div className="box d-flex">
          <span></span>
          <span
            style={{ height: "50px", background: "red" }}
            className="border border-start border-1 rounded-pill flex-fill"
          ></span>
          <span
            style={{ height: "50px", width: "50px", background: "red" }}
            className="border border-2 me-2"
          ></span>
          <span
            style={{ height: "50px", width: "50px", background: "red" }}
            className="border border-3 me-2"
          ></span>
          <span
            style={{ height: "50px", width: "50px", background: "red" }}
            className="border border-4 me-2"
          ></span>
          <span
            style={{ height: "50px", width: "50px", background: "red" }}
            className="border border-5 me-2"
          ></span>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="data py-5">
          <div className=" col-sm-12 w-50 bg-black">h</div>
          <div className="  col-sm-12 bg-body-secondary ">w</div>
          <div className="  col-sm-12 bg-body-secondary w-50">w</div>
        </div>
      </div>
    </div>
    

    <div className="container bg-black py-5">
      <div className="row">
        <div className="content   d-md-flex justify-content-between text-center flex-wrap">
          <div className="rounded-pill  flex-grow-1 my-2 mx-md-4 bg-danger">div-1</div>
          <div className="rounded-pill  flex-grow-1 my-2 mx-md-4 bg-success">div-2</div>
          <div className="rounded-pill  flex-grow-1 my-2 mx-md-4 bg-primary">div-3</div>
          <div className="rounded-pill  flex-grow-1 my-2 mx-md-4 bg-light">div-4</div>
          <div className="rounded-pill  flex-grow-1 my-2 mx-md-4 bg-warning">div-5</div>
        </div>
      </div>
    </div>


    <div className="container">
      <div className="row">
        <div className="data d-flex">
          <div className="col-span-6">vishnu</div>
          <div className="col-span-6">vishnu</div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Head;
