import {
  AIPowerInsights,
  ChannelPerformance,
  CustomerSegmentation,
  OverviewCards,
  ProductPerformance,
  RevenueChart,
  UserRetention
} from '@/components/analytics';
import { Header } from '@/components/common';

const AnalyticsPage = () => {
  return (
    <div className='relative z-10 flex-1 overflow-auto bg-gray-900'>
      <Header title={'Analytics'} />

      <main className='mx-auto max-w-7xl px-4 py-6 lg:px-8'>
        <OverviewCards />
        <RevenueChart />

        <div className='mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>
        <AIPowerInsights />
      </main>
    </div>
  );
};
export default AnalyticsPage;
