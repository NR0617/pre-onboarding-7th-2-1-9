export const isNew = (createdAt) => {
  const today = new Date();
  const convertCreatedAt = new Date(createdAt);
  const timeDiff = (today - convertCreatedAt) / (60 * 60 * 1000);
  if (timeDiff >= -24 && timeDiff <= 24) {
    return true;
  } else {
    return false;
  }
};