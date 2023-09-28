export interface PlanetData {
  name: string;
  color: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  surface: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  scale: string;
  images: {
    overview: string;
    structure: string;
    surface: string;
  };
}

export type Tabs = 'overview' | 'structure' | 'surface';

export interface Store {
  data: PlanetData;
  updateData: (name: string) => void;
}
