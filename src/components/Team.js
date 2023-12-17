import React from 'react'

export default function Team() {
  return (
    <div>
    <section id="our-team" class="padding-large">
    <div class="container">
      <div class="row">
        <div class="display-header my-4">
          <h2 class="display-5 fw-bold text-dark">Our Team</h2>
        </div>
        <div class="team-content">
          <div class="swiper team-swiper">
            <div class="swiper-wrapper pb-5">

              <div class="swiper-slide">
                <div class="team-member d-flex align-items-center">
                  <div class="col-md-6">
                    <div class="image-holder me-4 mb-4">
                      <img src="images/team-item.jpg" alt="team member" class="border-radius-10 img-fluid"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="member-info">
                      <h3 class="fs-4 fw-bold text-dark">Dr. Leslie Taylor</h3>
                      <span class="text-uppercase fs-6 text-cadet-blue pb-2 d-block">Pediatrician</span>
                      <p>Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac
                        penatibus et.</p>
                      <ul class="social-links list-unstyled d-flex">
                        <li>
                          <a href="#">
                            <svg class="facebook text-primary-500 me-4" width="30" height="30">
                              <use  xlinkHref="#facebook" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg class="twitter text-primary-500 me-4" width="30" height="30">
                              <use  xlinkHref="#twitter" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg class="instagram text-primary-500 me-4" width="30" height="30">
                              <use  xlinkHref="#instagram" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg class="youtube text-primary-500" width="30" height="30">
                              <use  xlinkHref="#youtube" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="team-member d-flex align-items-center">
                  <div class="col-md-6">
                    <div class="image-holder me-4 mb-4">
                      <img src="images/team-item1.jpg" alt="team member" class="border-radius-10 img-fluid"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="member-info">
                      <h3 class="fs-4 fw-bold text-dark">Dr. Zachary Brown</h3>
                      <span class="text-uppercase fs-6 text-cadet-blue pb-2 d-block">Cardiologist</span>
                      <p>Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac
                        penatibus et.</p>
                      <ul class="social-links list-unstyled d-flex">
                        <li>
                          <a href="#">
                            <svg class="facebook text-primary-500 me-4" width="30" height="30">
                              <use  xlinkHref="#facebook" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg class="twitter text-primary-500 me-4" width="30" height="30">
                              <use  xlinkHref="#twitter" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg class="instagram text-primary-500 me-4" width="30" height="30">
                              <use  xlinkHref="#instagram" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg class="youtube text-primary-500" width="30" height="30">
                              <use  xlinkHref="#youtube" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="team-member d-flex align-items-center">
                  <div class="col-md-6">
                    <div class="image-holder me-4 mb-4">
                      <img src="images/team-item2.jpg" alt="team member" class="border-radius-10 img-fluid"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="member-info">
                      <h3 class="fs-4 fw-bold text-dark">Dr. Isabella Davies</h3>
                      <span class="text-uppercase fs-6 text-cadet-blue pb-2 d-block">Gynecologist</span>
                      <p>Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac
                        penatibus et.</p>
                      <ul class="social-links list-unstyled d-flex">
                        <li>
                          <a href="#">
                            <svg class="facebook text-primary-500 me-4" width="30" height="30">
                              <use  xlinkHref="#facebook" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg class="twitter text-primary-500 me-4" width="30" height="30">
                              <use  xlinkHref="#twitter" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg class="instagram text-primary-500 me-4" width="30" height="30">
                              <use  xlinkHref="#instagram" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg class="youtube text-primary-500" width="30" height="30">
                              <use  xlinkHref="#youtube" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      
      </div>
    </div>
  </section></div>
  )
}
