import React from "react";

import data from "./Components/data/data.json";
import Card from "./Components/CardComponent/Card";
import Calender from "./Components/CalenderComponent/calenderComponent";
import "./App.css";

const myJson = data.events;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myJson,
    };
  }
  render() {
    const mapCards = this.state.myJson.map((item) => (
      <Card key={item.id} start={item.start} end={item.end} title={item.name} />
    ));

    const mapCalenderDates = this.state.myJson.map((item) => (
      <Calender
        key={item.id}
        start={item.start}
        end={item.end}
        title={item.name}
        clickHere="Click Here"
      />
    ));

    return (
      <div className="app-container">
        <h1 className="heading-one">Detangled</h1>
        <div className="cards-wrapper">
          <ul>{mapCards}</ul>
        </div>
        <div className="calender-wrapper">{mapCalenderDates}</div>
      </div>
    );
  }
}

export default App;
