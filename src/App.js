import React, { Component } from 'react';
import Input from './Input'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.setText = this.setText.bind(this);
    this.setPoint = this.setPoint.bind(this);
    this.state = {
      lang: "TEXT",
      value: "Scrivi del testo e ti verrà convertito in punti. :)"
    }
  }

  setText(value) {
    this.setState({
      lang: "TEXT",
      value
    })
  }

  setPoint(value) {
    this.setState({
      lang: "POINT",
      value
    })
  }

  dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  bin2point(bin) {
    return bin.split('').map((b) => {
      return b === "0" ? "." : ":"
    }).join("")
  }

  point2bin(points) {
    return points.split('').map((b) => {
      return b === "." ? "0" : "1"
    }).join("")
  }

  textToPoint(textValue) {
    return textValue.split('').map((s) => s.charCodeAt(0)).map(this.dec2bin).map(this.bin2point).join(' ')
  }

  pointToText(pointValue) {
    return pointValue.split(' ').map(this.point2bin).map((b) => parseInt(b, 2)).map((c) => String.fromCharCode(c)).join('')
  }

  render() {
    let textValue, pointValue
    switch (this.state.lang) {
      case 'TEXT':
        textValue = this.state.value
        pointValue = this.textToPoint(this.state.value)
        break
      case 'POINT':
        textValue = this.pointToText(this.state.value)
        pointValue = this.state.value
        break
      default:
      textValue = this.state.value
      pointValue = this.state.value
    }

    return (
      <div className="App">
        <Input lang="TEXT" onChange={this.setText} value={textValue} />
        <Input lang="POINT" onChange={this.setPoint} value={pointValue} />
      </div>
    );
  }
}

export default App;
