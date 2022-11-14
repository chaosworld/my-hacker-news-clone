import React from "react";
import Story from "./Story";
import Loader from "./Loader";

import VirtualAndInfiniteScroll from "./VirtualAndInfiniteScroll";

import useDataFetcher from "../hooks/dataFetcher";

const ShowStories = ({ type }) => {
  //console.log(props.match.params)
  //const { type } = props.match.params
  const [startIdx, setStartIdx] = React.useState(0);
  const [pageType, setPageType] = React.useState(type ? type : "top");
  //const [pageData, setPageData] = React.useState(useDataFetcher(type ? type : "top", startIdx))
  //const { isLoading, stories } = pageData
  const { isLoading, stories, setStories, setIsLoading } = useDataFetcher(
    pageType,
    startIdx
  );

  const [pages, setPages] = React.useState({});

  function loadingNextPage(oldIdx) {
    setStartIdx(oldIdx + 30);
  }
  console.log(`pages key: ${Object.keys(pages)}`);
  Object.entries(pages).map(([key, value]) => {
    console.log(`key: ${key}, startIdx: ${pages[key]["startIdx"]}`);
  });

  React.useEffect(() => {
    //if (!(type in pages) || pages[pageType]['stories'].length === 0) {
    setPages((oldPages) => {
      const newPages = { ...oldPages };
      newPages[pageType] = {
        startIdx: startIdx,
        stories: [...stories]
      };
      return newPages;
    });
    //}
    setStartIdx(type in pages ? pages[type]["startIdx"] : 0);
    setStories(type in pages ? pages[type]["stories"] : []);
    setIsLoading(type in pages ? false : true);
    setPageType(type);
  }, [type]);

  console.log(`current pageType=${pageType}, startIdx=${startIdx}`);

  const storiesElements = stories.map(({ data: story }) => {
    return <Story key={story.id} story={story} />;
  });

  return (
    <React.Fragment>
      <Loader show={isLoading}>Loading...</Loader>
      <React.Fragment>
        <VirtualAndInfiniteScroll
          listItems={storiesElements}
          lastRowHandler={() => loadingNextPage(startIdx)}
        />
      </React.Fragment>
    </React.Fragment>
  );
};

export default ShowStories;
