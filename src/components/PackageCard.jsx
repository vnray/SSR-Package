

const PackageCard = ({pkg})=>{

  console.log(pkg)
  const {name,image_url,price_total,discounted_price,discount_percentage} = pkg
  const discount = Math.round(discount_percentage);
    return(

    <div className="card-wrapper">
         <div className="row">
           <div className="col-md-3">
             <img src={image_url} />
           </div>
           <div className="col-md-9">
          <div className="card-title">
          <h3 className="col-md-8">{name}</h3>
            <div className="compare col-md-4">
                <label htmlFor="">Add To Compare
                </label>
                <input type="checkbox" />
            </div>
          </div>
          <div className="price-wrapper">
            <span className="span-wrapper">
                <span className="start">Starting from:</span><span className="discount">{discount}% OFF</span>
            </span>
            <p className="price">₹ {discounted_price}/- <span className="old-price">₹ {price_total}/-</span></p>
            <p className="per-person">Per Person on twin sharing</p>
          </div>
          <div className="hotel-star">
            <p>Hotel included in package: </p>
           <div className="btn-wrapper">
           <div className="star-category">
                <input type="radio" />
                <label htmlFor="">3 Star</label>
            </div>
            <div><button className="btn-book">Book Now</button></div>
           </div>
          </div>
           </div>
        </div>
    </div>

    )
}

export default PackageCard