export const parseYear = (date: string) => {
  const res = new Date(date).getFullYear();
  if (!isNaN(res)) {
    return res;
  }
  return date.split(',')[1].trim();
};
