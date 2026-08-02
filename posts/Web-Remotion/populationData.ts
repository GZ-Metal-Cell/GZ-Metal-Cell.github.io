export interface PopulationData {
  year: number;
  population: number;
}

export const populationData: PopulationData[] = [
  { year: 2014, population: 1_371_860_000 },
  { year: 2015, population: 1_379_860_000 },
  { year: 2016, population: 1_387_790_000 },
  { year: 2017, population: 1_396_215_000 },
  { year: 2018, population: 1_402_760_000 },
  { year: 2019, population: 1_407_745_000 },
  { year: 2020, population: 1_411_100_000 },
  { year: 2021, population: 1_412_360_000 },
  { year: 2022, population: 1_412_175_000 },
  { year: 2023, population: 1_410_710_000 },
  { year: 2024, population: 1_408_975_000 },
  { year: 2025, population: 1_406_585_000 },
];

export const maxPopulation = Math.max(...populationData.map((d) => d.population));
export const minPopulation = Math.min(...populationData.map((d) => d.population));
