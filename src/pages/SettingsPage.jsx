import { Header } from '@/components/common';
import {
  Billing,
  ConnectedAccounts,
  DangerZone,
  Notifications,
  Profile,
  Security
} from '@/components/settings';

const SettingsPage = () => {
  return (
    <div className='relative z-10 flex-1 overflow-auto bg-gray-900'>
      <Header title={'Settings'} />

      <main className='mx-auto max-w-4xl px-4 py-6 lg:px-8'>
        <Profile />
        <Notifications />
        <Security />
        <Billing />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  );
};
export default SettingsPage;
