import { Header, StatCard } from '@/components/common';
import { CategoryDistributionChart } from '@/components/overview';
import { ProductTable, SalesTrendChart } from '@/components/products';
import { PRODUCT_STATISTICS_ITEMS } from '@/constants';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  return (
    <div className='relative z-10 flex-1 overflow-auto'>
      <Header title='Products' />
      <main className='mx-auto max-w-7xl px-4 py-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {PRODUCT_STATISTICS_ITEMS.map((item, index) => (
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
        <ProductTable />
        <div className='mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};
export default ProductsPage;
