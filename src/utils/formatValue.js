const formatValue = (value, isPercentage) => {
  if (isPercentage) {
    return value.toFixed(1);
  } else {
    return value.toLocaleString();
  }
};

export default formatValue;
