import React from "react";
import CountUp from "react-countup";

const Cards = (data) => {
  // destructure data first. then destruct inner properties
  let {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = data;

  if (!confirmed) {
    return "loading";
  }

  return (
    <div className="container mt-3">
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="card shadow bg-light col-md-3 mx-3 mb-3 rounded border-primary">
          <div className="card-body">
            <h5 className="card-title" id="title">
              Infected
            </h5>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={3}
              delay={1}
              prefix="confirmed cases: "
              className="text-primary"
            />
            <p className="card-text">
              LastUpdate: {new Date(lastUpdate).toDateString()}
            </p>
          </div>
        </div>
        <div className="card shadow bg-light col-md-3 mx-3 mb-3 rounded border-success">
          <div className="card-body">
            <h5 className="card-title">Recovered</h5>
            <CountUp
              start={0}
              end={recovered.value}
              duration={3}
              delay={1}
              prefix="confirmed cases: "
              className="text-success"
            />
            <p className="card-text">
              LastUpdate: {new Date(lastUpdate).toDateString()}
            </p>
          </div>
        </div>
        <div className="card shadow  bg-light col-md-3 mx-3 mb-3 rounded border-danger">
          <div className="card-body">
            <h5 className="card-title">Deaths</h5>
            <CountUp
              start={0}
              end={deaths.value}
              duration={3}
              delay={1}
              prefix="confirmed cases: "
              className="text-danger"
            />
            <p className="card-text">
              LastUpdate: {new Date(lastUpdate).toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
