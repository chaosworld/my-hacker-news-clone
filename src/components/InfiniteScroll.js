import React from "react";
import { useInView } from "react-intersection-observer";

// a container component for infinite scrolling
function InfiniteScroll({ listItems, lastRowHandler }) {
  const [lastRowRef, lastRowInView] = useInView();

  React.useEffect(() => {
    lastRowInView && lastRowHandler();
  }, [lastRowInView]);

  const Elements = listItems.map((item, i) => {
    const props = { key: i };
    i === listItems.length - 1 && (props["ref"] = lastRowRef);
    return <div {...props}>{item}</div>;
  });

  return <>{Elements}</>;
}

export default InfiniteScroll;
