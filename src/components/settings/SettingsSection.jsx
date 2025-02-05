import { motion } from 'framer-motion';

const SettingsSection = ({ icon: Icon, title, children, className = '' }) => {
  return (
    <motion.div
      className={`bg-opacity-50 mb-8 rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg backdrop-blur-lg backdrop-filter ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='mb-4 flex items-center'>
        <Icon className='mr-2 text-indigo-400' size={24} />
        <h2 className='text-xl font-semibold text-gray-100'>{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};
export default SettingsSection;
