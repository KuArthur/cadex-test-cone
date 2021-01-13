import './App.scss';

import InputField from "./components/InputField/InputField"

const App = () => {
  return(
    <div>
      <InputField id = 'coneHeight' value = 'Cone height:' />
      <InputField id = 'coneTriangles' value = 'Number of triangles:' />
      <InputField id = 'coneBase' value = 'Base radius:' />
    </div>
  )
}

export default App;
