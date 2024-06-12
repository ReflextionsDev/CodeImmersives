import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/about";
import Home from "./routes/home";
import Contact from "./routes/contact"
import NotFound from "./routes/notfound";
import Form from "./components/form";
import Submitted from "./components/submitted";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />}>
          <Route index element ={<Form />}/>
          {/* <Route path="form" element ={<Form />}/> */}
          <Route path="submitted" element={<Submitted/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);