import { useState, createContext } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [backgroundColor, setBackGroundColor] = useState("#B9DCF0");
  const [errorMessage, setErrorMessage] = useState("");
  const getPosts = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    } catch (error) {
      setErrorMessage(error);
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        errorMessage,
        getPosts,
        backgroundColor,
        setBackGroundColor,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
