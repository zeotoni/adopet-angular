export interface Pet {
  id: number;
  petNome: string;
  petIade: string;
  alt: string;
  img: string;
  petPorte: string;
  petCarac: string;
  petAdress: string;
}


export type Pets = Array<Pet>;
