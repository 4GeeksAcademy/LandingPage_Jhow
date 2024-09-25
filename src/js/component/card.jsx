import React from "react";


const Card = ({ imagen }) => {
  return (

    <div className="col-12 col-md-6 col-lg-3">
      <div className="card h-100 w-100">
        <img src={imagen} style={{height: "150px"} } className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>


  )
}

export default Card; 