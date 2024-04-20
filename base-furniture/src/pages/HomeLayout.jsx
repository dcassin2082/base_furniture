import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;

/* setting up routes */

/*
  1 - create all your component pages 
  2 - create HomeLayout page that will contain the outlet function <Outlet />
  3 - in App.jsx add the routes array
      first add imports:
        import { RouterProvider, createBrowserRouter } from "react-router-dom";
      then the routes including children: 
        (note that the ones that are NOT children of the HomeLayout (login, register ) will NOT be present in the navbar)
        also note that only one of the children will contain the index which means it will be the landing page (here id is the first child element, <Landing />)
  4 - add the routes to the return fragment: return <RouterProvider router={router} />; 

  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);


*/
