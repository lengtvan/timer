export const formatTime = (time) => {
  const getSeconds = (time) => {
    return ("00" + (time % 60).toString()).slice(-2);
  };
  const getMinutes = (time) => {
    return ("00" + Math.floor(time / 60).toString()).slice(-2);
  };
  const getHours = (time) => {
    return ("00" + Math.floor(time / 3600).toString()).slice(-2);
  };
  return `${getHours(time)} : ${getMinutes(time)} : ${getSeconds(time)}`;
};
//01, 02,3  10 slice(-2)
