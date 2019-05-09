export const kelvinToCelsius = temp => Math.trunc(temp - 273.15);

export const averageTemp = array => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
};
