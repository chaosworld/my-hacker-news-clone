import React from "react";

import ReactDom from "react-dom";

const Loader = (props) => {
  const [node] = React.useState(document.createElement("div"));
  const loader = document.querySelector("#loader");
  //console.log(loader);

  React.useEffect(() => {
    loader.appendChild(node).classList.add("message");
  }, [loader, node]);

  React.useEffect(() => {
    if (props.show) {
      loader.classList.remove("hide");
      document.body.classList.add("loader-open");
    } else {
      loader.classList.add("hide");
      document.body.classList.remove("loader-open");
    }
  }, [loader, props.show]);

  return ReactDom.createPortal(props.children, node);
};

export default Loader;
