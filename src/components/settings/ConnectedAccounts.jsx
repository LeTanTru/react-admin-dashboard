import { SettingsSection } from '@/components/settings';
import { CONNECTED_ACCOUNTS } from '@/constants';
import { CircleHelp, PlusIcon } from 'lucide-react';
import { useState } from 'react';

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] =
    useState(CONNECTED_ACCOUNTS);

  const handleConnectAccount = (id) => {
    const updatedAccounts = connectedAccounts.map((account) => {
      if (account.id === id) {
        return {
          ...account,
          connected: !account.connected
        };
      }
      return account;
    });
    setConnectedAccounts(updatedAccounts);
  };

  return (
    <SettingsSection title={'Connected Account'} icon={CircleHelp}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className='mb-2 flex items-center justify-between py-3'
        >
          <div className='flex items-center gap-1'>
            <img
              src={account.icon}
              alt={account.name}
              className='mr-2 size-6 rounded-full object-cover'
            />
            <span className='text-gray-300'>{account.name}</span>
          </div>
          <button
            className={`rounded px-4 py-2 transition-all duration-200 ease-linear ${account.connected ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'}`}
            onClick={() => handleConnectAccount(account.id)}
          >
            {account.connected ? 'Connected' : 'Connect'}
          </button>
        </div>
      ))}
      <button className='mt-4 flex cursor-pointer items-center gap-2 text-indigo-400 transition-all duration-200 ease-linear hover:text-indigo-300'>
        <PlusIcon size={24} />
        <span>Add Account</span>
      </button>
    </SettingsSection>
  );
};
export default ConnectedAccounts;
