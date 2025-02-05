import { PRODUCT_PERFORMANCE_DATA } from '@/constants';
import { motion } from 'framer-motion';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const ProductPerformance = () => {
  return (
    <motion.div
      className='bg-opacity-50 rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg backdrop-blur-lg backdrop-filter'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className='mb-4 text-xl font-semibold text-gray-100'>
        Product Performance
      </h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={PRODUCT_PERFORMANCE_DATA}>
            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
            <XAxis dataKey='name' stroke='#9CA3AF' />
            <YAxis stroke='#9CA3AF' />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563'
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Bar dataKey='sales' fill='#8B5CF6' />
            <Bar dataKey='revenue' fill='#10B981' />
            <Bar dataKey='profit' fill='#F59E0B' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default ProductPerformance;
