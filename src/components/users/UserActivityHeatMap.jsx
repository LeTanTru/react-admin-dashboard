import { USER_ACTIVITY_HEATMAP_DATA } from '@/constants';
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

const UserActivityHeatMap = () => {
  return (
    <motion.div
      className='rounded-xl border border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md'
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className='mb-4 text-lg font-medium text-gray-100'>Users Activity</h2>
      <div className='h-[300px] w-full'>
        <ResponsiveContainer>
          <BarChart data={USER_ACTIVITY_HEATMAP_DATA}>
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
            <Legend />
            <Bar dataKey={'0-4'} stackId={'a'} fill='#6366f1' />
            <Bar dataKey={'4-8'} stackId={'a'} fill='#8b5cf6' />
            <Bar dataKey={'8-12'} stackId={'a'} fill='#ec4899' />
            <Bar dataKey={'12-16'} stackId={'a'} fill='#10b981' />
            <Bar dataKey={'16-20'} stackId={'a'} fill='#f59e0b' />
            <Bar dataKey={'20-24'} stackId={'a'} fill='#3b82f6' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default UserActivityHeatMap;
