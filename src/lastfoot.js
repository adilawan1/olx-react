const Footer =()=>
{
return(

    <footer className="bg-light container-fluid m-0 fm">
  <div className="p-4">
    <div className="row d-flex justify-content-between">
      <div className="col-sm-12 col-md-2 fstl" >
        <h6 className="fh6">POPULAR CATEGORIES</h6>
        <p className="m-0">Cars</p>
        <p className="m-0">Flats for rent</p>
        <p className="m-0">Mobile Phones</p>
        <p>Jobs</p>
      </div>
      <div className="col-sm-12 col-md-2 fstl" >
        <h6 className="fh6">TRENDING SEARCHES</h6>
        <p className="m-0">Bikes</p>
        <p className="m-0">Watches</p>
        <p className="m-0">Books</p>
        <p>Dogs</p>
      </div>
      <div className="col-sm-12 col-md-2 fstl" >
        <h6 className="fh6">About EMPG</h6>
        <p className="m-0">OLX blog</p>
        <p className="m-0">Contact Us</p>
        <p className="m-0">OLX for businesses</p>
      </div>
      <div className="col-sm-12 col-md-2 fstl" >
        <h6 className="fh6">OLX</h6>
        <p className="m-0">Terms</p>
        <p className="m-0">Sitemap</p>
        <p className="m-0">Terms of use</p>
      </div>
      <div className="col-sm-12 col-md-2 fstl" >
        <h6 className="fh6">FOLLOW US</h6>
        <a href="www.google.com"
          ><button className="bg-white ftbtn" >
            f
          </button></a
        >
        <a href="www.google.com"
          ><button className="bg-white ftbtn" >
            i
          </button></a
        >
        <a href="www.google.com"
          ><button className="bg-white ftbtn" >
            t
          </button></a
        >
        <a href="www.google.com"
          ><button className="bg-white ftbtn" >
            y
          </button></a
        >
      </div>
    </div>
    
  </div>
  <div className="row bg-dark">
    <p  className="text-end text-white lst"><b>Free Classifieds in Pakistan</b> . © 2006-2021 OLX</p>
   </div>
</footer>
)

}

export default Footer;