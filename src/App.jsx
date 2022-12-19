import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={< Home />} />
        </Routes>
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;