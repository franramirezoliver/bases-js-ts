
export interface Heros {
    id: number;
    nomen: string;
    dominus: Dominus;
}

export type Dominus = 'DC' | 'Marvel'; 

const heroum = [
    {
        id: 1,
        nomen: 'Batman',
        dominus: 'DC'
    },
    {
        id: 2,
        nomen: 'Spiderman',
        dominus: 'Marvel'
    },
    {
        id: 3,
        nomen: 'Superman',
        dominus: 'DC'
    },
    {
        id: 4,
        nomen: 'Flash',
        dominus: 'DC'
    },
    {
        id: 5,
        nomen: 'Wolverine',
        dominus: 'Marvel'
    },
  ];

export const dominis = ['DC', 'Marvel'];

export default heroum; 