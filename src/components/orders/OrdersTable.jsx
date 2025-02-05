import { motion } from 'framer-motion';
import { ORDER_DATA } from '@/constants';
import { useState } from 'react';
import { Eye, Search } from 'lucide-react';

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(ORDER_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = ORDER_DATA.filter((order) =>
      order.name.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className='mt-5 mb-8 rounded-xl border border-solid border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='mb-6 flex items-center justify-between'>
        <div className='text-xl font-semibold text-gray-100'>Product List</div>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search products...'
            className='rounded-lg bg-gray-700 py-2 pr-10 pl-4 text-white placeholder-gray-400 transition-all duration-100 ease-linear focus:ring-2 focus:ring-blue-500 focus:outline-none'
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search
            className='absolute top-[50%] right-3 -translate-y-[50%] cursor-pointer bg-gray-700 text-gray-400 transition-all duration-100 ease-linear hover:opacity-80'
            size={20}
            strokeWidth={2.5}
          />
        </div>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Order Id
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Customer
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Total
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Status
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Date
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700'>
            {filteredOrders.length === 0 ? (
              <td
                colSpan={12}
                className='px-6 py-4 text-center text-sm whitespace-nowrap'
              >
                <span className='inline-block bg-gradient-to-r from-cyan-600 to-blue-400 bg-clip-text text-xl font-bold text-transparent'>
                  No orders found.
                </span>
              </td>
            ) : (
              filteredOrders.map((order) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className='px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-100'>
                    {order.id}
                  </td>
                  <td className='flex items-center gap-2 px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    <img
                      src={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s'
                      }
                      className='size-10 rounded-full'
                    />
                    {order.customer}
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    {order.total}
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    <span
                      className={`inline-flex rounded-lg px-2 text-xs leading-5 font-semibold ${order.status === 'Delivered' ? 'bg-green-300 text-green-800' : order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    {order.date}
                  </td>
                  <td className='just flex px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    <button className='mr-2 text-indigo-400 hover:text-indigo-300'>
                      <Eye size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
export default OrdersTable;
