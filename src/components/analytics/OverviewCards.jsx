import { OverviewCard } from '@/components/analytics';
import { OVERVIEW_DATA } from '@/constants';

const OverviewCards = () => {
  return (
    <div className='mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
      {OVERVIEW_DATA.map((item, index) => (
        <OverviewCard key={item.name} item={item} index={index} />
      ))}
    </div>
  );
};
export default OverviewCards;
