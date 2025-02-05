import { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit, Search, Trash2 } from 'lucide-react';
import { USER_DATA } from '@/constants';

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUser, setFilteredUser] = useState(USER_DATA);
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = USER_DATA.filter((user) =>
      user.name.toLowerCase().includes(term)
    );
    setFilteredUser(filtered);
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
                Id
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Email
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Role
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Status
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-400 uppercase'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700'>
            {filteredUser.length === 0 ? (
              <td
                colSpan={12}
                className='px-6 py-4 text-center text-sm whitespace-nowrap'
              >
                <span className='inline-block bg-gradient-to-r from-cyan-600 to-blue-400 bg-clip-text text-xl font-bold text-transparent'>
                  No products found.
                </span>
              </td>
            ) : (
              filteredUser.map((user) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    {user.id}
                  </td>
                  <td className='flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-100'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-blue-500 font-bold text-white uppercase'>
                      {user.name.charAt(0)}
                    </div>
                    <div className='ml-2'>
                      <div className='text-sm font-medium text-gray-100 capitalize'>
                        {user.name}
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    {user.email}
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap'>
                    <span className='loading-5 inline-flex rounded-lg bg-blue-800 px-2 py-1 text-xs font-semibold text-blue-100'>
                      {user.role}
                    </span>
                  </td>
                  <td className='px-6 py-4 text-sm whitespace-nowrap'>
                    <span
                      className={`inline-flex rounded-lg px-2 text-xs leading-5 font-semibold ${user.status === 'Active' ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className='just flex px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                    <button className='mr-2 text-indigo-400 transition-all duration-200 ease-linear hover:text-indigo-300'>
                      <Edit size={18} />
                    </button>
                    <button className='text-red-400 transition-all duration-200 ease-linear hover:text-red-300'>
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
export default UserTable;
