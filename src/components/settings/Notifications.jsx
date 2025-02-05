import { SettingsSection, ToggleSwitch } from '@/components/settings';
import { ArrowUpFromLine, Bell, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    push: false,
    email: false,
    sms: false
  });
  return (
    <SettingsSection title={'Notifications'} icon={Bell}>
      <ToggleSwitch
        label={'Push notifications'}
        isOn={notifications.push}
        icon={ArrowUpFromLine}
        onToggle={() =>
          setNotifications((prev) => ({
            ...prev,
            push: !prev.push
          }))
        }
      />
      <ToggleSwitch
        label={'Email notifications'}
        isOn={notifications.email}
        icon={Mail}
        onToggle={() =>
          setNotifications((prev) => ({
            ...prev,
            email: !prev.email
          }))
        }
      />
      <ToggleSwitch
        label={'SMS notifications'}
        isOn={notifications.sms}
        icon={Send}
        onToggle={() =>
          setNotifications((prev) => ({
            ...prev,
            sms: !prev.sms
          }))
        }
        isLast
      />
    </SettingsSection>
  );
};
export default Notifications;
