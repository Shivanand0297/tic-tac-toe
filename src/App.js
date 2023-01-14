import React, { useState } from "react";
import Icons from "./Components/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty");
  };
  const checkIsWinner = () => {
    // main logic
    if (
      //checking for row
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
      return toast(`${itemArray[0]} Wins`, { type: "success" });

    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} Wins`);
      return toast(`${itemArray[3]} Wins`, { type: "success" });

    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} Wins`);
      return toast(`${itemArray[6]} Wins`, { type: "success" });

    } else if (
      // checking for columns
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
      return toast(`${itemArray[0]} Wins`, { type: "success" });

    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} Wins`);
      return toast(`${itemArray[1]} Wins`, { type: "success" });

    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
      return toast(`${itemArray[2]} Wins`, { type: "success" });

    } else if (
      //checking diagonally
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
      return toast(`${itemArray[0]} Wins`, { type: "success" });

    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
      return toast(`${itemArray[2]} Wins`, { type: "success" });

    }
  }
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("value already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-right" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <>
              <h1>{winMessage}</h1>
              <Button onClick={reloadGame}>Click to reload</Button>
            </>
          ) : (
            <h1>{isCross ? "Cross's" : "Circle's"} turn</h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => {
              return (
                <Card onClick={() => changeItem(index)} key={index} >
                  <CardBody className="box" >
                    <Icons name={item} />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
