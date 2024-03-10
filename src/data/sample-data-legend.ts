interface ILegendItem {
  pt?: string;
  city?: string;
  average: string;
  total: number;
  percentile100: number;
  percentile89: number;
  percentile69: number;
}

interface ILegend {
  [key: string]: ILegendItem;
}

const legend: ILegend  = {
  all: {
    pt: "Semua AP",
    average: "34%",
      total: 10,
      percentile100: 4,
      percentile89: 8,
      percentile69: 20,
  },
  mpu: {
    city: 'pandeglang',
      average: "34%",
      total: 10,
      percentile100: 4,
      percentile89: 8,
      percentile69: 20,
  },
  lan: {
    city: 'banyuwangi',
      average: "24%",
      total: 20,
      percentile100: 2,
      percentile89: 28,
      percentile69: 22,
  },
  ksm: {
    city: 'garut',
      average: "70%",
      total: 30,
      percentile100: 24,
      percentile89: 18,
      percentile69: 25,
  },
};

export default legend