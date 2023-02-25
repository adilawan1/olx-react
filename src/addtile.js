const Addtile =(props)=>{
    return(
        
        <div className="row border border-secondary mt-2 rounded side ms-5 addt">
        <div className="col-3 text-center">
        <img className="img-fluid py-2" style={{height:"70%"}} src="https://images.olx.com.pk/thumbnails/193619606-240x180.webp" alt="" srcSet=""/>
        </div>
        <div className="col-7 border-start border-warning border-5 ms-5 addbor">
          <div className="row  float-end">
            <button className="btn lastbtn">
              <img  src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg" className="_3c2d02e2 lastimage" alt="favoriteIconUnselected"/>
            </button>
            </div>
            <div className="row">
              <span ><h6 className="badge bg-warning text-dark mt-3">FEATURED</h6></span>
            </div>
            <div className="row">
              <h5 className="ms-3"><b>{props.price}</b></h5>
            </div>
            <div className="row">
              <h6 className="ms-3 mt-1">Iphone 8 plus 64 Gb Pta Approved 10/10 water pack stock( COD)</h6>
            </div>
            
            <div className="row mt-3 align-items-end">
              <div className="col">
                <p className="ms-3 fw-lighter ptxt" >Gulshan Colony Lahore</p>
              </div>
              <div className="col">
                <p className="float-end fw-lighter ptxt" >3 days ago</p>
              </div>
            </div>
        </div>
      </div>
    )
}

export default Addtile;