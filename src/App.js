import React from "react";
import { BrowserRouter} from 'react-router-dom';
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="App">
        <AnimatedRoutes/>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
