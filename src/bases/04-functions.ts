function salutate2(nomen: string): string {

   return `Hola ${ nomen }`;
}

const salutate = (nomen: string): string => `Hola ${ nomen }`;

// console.log(salutate('Francisco'));

const obtineUsoris = ( uid: string ): { uid: string, nomen: string }=> ({
        uid,
        nomen: 'Tony001'
    })

// console.log(obtineUsoris('XYZ-456'));

const heroum = [
    {
        id: 1,
        nomen:'Batman'
    },

    {
        id: 2,
        nomen:'Superman',
        facultatem: 'Super fuerza'
    }
];

const heros = heroum.find( item => item.id === 1 )

console.log(heros?.nomen);
