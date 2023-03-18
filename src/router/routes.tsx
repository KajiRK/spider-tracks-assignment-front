import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../components/Layouts/App';
import Customers from "../screens/Customers";
import ViewCustomer from "../screens/Customers/view";

const AppRoutes: React.FC = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/customers/:id" element={<ViewCustomer />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRoutes;
