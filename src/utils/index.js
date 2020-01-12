export const getFormattedDateText = (date) => {
  const dateObject = new Date(date);
  const monthName = dateObject.toLocaleString('default', { month: 'short' });
  return `${dateObject.getDate()} ${monthName} ${dateObject.getFullYear()}`;
};