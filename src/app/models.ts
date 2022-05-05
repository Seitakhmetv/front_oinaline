export interface Game {
  id: string;
  // background_image: string;
  title: string;
  // website: string;
  description: string;
  metacritic: number;
  types: Array<Types>;
  genres: Array<Genre>;
  platforms: Array<Platforms>;
  publishers: Array<Publishers>;
  screenshots: Array<Screenshots>;
  trailer: string;
} 

// export interface APIResponse<T> {
//     results: Array<T>;
// }

interface Genre {
  title: string;
}

interface Platforms {
  title: string;
}

interface Types {
  title: string;
}

interface Publishers {
  title: string;
}

interface Screenshots {
  url: string;
}
