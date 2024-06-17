import { Routes, Route } from "react-router";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import NotFound from "./NotFound/NotFound";
import Phones from "./Phones/Phones";
import PhonesDetails from "./PhonesDetails/PhonesDetails";
import Favour from "./Favour/Favour";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Profile from "./Profile/Profile";

const Home = lazy(() => import("./home/home"));
// const TasksDetailsPage = lazy(() => import("./task-details"));

export const Routing = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<SharedLayout />} >

        <Route index element={<Home />} />
        <Route path="phones" element={<Phones />} />
        <Route path="phones/:productId" element={<PhonesDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="user/favour" element={<Favour />} />
        <Route path="user/cart" element={<ShoppingCart />} />
        
      </Route>

      
      <Route path="*" element={<NotFound />} />
    </Routes>
    
    </>
  );
};

{/* <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} /> */}