import React from "react";
import VirtualScrollChild from "./VirtualScrollChild";
import InfiniteScroll from "./InfiniteScroll";

// A wrapper component from implementing virtual and
// infinite scrolling
function VirtualAndInfiniteScroll({ listItems, height, lastRowHandler }) {
  const VirtualScrollChildren = listItems.map((item) => {
    return <VirtualScrollChild height={height} children={item} />;
  });
  return (
    <InfiniteScroll
      listItems={VirtualScrollChildren}
      lastRowHandler={lastRowHandler}
    />
  );
}

export default VirtualAndInfiniteScroll;
