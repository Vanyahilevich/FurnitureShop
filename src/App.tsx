import './index.css';
import React from "react";
import {Outlet} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Header from "./widgets/Header";

function App() {

  return (
    <AppLayout
      header={<Header/>}
      aside={<></>}
      footer={<div>Footer</div>}
    >
      <Outlet/>
    </AppLayout>
  )
}

export default App
