// import logo from './logo.svg';
// import './App.css';

import Box from "./components/Box";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const style = {
    background: 'radial-gradient(50% 50% at 50% 50%, #E0E8F1 0%, #BFCAD6 100%)',
    height:"100vh"
  };
  return (
    <div className="App" style={style}>
      <Navbar/>
      <Home/>
      {/* <Box/> */}
    </div>
  );
}

export default App;
