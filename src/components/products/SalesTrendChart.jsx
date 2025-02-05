import { SALES_TREND_DATA } from '@/constants';
import { motion } from 'framer-motion';
import {
  LineChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line
} from 'recharts';

const SalesTrendChart = () => {
  return (
    <motion.div
      className='rounded-xl border border-solid border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className='mb-4 text-lg font-medium text-gray-100'>
        Sales by Channel
      </h2>
      <div className='h-80'>
        <ResponsiveContainer>
          <LineChart data={SALES_TREND_DATA}>
            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
            <XAxis dataKey='month' stroke='#9CA3AF' />
            <YAxis stroke='#9CA3AF' />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4B5563'
              }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Line
              type='monotone'
              dataKey='sales'
              stroke='#8B5CF6'
              strokeWidth={2}
              dot={{ fill: '#6366f1', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesTrendChart;
