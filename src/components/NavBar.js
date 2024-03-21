import React, { useEffect } from 'react';
const NavBar = () => {
  useEffect(() => {
    const navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Smooth scrolling to section when clicking on nav links
    console.log("HERE");
    const smoothScroll = (target) => {
        document.querySelector(target)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Add click event listener to each nav link for smooth scrolling
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Collapse responsive navbar when nav item is clicked (for mobile)
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');
    navItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            if (navbarToggler.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

   

    return () => {
        document.removeEventListener('scroll', navbarShrink);
        navLinks.forEach(navLink => {
            navLink.removeEventListener('click', smoothScroll);
        });
        navItems.forEach(navItem => {
            navItem.removeEventListener('click', () => {
                if (navbarToggler.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    };
}, []);
  
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
                  <li className="nav-item"><a className="nav-link" href="#movies">The Movies</a></li>
                  <li className="nav-item"><a className="nav-link" href="#classics">The Classics</a></li>
                  <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
          </div>
      </div>
    </nav>
  );
}

export default NavBar;
