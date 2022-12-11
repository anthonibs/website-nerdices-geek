import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Games from "../pages/Games";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="games" element={<Games />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;