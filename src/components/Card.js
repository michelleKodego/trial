function Card(kard){
    return(
        <div className="col-12 col-md-6 col-lg-3 d-md-inline-flex d-sm-block d-lg-inline-flex">
            <div className="card ">
            <img src={kard.pic} className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{kard.title}</h5>
                    <p className="card-text">{kard.text}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card;