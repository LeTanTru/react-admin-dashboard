import { Sidebar } from '@/components/common';
import {
  AnalyticsPage,
  OrdersPage,
  OverviewPage,
  ProductsPage,
  SalesPage,
  SettingsPage,
  UsersPage
} from '@/pages';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='flex h-screen overflow-hidden bg-gray-900 text-gray-100'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'></div>
        <div className='absolute inset-0 backdrop-blur-sm'></div>
      </div>
      <Sidebar />
      <Routes>
        <Route path='/' element={<OverviewPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/sales' element={<SalesPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </div>
  );
};
export default App;
