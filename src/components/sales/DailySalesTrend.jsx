import { DAILY_SALES_DATA } from '@/constants';
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

const DailySalesTrend = () => {
  return (
    <motion.div
      className='mt-5 rounded-xl border border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='mb-4 text-xl font-semibold text-gray-100'>
        Daily Sales Trend
      </h2>
      <div className='h-[300px] w-full'>
        <ResponsiveContainer>
          <BarChart data={DAILY_SALES_DATA}>
            <CartesianGrid strokeDasharray={'3 3'} stroke='#374151' />
            <XAxis dataKey={'name'} stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563'
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Bar dataKey={'sales'} fill='#10b981' />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default DailySalesTrend;
