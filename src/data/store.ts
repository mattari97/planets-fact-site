import { create } from 'zustand';
import { Store } from '../types';
import json from './data.json';

function getPlanetData(name: string) {
  for (let i = 0; i < json.length; i++) {
    const data = json[i];
    if (data.name === name) return data;
  }
  return json[0];
}

const useStore = create<Store>()((set) => ({
  data: json[0],
  updateData: (name: string) => set(() => ({ data: getPlanetData(name) })),
}));

export default useStore;
