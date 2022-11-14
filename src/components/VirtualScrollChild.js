import React from "react";
import { useInView } from "react-intersection-observer";

function VirtualScrollChild({ id, height = 50, children }) {
  const [ref, inView] = useInView();
  const style = {
    height: `${height}px`,
    overflow: "hidden"
  };
  inView && console.log(`id=${id}`);
  //console.log(`VirtualScrollChild - inView: ${inView}`);
  return <div ref={ref}>{inView ? children : children}</div>;
}

export default VirtualScrollChild;
