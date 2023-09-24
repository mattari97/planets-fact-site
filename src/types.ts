export interface PlanetData {
  name: string;
  slug: string;
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
    planet: string;
    internal: string;
    geology: string;
  };
}

export type Tabs = 'overview' | 'structure' | 'surface';
