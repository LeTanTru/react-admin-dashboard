import { PRODUCT_DATA } from '@/constants';
import { motion } from 'framer-motion';
import { Edit, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
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
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Category
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Price
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Stock
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Sales
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700'>
            {filteredProducts.length === 0 ? (
              <td
                colSpan={12}
                className='px-6 py-4 text-center text-sm whitespace-nowrap'
              >
                <span className='inline-block bg-gradient-to-r from-cyan-600 to-blue-400 bg-clip-text text-xl font-bold text-transparent'>
                  No products found.
                </span>
              </td>
            ) : (
              filteredProducts.map((product) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className='flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-100'>
                    <img
                      src={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s'
                      }
                      className='size-10 rounded-full'
                    />
                    {product.name}
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    {product.category}
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    {product.price}
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    {product.stock}
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    {product.sales}
                  </td>
                  <td className='just flex px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    <button className='mr-2 text-indigo-400 hover:text-indigo-300'>
                      <Edit size={18} />
                    </button>
                    <button className='text-red-400 hover:text-red-300'>
                      <Trash2 size={18} />
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
export default ProductTable;
