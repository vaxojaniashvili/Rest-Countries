import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CountriesInfo from "./components/countries/CountriesInfo/CountriesInfo.tsx";
import Header from "./components/header/Header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "country/:name",
    element: (
      <>
        <Header />
        <CountriesInfo />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
