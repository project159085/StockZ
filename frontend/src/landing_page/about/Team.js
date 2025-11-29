import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-4 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.12em" }}
      >
        <div className="col-6 p-4 text-center">
          <img
            src="media/images/dr.jpg"
            alt="ProfilePhoto"
            style={{ borderRadius: "20%", width: "50%" }}
          />
          <h4 className="mt-3">Dnyaneshwar Rathod</h4>
          <h6 className="mt-4">Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Dnyaneshwar bootstrapped and founded StockZ in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            StockZ has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
