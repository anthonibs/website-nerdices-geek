import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Games from "../pages/Games";
import GamesFromId from "../pages/Games/GamesFromId";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="games/:name" element={<GamesFromId />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;