import { Route } from "react-router-dom";
import HomeTemplate from "../pages/HomePageTemplate";
import HomePage from "../pages/HomePageTemplate/HomePage";
import AboutPage from "../pages/HomePageTemplate/AboutPage";
import DetailMovie from "../pages/HomePageTemplate/DetailMovie/index.jsx";
import AuthPageTemplate from "../pages/AuthTemplate/index.jsx";
import LoginPage from "../pages/AuthTemplate/LoginPage/index.jsx";
const routes = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      { path: "", element: HomePage },
      { path: "about", element: AboutPage },
      { path: "detail/:id", element: DetailMovie },
    ],
  },
  {
    path: "",
    element: AuthPageTemplate,
    nested: [{ path: "/login", element: LoginPage }],
  },
];

const renderRoute = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    }
  });
};

export default renderRoute;
