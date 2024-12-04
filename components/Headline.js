const Headline = ({ mb = "105" }) => {
  return (
    <div className={`headline-area mb-${mb} rmb-85 rel z-1`}>
      <span className="marquee-wrap">
        <span className="marquee-inner left">
          <span className="marquee-item">Chicken and Beef Bar Snacks</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">Booze Bites</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">Sri Lankan Spiced Bites</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
        </span>
        <span className="marquee-inner left">
          <span className="marquee-item">Weekend Food Pairings</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">Devilled and Curry Delights</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">Spiced Meat Bites</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
        </span>
        <span className="marquee-inner left">
          <span className="marquee-item">Sri Lankan Devilled Dishes</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">Bold Sri Lankan Cuisine</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
          <span className="marquee-item">Devilled and Curry Delights</span>
          <span className="marquee-item">
            <i className="flaticon-star" />
          </span>
        </span>
      </span>
      <div className="headline-shapes">
        <div className="shape one">
          <img src="assets/images/shapes/tomato.png" alt="Shape" />
        </div>
        <div className="shape two">
          <img src="assets/images/shapes/burger.png" alt="Shape" />
        </div>
      </div>
    </div>
  );
};
export default Headline;
