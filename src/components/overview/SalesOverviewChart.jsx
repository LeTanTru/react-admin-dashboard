import { SALES_DATA } from '@/constants';
import { motion } from 'framer-motion';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const SalesOverviewChart = () => {
  return (
    <motion.div
      className='rounded-xl border border-solid border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='mb-4 text-lg font-medium text-gray-100'>Sales Overview</h2>
      <div className='h-80'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChart data={SALES_DATA}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4b5563' />
            <XAxis dataKey={'name'} stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563'
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Line
              type={'monotone'}
              dataKey={'sales'}
              stroke='#6366f1'
              strokeWidth={3}
              dot={{ fill: '#6366f1', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesOverviewChart;
