import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const ChangeBackground = () => {
  const { setBackGroundColor } = useContext(PostContext);
  return (
    <div>
      <button onClick={() => setBackGroundColor("#cf0e0e")} className="btn-red">
        Red
      </button>
      <button
        onClick={() => setBackGroundColor("#008009")}
        className="btn-green"
      >
        Green
      </button>
      <button
        onClick={() => setBackGroundColor("#091dd7")}
        className="btn-blue"
      >
        Blue
      </button>
      <button onClick={() => setBackGroundColor("#fff")} className="btn-white">
        White
      </button>
    </div>
  );
};

export default ChangeBackground;
