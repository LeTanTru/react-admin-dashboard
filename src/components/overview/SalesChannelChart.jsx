import { COLORS, SALES_CHANNEL_DATA } from '@/constants';
import { motion } from 'framer-motion';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const SalesChannelChart = () => {
  return (
    <motion.div
      className='rounded-xl border border-solid border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md lg:col-span-2'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className='mb-4 text-lg font-medium text-gray-100'>
        Sales by Channel
      </h2>
      <div className='h-80'>
        <ResponsiveContainer>
          <BarChart data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray={'3 3'} stroke='#4b5563' />
            <XAxis dataKey='name' stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563'
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Legend />
            <Bar dataKey={'value'} fill={'#8884d8'}>
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesChannelChart;
