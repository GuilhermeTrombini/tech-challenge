import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/molecules/Header";
import NotFound from "./pages/NotFound";
import Table from "./pages/Table";
import User from "./pages/User";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/table",
      element: <Table />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
