import React, { useState, useEffect } from "react";
import home from '../data/mock'
function HtmlTree() {
    const [html, setHtml] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
    //   fetch("/path/to/html.json")
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error("Failed to load HTML");
    //       }
    //       return response.json();
    //     })
    //     .then((data) => setHtml(data))
    //     .catch((err) => setError(err.message));
        const homeHtml = home;
        setHtml(homeHtml);
    }, []);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    const renderHtml = (node) => {
        const { id, type, props, children } = node;
      
        console.log(node)
        const childElements =  Array.isArray(children) ? children.map((child) => renderHtml(child)) : null;
        switch (type) {
          case "div":
            return <div key={id} {...props}>{childElements}</div>;
          case "header":
            return <header key={id} {...props}>{childElements}</header>;
          case "h1":
            return <h1 key={id} {...props}>{props.text} {children}</h1>;
          case "h3":
            return <h3 key={id} {...props}>{props.text} {children}</h3>;
          case "main":
            return <main key={id} {...props}>{childElements}</main>;
          case "section":
            return <section key={id} {...props}>{childElements}</section>;
          case "p":
            return <p key={id} {...props}>{props.text}</p>; // render the text content here
          case "button":
            return (
              <button key={id} {...props} onClick={eval(props.onClick)}>
                {props.text}
              </button>
            );
          case "footer":
            return <footer key={id} {...props}>{childElements}</footer>;
          default:
            throw new Error(`Unsupported HTML element: ${type}`);
        }
      };
  
    return <div>{html && renderHtml(html)}</div>;
  }

export default HtmlTree;