import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className="col-4 p-5 mt-5 mb-5">
          <h4 className="">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            Account Opening
          </h4>
        </div>
        <div className="col-4 p-5 mt-5 mb-5">
          <h4 className="">Your StockZ account</h4>
        </div>
        <div className="col-4 p-5 mt-5 mb-5">
          <h4 className="">Your StockZ account</h4>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
