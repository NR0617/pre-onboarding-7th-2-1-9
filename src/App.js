import { BrowserRouter } from "react-router-dom";
import Router from './Router'
import './index.css';
import { RecoilRoot } from "recoil";
import React from "react";
import Layout from "./components/Layout";
import HeaderBar from "./components/HeaderBar";


const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <React.Suspense fallback={<Layout><HeaderBar/><div>Loading...</div></Layout>}>
        <Router />
        </React.Suspense>
      </RecoilRoot>
    </BrowserRouter>
  )
}


export default App;
