export const formatDate = (dateObj) => {
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatDay = (dateObj) => {
  return dateObj.toLocaleDateString("en-US", {
    weekday: "long",
  });
};
