export const getHours = timer => {
  return `0${Math.floor(timer / 3600)}`.slice(-2);
}

export const getMinutes = timer => {
  const minutes = `${Math.floor(timer / 60)}`;
  return`0${minutes % 60}`.slice(-2);
}

export const getSeconds = timer => {
  return `0${(timer % 60)}`.slice(-2);
}