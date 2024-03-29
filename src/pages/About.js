// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div>  
      <NavBar />
      <header className="masthead">
        <div className="container">
          <div className="masthead-heading text-uppercase">About the Site</div>
        </div>
      </header>

      <section id="team" className="bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">The People Behind Combat Aces</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="team-member">
                            <img src="../assets/img/team/michael.jpg" className="img-responsive img-circle" alt="" />
                            <h4>Michael Kurey</h4>
                            <p className="text-muted">Author / Movie Enthusiast</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="team-member">
                            <img src="../assets/img/team/devorah.jpg" className="img-responsive img-circle" alt="" />
                            <h4>Devorah Langsam</h4>
                            <p className="text-muted">Lead Developer</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="text-center">
                        <p className="large text-muted">Michael Kurey first made this site in 2006 to discuss some of his favorite war movies. It got a lot of traffic, but over the years the site got a little out of date. Devorah Langsam stepped in to give the site a new look and to make it easy to keep the site current as new movies come out. </p>
                        <img src="../assets/img/old_site.png" alt="Original blue site" />
                        <p className="text-muted">This was the original 2006 site. The content and the blue banners have been maintained in the new version. </p>
                    </div>
                </div>
            </div>
        </section>

      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">Copyright &copy; Combat Aces 2024</div>
            <div className="col-lg-4">
              Content by Michael Kurey / Design by Devorah Langsam
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link className="link-dark text-decoration-none me-3" to="/">Back to site</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
