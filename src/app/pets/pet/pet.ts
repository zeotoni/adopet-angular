export interface Pet {
  name: string;
  age: string;
  imgDescription: string;
  image: string;
  port: string;
  characteristics: string;
  adress: string;
}


export type Pets = Array<Pet>;
