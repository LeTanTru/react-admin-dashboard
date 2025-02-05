const normalizeStatisticsItems = (items) => {
  return items.map((item) => {
    let rawValue = item.value.toString();
    let isPercentage = rawValue.includes('%');
    let isCurrency = rawValue.includes('$');

    let normalizedValue = parseFloat(
      rawValue.replace(/[$,%]/g, '').replace(/,/g, '')
    );

    return {
      ...item,
      value: normalizedValue,
      isPercentage,
      isCurrency
    };
  });
};

export default normalizeStatisticsItems;
