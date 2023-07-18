//  types for the dataset of Gama
type DataPointGama = {
  Alcohol: string;
  Ash: number;
  Hue: number;
  Magnesium: number;
  Gamma?: number;
};

//  types for the dataset of Flavanoids
type DataPoint = {
  Alcohol: string;
  Flavanoids: number;
};

type DatasetGama = DataPointGama[];

type Dataset = DataPoint[];

// Function to calculate the mean of an array of numbers
const calculateMean = (numbers: number[]): number => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

// Function to calculate the median of an array of numbers
const calculateMedian = (numbers: number[]): number => {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNumbers.length / 2);
  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  } else {
    return sortedNumbers[middleIndex];
  }
};

// Function to calculate the mode of an array of numbers
const calculateMode = (numbers: number[]): number => {
  const countMap: { [key: number]: number } = {};
  let maxCount = 0;
  let mode = NaN;

  numbers.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;

    if (countMap[num] > maxCount) {
      maxCount = countMap[num];
      mode = num;
    }
  });

  return mode;
};

export const calculateClassWiseMeasures = (
  dataset: Dataset
): { [key: string]: any } => {
  const measures: { [key: string]: number[] } = {};

  dataset.forEach((data) => {
    const alcoholClass = data.Alcohol;
    const flavanoidValue = data.Flavanoids;

    if (!measures[alcoholClass]) {
      measures[alcoholClass] = [];
    }

    measures[alcoholClass].push(flavanoidValue);
  });

  const classWiseMeasures: { [key: string]: any } = {};

  Object.keys(measures).forEach((alcoholClass) => {
    const flavanoidValues = measures[alcoholClass];
    const mean = calculateMean(flavanoidValues);
    const median = calculateMedian(flavanoidValues);
    const mode = calculateMode(flavanoidValues);

    classWiseMeasures[alcoholClass] = { mean, median, mode };
  });

  return classWiseMeasures;
};

export const calculateClassWiseGammaMeasures = (
  dataset: DatasetGama
): { [key: string]: any } => {
  dataset.forEach((data) => {
    data.Gamma = (data.Ash * data.Hue) / data.Magnesium;
  });

  const measures: { [key: string]: number[] } = {};

  dataset.forEach((data) => {
    const alcoholClass = data.Alcohol;
    const gammaValue = data.Gamma || 0;

    if (!measures[alcoholClass]) {
      measures[alcoholClass] = [];
    }

    measures[alcoholClass].push(gammaValue);
  });

  const classWiseMeasures: { [key: string]: any } = {};

  Object.keys(measures).forEach((alcoholClass) => {
    const gammaValues = measures[alcoholClass];
    const mean = calculateMean(gammaValues);
    const median = calculateMedian(gammaValues);
    const mode = calculateMode(gammaValues);

    classWiseMeasures[alcoholClass] = { mean, median, mode };
  });

  return classWiseMeasures;
};
