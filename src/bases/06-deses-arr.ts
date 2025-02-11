
const characters: string[] = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

const [g, v, t, g2, g3 = 'Yamoshi'] = characters;

console.log({g, v, t, g2, g3});

const returnArray = () => {

    return [123, 'ABC'] as const;
}

const [ numerus, litterae ] = returnArray();

console.log( numerus * 2, litterae.toUpperCase() );