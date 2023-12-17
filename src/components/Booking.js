import React from 'react'

export default function Booking() {
  return (
    <div> 
    <section id="book-appointment" class="p-3 m-5">
    <div class="container">
      <div class="row">
        <div class="display-header">
          <h2 class="display-5 fw-bold text-dark">Book Appointment or call: <span class="text-primary-500">(+487) 384
              9452</span></h2>
        </div>
        <form class="contact-form d-flex flex-wrap mt-5 gx-1">
          <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
            <select class="form-select focus-transparent border border-radius-10 ps-4 " aria-invalid="false"
              name="choose">
              <option value="Select Your Department" className='me-2'>Select Department </option>
              <option value="Department">Department of Physiotherapy</option>
              <option value="Department">Department of Dentistry</option>
              <option value="Department">ENT Department</option>
              <option value="Department">Department of Pharmacy</option>
              <option value="Department">Nursing Department</option>
            </select>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
            <select class="form-select focus-transparent border ps-4 border-radius-10" aria-invalid="false"
              name="choose">
              <option value="Select Your Doctor">Select Doctor</option>
              <option value="Naidan Smith">William Davies</option>
              <option value="Danial Frankie">Charlotte Taylor</option>
              <option value="Jason Roy">William Jones</option>
            </select>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
            <input type="text" name="name" placeholder="Full Name" class="border ps-4 border-radius-10"/>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
            <input type="text" name="name" placeholder="Phone Number" class="border ps-4 border-radius-10"/>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
            <div class="input-group date" id="datepicker">
              <input type="date" id="start" name="appointment" min="2018-01-01" max="2018-12-31"
                placeholder="Choose Date" class="bg-transparent ps-4 border border-radius-10 position-relative"/>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 mb-3">
            <div class="input-group time" id="timepicker">
              <input type="time" id="start" name="appointment" min="9AM" max="6PM"
                class="bg-transparent ps-4 border border-radius-10 position-relative"/>
            </div>
          </div>
        </form>
      </div>
      <a href="#" class="btn btn-medium btn-primary btn-pill mt-3 text-uppercase">Book an appointment</a>
    </div>
  </section>
  <section id="testimonial"
  style={{
    backgroundImage: 'url(images/review-bg.jpg)',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'right',
    height: '100',
  }}>
    <div class="container p-3">
      <div class="row align-items-center padding-medium">
        <div class="col-lg-5 col-md-4">
          <div class="image-holder">
            <img src="images/review-image.png" alt="review" class="img-fluid"/>
          </div>
        </div>
        <div class="col-lg-7 col-md-8">
          <div class="review-content">
            <div class="swiper testimonial-swiper">
              <div class="swiper-wrapper position-relative">
                <div class="swiper-slide">
                  <div class="review-item">
                    <svg class="quote quote-up primary-color-500 position-absolute" width="80" height="70">
                      <use xlinkHref="#quote-up" />
                    </svg>
                    <blockquote class="fs-4">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.The more content you provide about
                        you. Lorem, Quos saepe suscipit, nemo dolore sapiente!</p>
                      <div class="author-detail">
                        <div class="name fs-3 fw-bold text-dark">James Rodrigo</div>
                        <span class="text-cadet-blue text-uppercase">Customer</span>
                      </div>
                    </blockquote>
                    <svg class="quote quote-down primary-color-500 position-absolute" width="80" height="70">
                      <use xlinkHref="#quote-down" />
                    </svg>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="review-item">
                    <svg class="quote quote-up primary-color-500 position-absolute" width="80" height="70">
                      <use xlinkHref="#quote-up" />
                    </svg>
                    <blockquote class="fs-4">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.The more content you provide about
                        you. Lorem, Quos saepe suscipit, nemo dolore sapiente!</p>
                      <div class="author-detail">
                        <div class="name fs-3 fw-bold text-dark">Jenny Rose</div>
                        <span class="text-cadet-blue text-uppercase">Customer</span>
                      </div>
                    </blockquote>
                    <svg class="quote quote-down primary-color-500 position-absolute" width="80" height="70">
                      <use xlinkHref="#quote-down" />
                    </svg>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="review-item">
                    <svg class="quote quote-up primary-color-500 position-absolute" width="80" height="70">
                      <use xlinkHref="#quote-up" />
                    </svg>
                    <blockquote class="fs-4">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.The more content you provide about
                        you. Lorem, Quos saepe suscipit, nemo dolore sapiente!</p>
                      <div class="author-detail">
                        <div class="name fs-3 fw-bold text-dark">Wednesday Marigold</div>
                        <span class="text-cadet-blue text-uppercase">Customer</span>
                      </div>
                    </blockquote>
                    <svg class="quote quote-down primary-color-500 position-absolute" width="80" height="70">
                      <use xlinkHref="#quote-down" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination text-left"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
