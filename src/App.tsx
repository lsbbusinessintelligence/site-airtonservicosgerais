import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
    <FloatingWhatsApp />
  </BrowserRouter>
);

export default App;
