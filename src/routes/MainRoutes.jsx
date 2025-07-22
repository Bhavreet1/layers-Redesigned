import { Route, Routes } from "react-router"
import Home from "../pages/home/Home"
import PageNotFound from "../pages/PageNotFound"
import Preloader from "../pages/home/preLoader/Preloader"

const MainRoutes = () => {
  return (
    <Routes className="mt-10">
      <Route path="/" element={<Home />} />
      <Route path="/loader" element={<Preloader />} />
      <Route path="/anarc" element={<PageNotFound />} />
      <Route path="/skins/mobile" element={<PageNotFound />} />
      <Route path="/skins/laptop" element={<PageNotFound />} />
      <Route path="/skins/ipad" element={<PageNotFound />} />
      <Route path="/skins/anarc" element={<PageNotFound />} />
      <Route path="/accessories" element={<PageNotFound />} />
      <Route path="/our-story" element={<PageNotFound />} />
      <Route path="/cart" element={<PageNotFound />} />
      <Route path="/login" element={<PageNotFound />} />
      <Route path="/register" element={<PageNotFound />} />
      <Route path="/profile" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default MainRoutes