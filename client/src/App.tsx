import "./index.css";
import React from "react";
import { Outlet } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer";

function App() {
  return (
    <AppLayout header={<Header />} aside={<></>} footer={<Footer />}>
      <Outlet />
    </AppLayout>
  );
}

export default App;
