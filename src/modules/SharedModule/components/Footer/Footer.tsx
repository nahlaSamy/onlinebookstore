import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; 
import logo from "../../../../assets/images/sample logo 1.png"

export default function Footer() {
  return (
    <footer className="footer bg-danger text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <img src={logo} alt="Logo" className="mb-2 logo" /> 
            <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="d-flex">
              <a href="#" className="social-icon me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon me-3"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Books</a></li>
              <li><a href="#" className="text-white text-decoration-none">New Release</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Important Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2022 Arihant. All Rights Reserved.</p>
          <p>
            <a href="#" className="text-white text-decoration-none">Privacy</a> | <a href="#" className="text-white text-decoration-none">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
