import { SettingsSection } from '@/components/settings';
import { User } from 'lucide-react';

const Profile = () => {
  return (
    <SettingsSection title={'Profile'} icon={User}>
      <div className='mb-4 flex flex-col items-center sm:flex-row'>
        <img
          className='mr-0 h-20 w-20 rounded-full object-cover md:mr-4!'
          src='https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png'
        />
        <div className='text-center md:text-left'>
          <h3 className='text-lg font-semibold text-gray-100'>Dopamine</h3>
          <p className='text-gray-400'>dopamine@hihi.com</p>
        </div>

        <button className='mt-5 ml-auto w-full cursor-pointer rounded bg-indigo-600 px-4 py-4 font-semibold text-white transition-all duration-200 ease-linear hover:bg-indigo-700 sm:mt-0 sm:w-auto'>
          Edit Profile
        </button>
      </div>
    </SettingsSection>
  );
};
export default Profile;
