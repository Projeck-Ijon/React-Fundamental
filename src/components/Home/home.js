import React from "react";
import { Container, Alert } from "react-bootstrap";
import { faCircleExclamation, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <React.Fragment>
      <>
        <Container>
          <div
            style={{
              marginTop: "100px",
              backgroundColor: "#5F9EA0",
              fontSize: "30px",
              width: "100%",
              padding: "20px",
              boxShadow: "20PX 25PX 10PX -5px rgba(0, 0, 0, 0.8)",
              color: "black",
            }}
          >
            <h2>
              <u>
                <b>Tugas Dea Cource</b>
              </u>
            </h2>
            <br />

            <p>
              1. Routing URL post dengan isian api POST <FontAwesomeIcon icon={faCheck} className="ms-2 text-success" />{" "}
            </p>
            <p>
              {" "}
              2. Modifikasi UI Homepage <FontAwesomeIcon icon={faCheck} className="ms-2 text-success" />
            </p>
            <p>
              {" "}
              3. Membuat Active Navigation Bar <FontAwesomeIcon icon={faCheck} className="ms-2 text-success" />{" "}
            </p>
            <p>
              {" "}
              4. Membuat modal popup dari API POST <FontAwesomeIcon icon={faCheck} className="ms-2 text-success" />
            </p>
            <p>
              {" "}
              5. Membuat UI Kreatifitas Masing-Masing <FontAwesomeIcon icon={faCheck} className="ms-2 text-success" />
            </p>
            <br />
            <p>
              Sumber API :{" "}
              <a href="https://jsonplaceholder.typicode.com/photos" target="_blank">
                https://jsonplaceholder.typicode.com
              </a>
            </p>
          </div>
        </Container>
      </>
    </React.Fragment>
  );
};
export default Home;
