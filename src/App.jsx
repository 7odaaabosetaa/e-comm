
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import "Landing" from "pages/Landing"


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";

const app = () => {
  return (
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default app;