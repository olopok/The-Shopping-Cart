import App from "../App";
import Shop from "../components/shop";
import Contacts from "../components/contacts";
import Home from "../components/home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/contacts", element: <Contacts /> },
    ],
  },
];

export default routes;
