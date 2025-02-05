import { DAILY_ORDERS_DATA, DAILY_SALES_DATA } from '@/constants';
import { motion } from 'framer-motion';
import { BarChart } from 'lucide-react';
import {
  Bar,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const DailyOrders = () => {
  return (
    <motion.div
      className='mt-5 rounded-xl border border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='mb-4 text-xl font-semibold text-gray-100'>Daily Orders</h2>
      <div className='h-80'>
        <ResponsiveContainer>
          <LineChart data={DAILY_ORDERS_DATA}>
            <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
            <XAxis dataKey='date' stroke='#9CA3AF' />
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
              dataKey='orders'
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
export default DailyOrders;
