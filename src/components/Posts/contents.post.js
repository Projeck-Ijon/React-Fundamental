import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { Modal } from "react-bootstrap";
import Loaders from "../Utilities/loaders";

// import PopUp from "./popup.post";

const Contents = () => {
  const [postss, setPost] = useState([]);
  const [limit, setLimit] = useState(3);
  const [isiModal, setModal] = useState({});
  const [loading, setLoading] = useState(true);

  const [shows, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setPost(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const setUpButton = (a) => {
    a === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <Container style={{ marginBottom: "80px" }}>
        {/* <h1>{isiModal.title}</h1> */}
        {postss.map((data, i) => {
          return (
            <div key={i}>
              <Button
                style={{
                  color: "primary",
                  width: "100%",
                  marginTop: "30px",
                  boxShadow: "10PX 15PX 10PX 0px rgba(0, 0, 0, 0.8)",
                }}
                onClick={() => {
                  setModal(data);
                  setShow(true);
                }}
              >
                <h2>{data.title}</h2>
              </Button>
            </div>
          );
        })}
        <Modal show={shows} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>ID : {isiModal.id}</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>TITLE : {isiModal.title}</h6>

            <h6>
              {" "}
              URL :{" "}
              <a href={isiModal.url} target="_blank">
                {isiModal.url}
              </a>
            </h6>
          </Modal.Body>
        </Modal>
      </Container>
      <div style={{ position: "fixed", left: "0", bottom: "0", textAlign: "center", backgroundColor: " #e6e6fa", width: "100%", height: "59px" }}>
        <ButtonGroup className="mt-1">
          <Button variant="dark" size="lg" onClick={() => setUpButton("+")}>
            Tambah
          </Button>
          {limit > 1 && (
            <Button style={{ marginLeft: "10px" }} variant="dark" size="lg" onClick={() => setUpButton("-")}>
              Kurang
            </Button>
          )}
        </ButtonGroup>
      </div>
    </React.Fragment>
  );
};

export default Contents;
