import { Navigate, Outlet, useRoutes } from "react-router-dom";

import { routes } from ".";
import { MainLayout } from "../components/layout";
import { cocktailRoutes } from "../features/cocktails/routes/cocktail-routes";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const appRoutes = [
  {
    path: "/",
    element: <App />,
    children: cocktailRoutes,
  },
  {
    path: "*",
    element: <Navigate to={`${routes.cocktail.search}`} />,
  },
];

export const AppRoutes = () => {
  return useRoutes(appRoutes);
};
