import React from "react";

export default function Navbar() {
  return (
    <div>
      <header id="header">
        <nav
          id="primary-header"
          nav
          class="navbar navbar-expand-lg shadow-none"
          aria-label="navbar"
          height="30"
        >
          {" "}
          <div class="col-lg-5 col-md-4 col-sm-6">
            <a class="navbar-brand" href="index.html">
              <img src="./images/main-logo.png" class="logo" />
            </a>
          </div>
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-primary"
              aria-controls="navbar-primary"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                class="navbar-icon mt-3 primary-color-500 bg-light"
                width="50"
                height="50"
              ></svg>
            </button>
            <div
              class="header-bottom collapse navbar-collapse bg-light border-radius-10 py-2"
              id="navbar-primary"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item ps-4 pe-4 border-right">
                  <a
                    class="nav-link text-dark active p-0 mt-3 mt-lg-0"
                    aria-current="page"
                    href="#intro"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item ps-4 pe-4 border-right">
                  <a class="nav-link text-dark p-0" href="#about-us">
                    About
                  </a>
                </li>
                <li class="nav-item ps-4 pe-4 border-right">
                  <a class="nav-link text-dark p-0" href="#our-services">
                    Services
                  </a>
                </li>
                <li class="nav-item ps-4 pe-4 border-right">
                  <a class="nav-link text-dark p-0" href="#book-appointment">
                    Booking
                  </a>
                </li>
                <li class="nav-item ps-4 pe-4 border-right">
                  <a class="nav-link text-dark p-0" href="#our-team">
                    Team
                  </a>
                </li>
                <li class="nav-item ps-4 pe-4 border-right">
                  <a class="nav-link text-dark p-0" href="#faqs">
                    Faqs
                  </a>
                </li>
                <li class="nav-item ps-4 pe-4 border-right">
                  <a class="nav-link text-dark p-0" href="#department">
                    Department
                  </a>
                </li>
                <li class="nav-item ps-4 pe-3 dropdown border-right">
                  <ul class="dropdown-menu">
                    <li class="py-1">
                      <a href="about.html" class="dropdown-item text-uppercase">
                        About <span class="badge bg-secondary">Pro</span>
                      </a>
                    </li>

                    <li class="py-1">
                      <a
                        href="booking.html"
                        class="dropdown-item text-uppercase"
                      >
                        Booking <span class="badge bg-secondary">Pro</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        href="services.html"
                        class="dropdown-item text-uppercase"
                      >
                        Services <span class="badge bg-secondary">Pro</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        href="departments.html"
                        class="dropdown-item text-uppercase"
                      >
                        Departments
                        <span class="badge bg-secondary">Pro</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        href="gallery.html"
                        class="dropdown-item text-uppercase"
                      >
                        Gallery <span class="badge bg-secondary">Pro</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        href="pricing.html"
                        class="dropdown-item text-uppercase"
                      >
                        Pricing <span class="badge bg-secondary">Pro</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        href="contact.html"
                        class="dropdown-item text-uppercase"
                      >
                        Contact <span class="badge bg-secondary">Pro</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a href="team.html" class="dropdown-item text-uppercase">
                        Our Team <span class="badge bg-secondary">Pro</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        href="review.html"
                        class="dropdown-item text-uppercase"
                      >
                        Reviews <span class="badge bg-secondary">Pro</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
