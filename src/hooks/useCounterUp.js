import { useEffect, useState } from 'react';

const useCounterUp = (value, isPercentage = false) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const increment = isPercentage
      ? value >= 50
        ? 2
        : value >= 30
          ? 1
          : value >= 17
            ? 0.5
            : 0.2
      : Math.ceil(value / 50);

    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= value) {
        clearInterval(interval);
        setCurrentValue(value);
      } else {
        setCurrentValue(startValue);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [value, isPercentage]);

  return [currentValue];
};

export default useCounterUp;
