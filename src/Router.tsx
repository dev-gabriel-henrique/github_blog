import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/erro-404" element={<h1>404 - Não encontrado</h1>} />
      </Route>
    </Routes>
  )
}