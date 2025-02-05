import { USER_DEMO_GRAPHICS_DATA } from '@/constants';
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

const UserDemoGraphicsChart = () => {
  return (
    <motion.div
      className='bg-opacity-50 rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg backdrop-blur-md lg:col-span-2'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className='mb-4 text-xl font-semibold text-gray-100'>
        User Demographics
      </h2>
      <div className='h-[300px] w-full'>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={USER_DEMO_GRAPHICS_DATA}
              cx={'50%'}
              cy={'50%'}
              outerRadius={100}
              fill='#8884d8'
              dataKey={'value'}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {USER_DEMO_GRAPHICS_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563'
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default UserDemoGraphicsChart;
