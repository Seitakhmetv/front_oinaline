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

export interface Genre {
  title: string;
}

export interface Platforms {
  title: string;
}

export interface Types {
  title: string;
}

export interface Publishers {
  title: string;
}

export interface Screenshots {
  url: string;
}

export interface AuthToken{
  token: string;
}