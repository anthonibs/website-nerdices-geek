import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Animes from "../pages/Animes";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="animes" element={<Animes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;