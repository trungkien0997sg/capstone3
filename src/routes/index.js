import { Route } from "react-router-dom";
import HomeTemplate from "../pages/HomePageTemplate";
import HomePage from "../pages/HomePageTemplate/HomePage";
import AboutPage from "../pages/HomePageTemplate/AboutPage";
const routes = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      { path: "", element: HomePage },
      { path: "about", element: AboutPage },
    ],
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
