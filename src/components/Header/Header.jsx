import { ServiceList } from "../../assets/assets";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <h1>Our Services</h1>
      <p className="dec">
        We offer a range of services to help your business thrive in the digital
        age. Our expert team ensures all your needs are met with professionalism
        and quality. From graphic design to web development, we bring your
        vision to life. Explore our services below to see how we can support
        your growth.
      </p>
      <div className="container">
        <div className="items">
          {ServiceList.map((item, index) => {
            return (
              <div key={index} className="item">
                <img src={item.image} alt="" />
                <p>
                  {item.no} {"-"} {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <button className="show-more">Show more</button> */}
    </div>
  );
};

export default Header;
