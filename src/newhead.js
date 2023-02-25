import logo from "./olx_logo.svg"
import slogo from "./search_black.png"
import sear from "./search.svg"
const Newhead = () =>{

    return(
<div>
<div className='row'>
<nav className="navbar navbar-light bg-light">
<div className="container">
  <a className="navbar-brand " href="www.google.com">
    <img src={logo} width="30" height="30" alt=""/>
  </a>
  <div className="col-3">
              <div className="dropdown"  >
                <button
                  className="btn btn-outline-dark bg-white dropdown-toggle button1 "
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{width:"100%" , fontSize:"1 rem", overflow:"hidden"}}
                  
                >
                  <img
                  className="img1"
                    src={slogo}
                    alt=""
                  />
                 <span className="ms-3" > Search City, area or local...</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="www.google.com">Action</a>
                  <a className="dropdown-item" href="www.google.com">Another action</a>
                  <a className="dropdown-item" href="www.google.com">Something else here</a>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
            <div
                className="input-group input-outline-dark finp "
                
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  style={{width:"60%" , fontSize:"1rem"}}
                />
                <div className="input-group-append img6">
                <div>
                  <img className="image6"
                    src={sear}
alt=''
                  />
                </div>
                </div>
              </div>
            </div>
            <div
              className="col-1 stylelog"
             
            >
              <button
                className="bg-light text-black text-bold login"
              >
                Login
              </button>
            </div>
            <div
              className="col-1 d-none d-md-block stylesell"
              
            >
              <button
              className="sell"
              
              >
                + Sell
              </button>
            </div>
            </div>
</nav> 
</div>
<div className="container">
<div className="d-flex flex-row bd-highlight mb-3">
          <p className="wf mt-2">
            <b>ALL CATEGORIES</b>
            <img
              src="iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg"
              alt=""
            />
          </p>
          <p className="wf m-2 ps-1">Mobile Phones</p>
          <p className="wf m-2 ps-1">Cars</p>
          <p className="wf m-2 ps-1">MotorCycles</p>
          <p className="wf m-2 ps-1">Houses</p>
          <p className="wf m-2 ps-1">TV-Video-Audio</p>
          <p className="wf m-2 ps-1">Tablets</p>
          <p className="wf m-2 ps-1">Land & Plots</p>
        </div>
        <div className="row">
          <b className="wf mt-5 d-inline">Popular Searches:</b>
          <p className="wf mt-5 ps-3 text-muted">
            infinix - samsung - vivo - oppo - huawei - nokia - tecno - motorola
            - realme - blackberry - xiaomi - one plus - lg - sony - iphone x
          </p>
        </div>
        <div>
          <p className="wf text-muted m-2 ps-0 ms-0">
            Home / Mobiles / Mobile Phones / Mobile Phones in Punjab
          </p>
        </div>
        <div>
          <h4 className="wf ltsp2">
            <b>Mobile Phones in Lahore</b>
          </h4>
        </div>
    </div>
    </div>
    )
}

export default Newhead;