import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Router from "./Components/Router";


function App() {
  return (
    <BrowserRouter>
    

      <Router>
        <Home />
      </Router>




      {/* <ShopGrid /> */}
      {/* <ShopList /> */}
      {/* <ShopLeft /> */}
      {/* <ProductDetails /> */}
      {/* <ShoppingCart /> */}
      {/* <OrderCompleted /> */}
      {/* <HektoDemo /> */}
      {/* <Login /> */}
      {/* <BlogPage /> */}
      {/* <SingleBlog /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <PageNotFound /> */}
      {/* <FAQ /> */}

    </BrowserRouter>
  );
}

export default App;
