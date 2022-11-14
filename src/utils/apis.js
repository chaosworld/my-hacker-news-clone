import axios from "axios";
import { BASE_API_URL } from "./constants";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log(`Error while getting a story for id=${id}`);
  }
};

export const getStories = async (type, startIdx = 0) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    //console.log(`storyIds: ${storyIds}`)
    console.log(
      `startIdx=${startIdx}, stories ID: ${storyIds.slice(
        startIdx,
        startIdx + 30
      )}`
    );
    const stories = await Promise.all(
      storyIds.slice(startIdx, startIdx + 30).map(getStory)
    );
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};
