import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'));
const Dogs = lazy(() => import('../pages/Dogs'));
const DogsDetalis = lazy(() => import('../pages/DogsDetalis'));
const Gallery = lazy(() => import('./Gallery'));
const Subbreeds = lazy(() => import('./Subbreeds'));

// ========== EXAMPLE, IF EXPORT IS NOT DEFAULT ==========
// const Gallery = lazy(() => 
//   import('./Gallery').then(module => {
//     console.log(module);
//     return {
//       ...module,
//       dafault: module.Gallery,
//     };
//   })
// );

export const App = () => {
  return (
      <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="dogs" element={<Dogs />} />
      <Route path="dogs/:dogId" element={<DogsDetalis />}>
        <Route path="subbreeds" element={<Subbreeds />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Route>
      </Routes>
  );
};
