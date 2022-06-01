import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Youtube.css";

function Youtube() {
  const [input, setInput] = useState([]);
  const [value, setValue] = useState("");
  var [data, setData] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    data = data + 1;
    setData(data);
  };
  console.log(value);

  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        "https://ce4kvluf13.execute-api.ap-south-1.amazonaws.com/stage/video-list"
      );
      setInput(result.input.data);
      console.log(result.input.data[0]);
    }
    getData();
  }, [data]);
  return (
    <div>
      <div className="main">
        <div className="input">
          <div className="icon">
            <img src={(process.env_URL = "/img/youtube.png")} alt="" />
          </div>
          <div className="box">
            <input type="text" placeholder="Search" onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
        <div className="search-box">
          {input.map((e) => {
            return (
              <div>
                <div className="youtube-box">
                  <h2>{e.snippet.title}</h2>
                  <p>{e.snippet.description}</p>
                  <img
                    className="youtube-image"
                    src={e.snippet.thumbnails.default.url}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Youtube();
