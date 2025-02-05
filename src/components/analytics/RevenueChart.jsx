import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { REVENUE_DATA } from '@/constants';

const RevenueChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('This Month');
  return (
    <motion.div
      className='mb-8 rounded-xl border border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-lg'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-gray-100'>
          Revenue vs Target
        </h2>
        <select
          className='cursor-pointer rounded-md bg-gray-700 px-3 py-1 text-white transition-all duration-200 ease-linear outline-none focus:ring-2 focus:ring-blue-500 focus:outline-none'
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>
      <div className='h-[400px] w-full'>
        <ResponsiveContainer>
          <AreaChart data={REVENUE_DATA}>
            <CartesianGrid strokeDasharray={'3 3'} stroke='#374151' />
            <XAxis dataKey={'month'} stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563'
              }}
              itemStyle={{ color: '#e6e7eb' }}
            />
            <Legend />
            <Area
              type='monotone'
              dataKey={'revenue'}
              stroke='#8b5cf6'
              fill='#8b5cf6'
              fillOpacity={0.3}
            />
            <Area
              type='monotone'
              dataKey={'target'}
              stroke='#10b981'
              fill='#10b981'
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default RevenueChart;
