import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { ButtonGroup, Button } from "react-bootstrap";
import Loaders from "../Utilities/loaders";

const Collection = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    //clean up render
    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const handleLimit = (option) => {
    option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
    if (option === "-") {
      // const title = document.getElementById("wewe");
      // let i = title.key.value;
      // i > 1 ? (i = [1]) : (i = [1]);
      const logo = document.getElementById("wewe");
      const src = logo.getAttribute("key");
      console.info(src);
    }
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <h3>{limit} Collection</h3>
      <Carousel
        style={{
          boxShadow: "10PX 15PX 10PX 0px rgba(0, 0, 0, 0.8)",
        }}
      >
        {/* maping item star */}
        {datas.map((data, i) => {
          return (
            <Carousel.Item id="wewe" key={i}>
              <img id="id_img" className="d-block w-100" src={data.url} alt="First slide" height={450} width={450} />

              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>{i}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}

        {/* carosel item end */}
      </Carousel>
      <ButtonGroup
        className="d-flex justufy-content-center align-items-center"
        style={{
          marginTop: "20px",
          backgroundColor: "#6fa8dc",
          boxShadow: "10PX 15PX 10PX 0px rgba(0, 0, 0, 0.8)",
        }}
      >
        <Button variant="outline-primary" onClickCapture={() => handleLimit("+")}>
          +
        </Button>
        {limit > 1 && (
          <Button variant="outline-primary" onClick={() => handleLimit("-")}>
            -
          </Button>
        )}
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Collection;
