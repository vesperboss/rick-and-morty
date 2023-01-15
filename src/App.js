import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Character } from "./pages/Character";
import { Home } from "./pages/Home";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path ='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Route>
      </Routes>
    </>
  );
}
