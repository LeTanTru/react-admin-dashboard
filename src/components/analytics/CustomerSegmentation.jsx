import { CUSTOMER_SEGMENTATION_DATA } from '@/constants';
import { motion } from 'framer-motion';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const CustomerSegmentation = () => {
  return (
    <motion.div
      className='bg-opacity-50 rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg backdrop-blur-lg backdrop-filter'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className='mb-4 text-xl font-semibold text-gray-100'>
        Customer Segmentation
      </h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <RadarChart
            cx={'50%'}
            cy={'50%'}
            outerRadius={'80%'}
            data={CUSTOMER_SEGMENTATION_DATA}
          >
            <PolarGrid stroke='#374151' />
            <PolarAngleAxis dataKey='subject' stroke='#9ca3af' />
            <Radar
              name='Segment A'
              dataKey='A'
              stroke='#8b5cf6'
              fill='#8b5cf6'
              fillOpacity={0.6}
            />
            <Radar
              name='Segment B'
              dataKey='B'
              stroke='#10B981'
              fill='#10B981'
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(31,41,55,0.8)',
                borderColor: '#4b5563'
              }}
              itemStyle={{ color: '#e5e7eb' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default CustomerSegmentation;
