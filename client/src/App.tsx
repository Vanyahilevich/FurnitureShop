import "./index.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppLayout from "./pages/app-layout";
import Header from "./widgets/header/header";
import Footer from "./widgets/footer/Footer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function App() {
  return (
    <AppLayout header={<Header />} aside={<></>} footer={<Footer />}>
      <Suspense
        fallback={
          <AiOutlineLoading3Quarters className="text-black animate-spin w-10 h-10 self-center justify-items-center flex-auto" />
        }
      >
        <Outlet />
      </Suspense>
    </AppLayout>
  );
}

export default App;
