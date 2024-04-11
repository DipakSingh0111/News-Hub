import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FetchData = ({ cat }) => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    await axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=fefcba94b42647ba8f8ed4e8d92643b3`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=fefcba94b42647ba8f8ed4e8d92643b3"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    fetchData();
  }, [cat]);
  return (
    <div className="container my-4">
      <h3>
        <u>TOP HEADLINES...</u>
      </h3>
      <div
        className="container d-flex justify-content-center align-items-center flex-column my-3"
        style={{ minHeight: "100vh" }}
      >
        {data
          ? data.map((item, index) => (
              <>
                <div
                  key={index}
                  className="container my-3 p-3"
                  style={{
                    width: "700px",
                    boxShadow: "2px 2px 10px silver",
                    borderRadius: "10px",
                  }}
                >
                  <p className="my-2">{item.title}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={item.urlToImage}
                      alt="/"
                      className="img-fluid  "
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h5 className="my-1">{item.description}</h5>
                  <h5 className="my-1">{item.content}</h5>

                  <Link
                    to={item.url}
                    target="blank"
                    type="button"
                    className="btn btn-primary"
                  >
                    View More
                  </Link>
                </div>
              </>
            ))
          : "LOADING...s"}
      </div>
    </div>
  );
};

export default FetchData;
