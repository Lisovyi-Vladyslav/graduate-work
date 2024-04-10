import { Outlet } from "react-router-dom";
import { Header } from "widgets/Header/Header";



export const SharedLayout = () => {
  return (
    <>
        <Header/>
         <Outlet />
        {/* <Footer/> */}
    </>
    // <Container>
    //   <Header>
    //     <Logo>
    //       <span role="img" aria-label="computer icon">
    //         💻
    //       </span>{" "}
    //       GoMerch Store
    //     </Logo>
    //     <nav>
    //       <Link to="/" end>
    //         Home
    //       </Link>
    //       <Link to="/about">About</Link>
    //       <Link to="/products">Products</Link>
    //     </nav>
    //   </Header>
    //   <Suspense fallback={<div>Loading page...</div>}>
    //     <Outlet />
    //   </Suspense>
    // </Container>
  );
};
