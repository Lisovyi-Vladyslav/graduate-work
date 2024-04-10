import { Routes, Route } from "react-router";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import NotFound from "./NotFound/NotFound";
import Phones from "./Phones/Phones";

const Home = lazy(() => import("./home/home"));
// const TasksDetailsPage = lazy(() => import("./task-details"));

export const Routing = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<SharedLayout />} >

        <Route index element={<Home />} />
        <Route path="phones" element={<Phones />} />

      </Route>

      
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    </>
  );
};

{/* <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} /> */}