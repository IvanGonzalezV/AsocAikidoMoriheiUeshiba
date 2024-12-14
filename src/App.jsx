import React from "react";
import "./App.css";
 
//COMPONENTS

import Header from "./components/Header/Header";
import MediaSlider from "./components/MediaSlider/MediaSlider";
import Body from "./components/Body/Body";

const name = "AsocMoriheiUeshiba"

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
        <MediaSlider />
        <Body />
        {/* <h1>Hello World..!!</h1>  //metodo para inyectar JS */}
        {/* <p>{name}</p>  metodo para inyectar JS */}
      </div>
    )
  }
}

export default App;