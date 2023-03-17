import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layouts/Main';
import Customers from "../screens/customers";
import ViewCustomer from "../screens/customers/view";

export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Customers/>
    },
    {
        path: "/customers/:id",
        element: <ViewCustomer/>
    }
]);

const Router: React.FC = () => {
  return (
    <MainLayout>
        <RouterProvider router={appRoutes} />
    </MainLayout>
  );
};

export default Router;
