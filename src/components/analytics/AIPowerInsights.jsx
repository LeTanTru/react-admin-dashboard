import { INSIGHTS } from '@/constants';
import { motion } from 'framer-motion';

const AIPowerInsights = () => {
  return (
    <motion.div
      className='bg-opacity-50 rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg backdrop-blur-lg backdrop-filter'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      <h2 className='mb-4 text-xl font-semibold text-gray-100'>
        AI-Powered Insights
      </h2>
      <div className='space-y-4'>
        {INSIGHTS.map((item, index) => (
          <div key={index} className='flex items-center space-x-3'>
            <div className={`rounded-full p-2 ${item.color} bg-opacity-20`}>
              <item.icon className={`size-6 ${item.color}`} />
            </div>
            <p className='leading-normal text-gray-300'>{item.insight}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default AIPowerInsights;
