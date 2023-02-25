
import first from "./iconList_noinline.fc368d8e5a57a18cef128d2179dc9b51.svg"
import second from "./iconGrid_noinline.20d3115f90d4e01862afb7d21be83420.svg"
import third from "./iconGallery_noinline.0812d3e7194bb21f539ef9e77bdd3a1c.svg"

const Ntile =()=>{

return (

<div className="row align-items-center ">
              <div className="col-2" style={{fontSize:"1.5vw"}} >
                <span ><h6 className="badge bg-light text-dark">10,000+ ads</h6></span>
              </div>
              <div className="col-3 border-start border-dark border-2 ps-2 ">
                <div className="form-check float-end ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    <h6 >Only with Photos</h6>
                  </label>
                </div>
              </div>
              <div className="col-4 border-start border-dark border-2 ps-2 ">
                <h6 className="d-inline"><b>VIEW</b></h6>
                <span className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                  <input type="radio" className="btn-check " name="btnradio" id="btnradio1" autoComplete="off"/>
                  <label className="btn  rounded-circle" htmlFor="btnradio1">
                  <img src={first} alt="List layout"/>
                  </label>
                
                  <input type="radio" className="btn-check " name="btnradio" id="btnradio2" autoComplete="off"/>
                  <label className="btn  rounded-circle" htmlFor="btnradio2">
                    <img src={second} alt="Grid layout"/>
                  </label>
                
                  <input type="radio" className="btn-check " name="btnradio" id="btnradio3" autoComplete="off"/>
                  <label className="btn  rounded-circle" htmlFor="btnradio3">
                    <img src={third} alt="Gallery layout"/>
                  </label>
                </span>
              </div>
              <div className="col-3 ps-2 ">
                <div className="btn-group">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <h6 className="d-inline ps-2" style={{fontSize:"1.5vw"}}><b>SORT BY:</b> Newly listed</h6>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="www.google.com">Action</a></li>
                    <li><a className="dropdown-item" href="www.google.com">Another action</a></li>
                    <li><a className="dropdown-item" href="www.google.com">Something else here</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="www.google.com">Separated link</a></li>
                  </ul>
                </div>
              </div>
            </div>
);
}


export default Ntile;