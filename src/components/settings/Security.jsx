import { SettingsSection, ToggleSwitch } from '@/components/settings';
import { Fingerprint, Lock } from 'lucide-react';
import { useState } from 'react';

const Security = () => {
  const [isTwoFactorAuthEnabled, setIsTwoFactorAuthEnabled] = useState(false);
  return (
    <SettingsSection title='Security' icon={Lock}>
      <ToggleSwitch
        icon={Fingerprint}
        label='Two-factor authentication'
        isOn={isTwoFactorAuthEnabled}
        onToggle={() => setIsTwoFactorAuthEnabled(!isTwoFactorAuthEnabled)}
      />
      <button className='mt-5 ml-auto w-full cursor-pointer rounded bg-indigo-600 px-4 py-4 font-semibold text-white transition-all duration-200 ease-linear hover:bg-indigo-700 sm:mt-0 sm:w-auto'>
        Change password
      </button>
    </SettingsSection>
  );
};
export default Security;
