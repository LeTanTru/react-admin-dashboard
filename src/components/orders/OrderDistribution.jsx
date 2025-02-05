import { ORDER_STATUS_DATA } from '@/constants';
import { motion } from 'framer-motion';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FED766', '#2AB7CA'];

const OrderDistribution = () => {
  return (
    <motion.div
      className='mt-5 rounded-xl border border-solid border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='mb-4 text-lg font-medium text-gray-100'>
        Order Status Distribution
      </h2>
      <div className='h-80'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <PieChart>
            <Pie
              data={ORDER_STATUS_DATA}
              cx={'50%'}
              cy={'50%'}
              labelLine={false}
              outerRadius={80}
              fill='#8884d8'
              dataKey={'value'}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {ORDER_STATUS_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563'
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Legend spacing={2} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default OrderDistribution;
