import {React,useState,useEffect} from 'react';
import {useInput} from './hooks/useInput'
import './App.scss';
import InputField from './components/InputField/InputField'
import ConfPanel from "./components/ConfPanel/ConfPanel";
import Figure from "./components/Figure/Figure"

const App = () => {
  const [height,setHeight] = useState();
  const [radius,setRadius] = useState();
  const [number,setNumber] = useState();
  const [vertices,setVertices] = useState()

  const handleChange = (config) => {
    setRadius(config.radius.value);
    setNumber(config.number.value);
    setHeight(config.height.value);
  }
  
  const getArrayVertices = async () => {
    const response = await fetch(`/api/computation?r=${radius}&n=${number}&h=${height}`);
    const jsonFile = await response.json();
    setVertices(jsonFile);
}
  return(
    <div className="App">
      <div className = "App--ConfPanel">
        <ConfPanel  onChange={handleChange}
                    onSubmitChange = {getArrayVertices}     
        />
      </div>
      <div className="App--Figure">
        <Figure vertices = {vertices} />
      </div>
    </div>
  )
}

export default App;
