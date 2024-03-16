import { useContext, useEffect } from "react";
import { PostContext } from "../context/PostContext";
import ErrorMessage from "./ErrorMessage";
const CommentsTable = () => {
  const { posts, errorMessage, getPosts, backgroundColor, setBackGroundColor } =
    useContext(PostContext);

  useEffect(() => {
    setBackGroundColor(backgroundColor);
  }, [backgroundColor, setBackGroundColor]);
  return (
    <div>
      <div className="table-heading">
        <h2>Posts Table</h2>
        <button onClick={getPosts}>Get Posts</button>
      </div>
      <div className="table-contents">
        {posts ? (
          <table style={{ background: backgroundColor }}>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Post Id</th>
                <th>Post Title</th>
                <th>Post Body</th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((post) => (
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ErrorMessage message={errorMessage} />
        )}
      </div>
    </div>
  );
};

export default CommentsTable;
