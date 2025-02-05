import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftToLine, Menu } from 'lucide-react';
import { SIDEBAR_ITEMS } from '@/constants';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.div
      className={`relative z-10 flex-shrink-0 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className='bg-opacity-50 flex h-full flex-col border-r border-gray-700 bg-gray-800 p-4 backdrop-blur-md'>
        {!isSidebarOpen ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='ml-auto max-w-fit cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-700'
          >
            <Menu size={24} />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='ml-auto max-w-fit cursor-pointer rounded-full p-2 transition-colors hover:bg-gray-700'
          >
            <ArrowLeftToLine size={24} />
          </motion.button>
        )}

        <nav className='mt-8 flex-grow'>
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className='mb-2 flex items-center rounded-lg p-4 text-sm font-medium transition-colors hover:bg-gray-700'>
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: '20px' }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className='ml-4 whitespace-nowrap'
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};
export default Sidebar;
