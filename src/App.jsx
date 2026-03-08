import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
