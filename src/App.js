import React, { useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import axios from "axios";
import "./App.css";

const API_KEY = "k0Pk1YxvkvaZ2agWoiM9efuyscQElxLQFVaX8W4g";
const API_URL = "https://api.nasa.gov/planetary/apod";

function App() {
  const [imageData, setImageData] = useState();
  const [todaysDate, setTodaysDate] = useState(
    `${new Date().getFullYear()}-${new Date().getMonth() +
      1}-${new Date().getDate()}`
  );

  useEffect(() => {
    axios
      .get(`${API_URL}?api_key=${API_KEY}&date=${todaysDate}`)
      .then(res => {
        console.log(res);
        setImageData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {imageData ? (
        <Card>
          <CardBody>
          <CardTitle>
              <h3>{imageData["title"]}</h3>
            </CardTitle>
            
          </CardBody>
          <CardImg
            top
            width="100%"
            src={imageData["url"]}
            alt={imageData["title"]}
          />
          <CardBody>
          <CardTitle>Date: {todaysDate}</CardTitle>
            <CardText>{imageData["explanation"]}</CardText>
          </CardBody>
        </Card>
      ) : null}
    </div>
  );
}

export default App;
