import { Route, Routes } from "react-router"
import Home from "../pages/home/Home"
import PageNotFound from "../pages/PageNotFound"
import Preloader from "../pages/home/preLoader/Preloader"

const MainRoutes = () => {
  return (
    <Routes className="mt-10">
      <Route path="/" element={<Home />} />
      <Route path="/loader" element={<Preloader />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default MainRoutes