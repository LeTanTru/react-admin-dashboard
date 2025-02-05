import { MONTHLY_SALE_DATA } from '@/constants';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const SalesOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('This Month');
  return (
    <motion.div
      className='mt-5 rounded-xl border border-solid border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-gray-1000 text-xl font-semibold'>Sale Overview</h2>
        <select
          className='cursor-pointer rounded-lg border border-none bg-gray-700 px-3 py-1 text-white transition-all duration-200 ease-linear focus:ring-2 focus:ring-blue-500 focus:outline-none'
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>
      <div className='h-80 w-full'>
        <ResponsiveContainer>
          <AreaChart data={MONTHLY_SALE_DATA}>
            <CartesianGrid strokeDasharray={'3 3'} stroke='#374151' />
            <XAxis dataKey={'month'} stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
                backgroundColor: '#rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563'
              }}
            />
            <Area
              type='monotone'
              dataKey={'sales'}
              stroke='#8b5cf6'
              fill='#8b5cf6'
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesOverviewChart;
