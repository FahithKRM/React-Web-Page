import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-top">
        <h1>LOGO</h1>
        <div className="center">
          <h3>Company</h3>
          <ul>
            <li>Privacy Policy </li>
            <li>Terms and Conditions </li>
            <li>Customer Services </li>
            <li>Community Support </li>
            <li>Help Center</li>
          </ul>
          <hr />
          <p className="copy">Copyright &copy; 2024. All reseved right.</p>
        </div>
        <div className="form">
          <h3>Contact us</h3>
          <form>
            <input type="emai" placeholder="Enter your email" />
            <button className="send" type="submit">
              Send
            </button>
          </form>
          <p><b>Email : </b>sevice@example.com</p>
          <p><b>TP Number : </b>+94 123-456-890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
