import { BrowserRouter } from "react-router-dom";
import Router from './Router'
import './index.css';
import { RecoilRoot } from "recoil";
import React from "react";


const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
        <Router />
        </React.Suspense>
      </RecoilRoot>
    </BrowserRouter>
  )
}


export default App;
