import React from "react";

export default function Home() {
  return (
    <div>
      <section id="intro" class="position-relative overflow-hidden mb-5">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="images/doctor1.jpg"
                class="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="images/doctor2.jpg"
                class="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="images/doctor3.jpg"
                class="d-block w-100   img-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}
