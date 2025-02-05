import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';

const DangerZone = () => {
  return (
    <motion.div
      className='mb-8 rounded-xl border border-red-700 bg-red-900/50 p-6 shadow-lg backdrop-blur-lg'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className='mb-4 flex items-center'>
        <Trash2 size={24} className='mr-3 text-red-400' />
        <h2 className='text-xl font-semibold text-gray-100'>Danger Zone</h2>
      </div>
      <p className='mb-4 leading-relaxed text-gray-200 md:leading-none'>
        Deleting your account will remove all your data and cannot be undone.
      </p>
      <button className='mx-auto block rounded-lg bg-red-600 px-4 py-4 font-semibold text-gray-100 transition-colors duration-300 ease-linear hover:bg-red-700 md:inline'>
        Delete Account
      </button>
    </motion.div>
  );
};
export default DangerZone;
