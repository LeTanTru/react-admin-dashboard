import { SALES_BY_CATEGORY_DATA } from '@/constants';
import { motion } from 'framer-motion';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

const SalesByCategoryChart = () => {
  return (
    <motion.div
      className='mt-5 rounded-xl border border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-md'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className='mb-4 text-xl font-semibold text-gray-100'>
        Sales by Category
      </h2>
      <div className='h-[300px] w-full'>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={SALES_BY_CATEGORY_DATA}
              cx={'50%'}
              cy={'50%'}
              outerRadius={80}
              fill='#8884d8'
              dataKey={'value'}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {SALES_BY_CATEGORY_DATA.map((entry, index) => (
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
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesByCategoryChart;
