
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
          <a className="navbar-brand" href="#page-top">Combat Aces</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                  <li className="dropdown nav-item">
                      <button className="btn btn-secondary dropdown-toggle nav-link text-uppercase" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        The Argument
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#purpose">Purpose</a></li>
                        <li><a className="dropdown-item" href="#content">Historical Accuracy</a></li>
                        <li><a className="dropdown-item" href="#size">Large vs. Small</a></li>
                        <li><a className="dropdown-item" href="#conclusion">Conclusion</a></li>
                      </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="#classics">The Classics</a></li>
                  <li className="nav-item"><a className="nav-link" href="#movies">The Movies</a></li>
                  <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
          </div>
      </div>
    </nav>
  );
}

export default NavBar;
