import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Snowfall from 'react-snowfall'
import { About } from "./About";
import { Login } from "./Login";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/login" element= {<Login />} />
        </Routes>
      
        <Footer />
      </div>
      <div>
        ReactDOM.render(
  <div style={{ height: 400, width: 400, background: '#282c34', position: 'relative' }}>
  <Snowfall
  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
  }}
/>
  </div>,
  document.querySelector('#app'),
)</div>
  </BrowserRouter>
  );
}

export default App;