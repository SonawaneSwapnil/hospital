import React from "react";

export default function Services() {
  return (
    <div>
      {" "}
      <section
      className="my-5 py-4 px-3"
        id="our-services"
        style={{
            backgroundImage: 'url(images/services-bg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
          }}
      >
        <div class="container">
          <div class="row">
            <div class="display-header text-light d-flex flex-wrap justify-content-between padding-medium">
              <div class="col-lg-5 col-md-6 col-sm-12">
                <h2 class="text-light">Our Best Services For Your Solution</h2>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <p class="text-light">
                  Vitae aliquam vestibulum elit adipiscing massa diam in
                  dignissim. Risus tellus libero elementum aliquam etiam. Lectus
                  adipiscing est auctor mi quisque nunc non viverra est.
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box p-4 bg-light border-radius-10 text-center">
                <div class="icon-box-icon">
                  <svg
                    class="home-thermometer mt-3 primary-color-500"
                    width="50"
                    height="50"
                  >
                  <use xlinkHref="#home-thermometer" />
                  </svg>
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title py-2">General Practitioners</h3>
                  <p>
                    Aliquam etiam lectus adipiscing est auctor mi quisque non
                    viverra.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box p-4 bg-light border-radius-10 text-center">
                <div class="icon-box-icon">
                  <svg
                    class="pregnant-woman mt-3 primary-color-500"
                    width="50"
                    height="50"
                  >
                    <use  xlinkHref="#pregnant-woman" />
                  </svg>
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title py-2">Pregnancy Support</h3>
                  <p>
                    Aliquam etiam lectus adipiscing est auctor mi quisque non
                    viverra.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box p-4 bg-light border-radius-10 text-center">
                <div class="icon-box-icon">
                  <svg
                    class="nutrition mt-3 primary-color-500"
                    width="50"
                    height="50"
                  >
                    <use xlinkHref="#nutrition" />
                  </svg>
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title py-2">Nutritional Support</h3>
                  <p>
                    Aliquam etiam lectus adipiscing est auctor mi quisque non
                    viverra.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box p-4 bg-light border-radius-10 text-center">
                <div class="icon-box-icon">
                  <svg
                    class="local-pharmacy mt-3 primary-color-500"
                    width="50"
                    height="50"
                  >
                    <use xlinkHref="#local-pharmacy" />
                  </svg>
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title py-2">Pharmaceutical care</h3>
                  <p>
                    Aliquam etiam lectus adipiscing est auctor mi quisque non
                    viverra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
