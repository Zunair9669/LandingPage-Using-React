const Carousel = () => {
     return (
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://k.nooncdn.com/cms/pages/20210619/661795372c93fcfee187b5243b7b5903/en_banner-01.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://k.nooncdn.com/mon/1624315037291-ckq778g2z1b76rhr07nsrqdku.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://k.nooncdn.com/mon/1624213746332-ckq5ixfh810x7rhr0zdip9lhi.png" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
     )
}

export default Carousel;
