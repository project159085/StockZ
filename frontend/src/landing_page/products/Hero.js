import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-3">
        <h1>StockZ Products</h1>
        <h4 className="text-muted mt-3">Sleek, modern and intuitive trading platforms</h4>
        <p className="mt-3">
          Checkout our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
