const ToggleSwitch = ({ label, isOn, icon: Icon, onToggle, isLast }) => {
  return (
    <div
      className={`flex items-center justify-between ${isLast ? '' : 'mb-4'}`}
    >
      <span className='flex items-center text-gray-300'>
        <Icon size={24} className='mr-2' />
        {label}
      </span>
      <button
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isOn ? 'bg-indigo-600' : 'bg-gray-600'}`}
        onClick={() => onToggle()}
      >
        <span
          className={`inline-block size-4 transform rounded-full bg-white transition-transform ${isOn ? 'translate-x-6' : 'translate-x-1'}`}
        ></span>
      </button>
    </div>
  );
};
export default ToggleSwitch;
