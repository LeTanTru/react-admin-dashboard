import { Header, StatCard } from '@/components/common';
import {
  CategoryDistributionChart,
  SalesChannelChart,
  SalesOverviewChart
} from '@/components/overview';
import { OVERVIEW_STATISTICS_ITEMS } from '@/constants';
import { motion } from 'framer-motion';

const OverviewPage = () => {
  return (
    <div className='relative z-10 flex-1 overflow-auto'>
      <Header title='Overview' />
      <main className='mx-auto max-w-7xl px-4 py-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {OVERVIEW_STATISTICS_ITEMS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <StatCard
                name={item.name}
                icon={item.icon}
                value={item.value}
                color={item.color}
                isPercentage={item.isPercentage}
                isCurrency={item.isCurrency}
              />
            </motion.div>
          ))}
        </div>
        <div className='mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};
export default OverviewPage;
