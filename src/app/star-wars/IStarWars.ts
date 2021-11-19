export interface IStarWars {
  count: number;
  results: [
    {
      name: string;
      height: number;
      mass: number;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      homeworld: string;
      films: string[];
      species: string[];
      vehicles: string[];
      starships: string[];
      created: string;
      edited: string;
      url: string;
    }
  ];
}

export interface IStarWarDetail {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
