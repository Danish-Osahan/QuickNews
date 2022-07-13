import React from "react";
// import { motion } from "framer-motion";

const Newsitem = (props) => {

  // Styles
  let light = {
    boxShadow:
      "  -3px -3px 6px #ffffff,3px 3px 6px #00000050, -3px -3px 6px #ffffff,3px 3px 6px #00000050",
    // backgroundColor: "#e8e8e8",
    backgroundColor: "#dfdbdb",
    width: "18rem",
    height: "539px",
    border: "none",
  };
  let img_light = {
    boxShadow:
      "   -3px -3px 5px #ffffff, 3px 3px 5px #00000090, -3px -3px 9px #ffffff,3px 3px 9px #00000090",
    width: "270px",
    height: "200px",
  };
  let dark = {
    boxShadow:
      "-3px -3px 9px #ffffff10,3px 3px 9px #000000, -3px -3px 9px #ffffff10,3px 3px 9px #00000090",
    backgroundColor: "#272727",
    width: "18rem",
    height: "539px",
    border: "none",
    color: "white",
  };
  let img_dark = {
    boxShadow:
      " -3px -3px 5px #ffffff10, 3px 3px 9px #000000, -3px -3px 5px #ffffff10,3px 3px 9px #000000",
    width: "270px",
    height: "200px",
  };
  let btn_light = {
    boxShadow:
      "   -3px -3px 5px #ffffff, 3px 3px 5px #00000090, -3px -3px 9px #ffffff,3px 3px 9px #00000090",
    marginTop: "auto",
  };
  let btn_dark = {
    boxShadow:
      " -3px -3px 5px #ffffff10, 3px 3px 9px #000000, -3px -3px 5px #ffffff10,3px 3px 9px #000000",
    marginTop: "auto",
  };
  let light_text={
   color:'black'
  }
  let dark_text={
    color:'white'
  }

  let { title, description, img_url, newsurl, date, author, mode } = props;
  return (
    <div>
      <div
        className="card px-2 "
        // style={{ width: "18rem", height: "539px", border: "none" }}
        style={mode === "Light" ? light : dark}
        id="card"
      >
        <img
          src={img_url}
        
          style={mode === "Light" ? img_light : img_dark}
          className="card-img-top"
          id="cardimg"
          alt="Not found"
        />
        <div className="card-body d-flex flex-column">
          <h5
            className="card-title text-justify"
            style={{ overflow: "hidden" }}
          >
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text" style={{ marginTop: "-18px" }}>
            <small style={props.mode==='Light'?light_text:dark_text} >
              By {author ? author : "Unknown"}
            </small>
            <span>
              <small style={props.mode==='Light'?light_text:dark_text}>
                {" "}
                on {new Date(date).toGMTString().slice(0, 17)}
              </small>
            </span>
          </p>

          <a
          id="read"
            href={newsurl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary"
            style={props.mode === "Light" ? btn_light : btn_dark}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
