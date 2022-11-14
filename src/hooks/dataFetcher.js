import React from "react";
import { getStories } from "../utils/apis";

const useDataFetcher = (type, startIdx = 0) => {
  const [stories, setStories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  //  React.useEffect(() => {
  //    setIsLoading(false)
  //    setStories([])
  //  }, [type])
  React.useEffect(() => {
    if (stories.length === startIdx) {
      setIsLoading(true);
      getStories(type, startIdx)
        .then((stories) => {
          setStories((oldStories) => [...oldStories, ...stories]);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [type, startIdx]);

  return { isLoading, stories, setIsLoading, setStories };
};

export default useDataFetcher;
