import { useCounterUp } from '@/hooks';
import { formatValue } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const OverviewCard = ({ item, index }) => {
  const [currentValue] = useCounterUp(item.value, item.isPercentage);
  return (
    <motion.div
      key={item.name}
      className='rounded-lg border border-solid border-gray-700 bg-gray-800/50 p-6 shadow-lg backdrop-blur-lg'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className='flex items-center justify-between'>
        <>
          <h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
          <p className='mt-1 text-lg font-semibold text-gray-100'>
            {item.isCurrency && '$'}
            {formatValue(currentValue, item.isPercentage)}
            {item.isPercentage && '%'}
          </p>
        </>
        <div
          className={`rounded-full p-3 ${item.change >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'}`}
        >
          <item.icon
            className={`size-6 ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}
          />
        </div>
      </div>
      <div
        className={`mt-2 flex items-center ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}
      >
        {item.change >= 0 ? (
          <ArrowUpRight size={20} />
        ) : (
          <ArrowDownRight size={20} />
        )}
        <span className='ml-1 text-sm font-medium'>
          {Math.abs(item.change)}%
        </span>
        <span className='ml-2 text-sm text-gray-400'>vs last period</span>
      </div>
    </motion.div>
  );
};
export default OverviewCard;
