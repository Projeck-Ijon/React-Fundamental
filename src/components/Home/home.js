import React from "react";
import { Container } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
const Home = () => {
  return (
    <React.Fragment>
      <Container style={{ marginTop: "100px", color: "black" }}>
        <div
          style={{
            backgroundColor: "#5F9EA0",
            fontSize: "30px",

            width: "100%",
            height: "500px",
            marginTop: "30px",
            padding: "20px",
            boxShadow: "20PX 25PX 10PX -5px rgba(0, 0, 0, 0.8)",
          }}
        >
          <p style={{ fontWeight: "bold", textDecoration: "underline" }}>Tugas Dea Cource</p>

          <p>1. Routing URL post dengan isian api POST </p>
          <p> 2. Modifikasi UI Homepage</p>
          <p> 3. Membuat Active Navigation Bar </p>
          <p> 4. Membuat modal popup dari API POST</p>
          <p> 5. Membuat UI Kreatifitas Masing-Masing</p>
          <br />
          <p>
            Sumber API :{" "}
            <a href="https://jsonplaceholder.typicode.com/photos" target="_blank">
              https://jsonplaceholder.typicode.com
            </a>
          </p>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default Home;
