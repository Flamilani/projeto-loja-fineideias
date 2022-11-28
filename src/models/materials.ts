type MaterialType = 'camiseta' | 'caneca' | 'chaveiro';

type Material = {
    type: MaterialType,
    image: string;
    name: string;
    color: string;
}

const data: Material[] = [
    {
        type: 'camiseta',
        image: 'camisetas/01.png',
        name: 'Camiseta Mercado da Praça',
        color: 'vermelho'
    },
    {
        type: 'camiseta',
        image: 'camisetas/02.jpg',
        name: 'Camiseta Solo Gratia',
        color: 'branca'
    },
    {
        type: 'camiseta',
        image: 'camisetas/03.jpg',
        name: 'Camiseta Baby 1 ano',
        color: 'branca'
    },
    {
        type: 'camiseta',
        image: 'camisetas/04.jpg',
        name: 'Camiseta Baby',
        color: 'Branca'
    },
    {
        type: 'camiseta',
        image: 'camisetas/05.jpg',
        name: 'Camiseta',
        color: 'Azul Marinho'
    },
    {
        type: 'camiseta',
        image: 'camisetas/06.jpg',
        name: 'Camiseta',
        color: 'Branca'
    },
    {
        type: 'camiseta',
        image: 'camisetas/07.jpg',
        name: 'Camiseta',
        color: 'Branca'
    },
    {
        type: 'camiseta',
        image: 'camisetas/08.jpg',
        name: 'Camiseta',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/01.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/02.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/03.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/04.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/05.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/06.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/07.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/08.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/09.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/10.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/11.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'caneca',
        image: 'canecas/12.jpg',
        name: 'Caneca',
        color: 'Branca'
    },
    {
        type: 'chaveiro',
        image: 'chaveiros/01.jpg',
        name: 'Chaveiro',
        color: 'Branca'
    },
    {
        type: 'chaveiro',
        image: 'chaveiros/02.jpg',
        name: 'Chaveiro',
        color: 'Branca'
    },
    {
        type: 'chaveiro',
        image: 'chaveiros/03.jpg',
        name: 'Chaveiro',
        color: 'Branca'
    },
];

export const Material = {
    getAll: () => {
        return data;
    },

    getFromType: (type: MaterialType): Material[] => {
        return data.filter((item) => {
            if (item.type === type) {
                return true;
            } else {
                return false;
            }
        });
    },

    getFromName: (name: string): Material[] => {
        return data.filter((item) => {
            if (item.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
                return true;
            } else {
                return false;
            }
        })
    }
};