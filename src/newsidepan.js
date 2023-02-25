const Sidepaned= () =>{

    return(
        <div className="container-fluid">
    
                <h6><b>Filters</b></h6>
                <hr />
    
                <h5><b>CATEGORIES</b></h5>
                <h6 className="text-muted p-2">All categories</h6>
                <h6 className="ms-3 p-2 text-muted">Mobiles</h6>
                <h6 className="ms-4 p-2 text-muted">Tablets(7641)</h6>
                <h6 className="ms-4 p-2 text-muted">Accessories(34336)</h6>
                <h6 className="ms-4 p-2"><b> Mobile Phones(182063)</b></h6>
    
                <hr />
    
                <h5><b>LOCATIONS</b></h5>
    
                <div className="form-outline">
                  <input
                    type="text"
                    id="form12"
                    className="form-control mt-4 mb-4"
                    placeholder="Search city, area or locality"
                  />
                </div>
    
                <h6 className="text-muted p-2">Pakistan</h6>
                <h6 className="ms-3 p-2 text-muted">Punjab</h6>
                <h6 className="ms-4 p-2">
                  <b> Lahore </b>
                </h6>
                <h6 className="ms-5 p-2 text-muted">Johar Town (1509)</h6>
                <h6 className="ms-5 p-2 text-muted">Allama Iqbal Town (1509)</h6>
                <h6 className="ms-5 p-2 text-muted">Shahdara (1509)</h6>
                <h6 className="ms-5 p-2 text-muted">Gulberg 3 (1509)</h6>
                <h6 className="ms-5 p-2 text-muted">Township (764)</h6>
                <h6 className="ms-5 p-2 text-muted">
                  <a href="www.google.com">View more</a>
                </h6>
    
                <h5><b>PRICE</b></h5>
                <div className="row">
                  <h6 className="range text-center pt-2 ms-2">250</h6>
                  <h6 className="range text-center pt-2 ms-2">1000000</h6>
                </div>
                <hr />
    
                <h5><b>MAKE</b></h5>
                <h6 className="text-muted p-2">Apple IPhone (55400)</h6>
                <h6 className="text-muted p-2">Samsung Mobile (55400)</h6>
                <h6 className="text-muted p-2">OPPO (55400)</h6>
                <h6 className="text-muted p-2">Vivo (55400)</h6>
                <h6 className="text-muted p-2">Huawie (55400)</h6>
                <h6 className="p-2 text-muted">
                  <a href="www.google.com">View more</a>
                </h6>
                <hr />
    
                <h5><b>Condition</b></h5>
    
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Used <span className="text-muted">(1405245)</span>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    readOnly
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    New <span className="text-muted">(1405245)</span>
                  </label>
                </div>
          
              </div>
    );
    
    } 
    
    export default Sidepaned;