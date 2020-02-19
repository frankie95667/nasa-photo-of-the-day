import React, { useState, useEffect } from "react";
import NasaCard from './Components/Card/NasaCard';
import TopBarContainer from './Components/TopBar/TopBarContainer';
import Footer from './Components/Footer/Footer';
import {Form, Button, Col, Label, FormGroup, Input} from 'reactstrap';
import axios from "axios";
import "./App.css";

const API_KEY = "k0Pk1YxvkvaZ2agWoiM9efuyscQElxLQFVaX8W4g";
const API_URL = "https://api.nasa.gov/planetary/apod";

function App() {
  const [imageData, setImageData] = useState();
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(`${API_URL}?api_key=${API_KEY}`);

  useEffect(() => {
    setLoading(true);
    axios
      .get(query)
      .then(res => {
        const date = new Date();
        setImageData(res.data);
        setDate(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
        
      })
      .catch(err => console.log(err));
  }, [query]);

  const onLoad = () => {
    setTimeout(() => {
      setLoading(false);
    },1000)
  }

  const updateQuery = () => {
    console.log('button clicked');
    setQuery(`${API_URL}?api_key=${API_KEY}&date=${date}`);
  }

  return (
    <>
    <TopBarContainer />
    
    <div className="App">
      <Form>
        <FormGroup row>
          <Label for="date" sm={2}>Change Date</Label>
          <Col sm={4}>
            <Input onChange={(e)=> setDate(e.target.value)} type="date" name="date" id="date" data-date={date} />
          </Col>
          <Col>
            <Button onClick={()=> updateQuery()}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      {imageData ? (
        <NasaCard imageData={imageData} loading={loading} onLoad={onLoad} />
      ) : null}
      <Footer />
    </div>
    </>
  );
}

export default App;
