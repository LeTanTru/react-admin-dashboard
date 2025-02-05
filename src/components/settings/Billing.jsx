import { SettingsSection } from '@/components/settings';
import { CreditCard, SendHorizontal } from 'lucide-react';

const Billing = () => {
  return (
    <SettingsSection title={'Billing'} icon={CreditCard}>
      <div className='mb-5 flex items-center justify-between'>
        <p className='flex items-center gap-2 text-gray-400'>
          <SendHorizontal />
          Current plan
        </p>
        <p className='font-semibold text-indigo-500'>Pro</p>
      </div>
      <button className='mt-5 ml-auto w-full cursor-pointer rounded bg-indigo-600 px-4 py-4 font-semibold text-white transition-all duration-200 ease-linear hover:bg-indigo-700 sm:mt-0 sm:w-auto'>
        Upgrade plan
      </button>
    </SettingsSection>
  );
};
export default Billing;
