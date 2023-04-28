import React, { useState, useEffect } from "react";
// import home from '../data/home'
// import fullhtml from "../data/fully";
function HtmlTree({ textHTML }) {
  const [html, setHtml] = useState(null);
  const [error] = useState(null);
  if (error) {
    return <div>{error}</div>;
  }
  const renderHtml = (node) => {
    try {
      const { id, type, props, children } = node;

      // console.log(node);

      const childElements = Array.isArray(children)
        ? children.map((child) => renderHtml(child))
        : null;

      switch (type) {
        case "div":
          return (
            <div key={id} {...props}>
              {childElements}
            </div>
          );
        case "header":
          return (
            <header key={id} {...props}>
              {childElements}
            </header>
          );
        case "nav":
          return (
            <nav key={id} {...props}>
              {childElements}
            </nav>
          );
        case "h1":
          return (
            <h1 key={id} {...props}>
              {props.text} {children}
            </h1>
          );
        case "h3":
          return (
            <h3 key={id} {...props}>
              {props.text} {children}
            </h3>
          );
        case "main":
          return (
            <main key={id} {...props}>
              {childElements}
            </main>
          );
        case "section":
          return (
            <section key={id} {...props}>
              {childElements}
            </section>
          );
        case "p":
          return (
            <p key={id} {...props}>
              {props.text}
            </p>
          ); // render the text content here
        case "ul":
          return (
            <ul key={id} {...props}>
              {childElements}
            </ul>
          );
        case "li":
          return (
            <li key={id} {...props}>
              {childElements}
            </li>
          );
        case "a":
          return (
            <a key={id} {...props}>
              {props.text}
            </a>
          );
        case "img":
          return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img key={id} {...props} />
          );
        case "form":
          return (
            <form key={id} {...props}>
              {childElements}
            </form>
          );
        case "input":
          return <input key={id} {...props} />;
        case "textarea":
          return <textarea key={id} {...props} />;
        case "button":
          return (
            // eslint-disable-next-line
            <button key={id} {...props} onClick={eval(props.onClick)}>
              {props.text}
            </button>
          );
        case "footer":
          return (
            <footer key={id} {...props}>
              {childElements}
            </footer>
          );
        default:
          throw new Error(`Unsupported HTML element: ${type}`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return <div className="website">{textHTML && renderHtml(textHTML)}</div>;
}

export default HtmlTree;
