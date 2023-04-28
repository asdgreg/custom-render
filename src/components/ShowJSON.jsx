import React, { useState, useEffect } from "react";
// import home from '../data/home'
import HtmlTree from "./htmltree";
import fullhtml from "../data/fully";
function ShowJSON() {
  const [html, setHtml] = useState("");
  const [jsonFormat, setJsonFormat] = useState("");
  // const [error] = useState(null);

  useEffect(() => {
    const homeHtml = fullhtml;
    setHtml(JSON.stringify(homeHtml, null, 4));
    setJsonFormat(homeHtml);
  }, []);

  const assing = (event) => {
    try {
      setJsonFormat(JSON.parse(event));
      setHtml(event);
    } catch (error) {
      // console.log(error)
      console.log("Texto no permitido para la conversion")
    }
  }


  return (
    <div className="splitintwo">
      <div className="input-group" style={{ fontSize: 10 }}>
        <textarea
          cols={100}
          rows={100}
          value={html}
          onChange={(e) => assing(e.target.value)}
        />
      </div>
      {jsonFormat ? <HtmlTree textHTML={jsonFormat} /> : null}
    </div>
  );
}

export default ShowJSON;
