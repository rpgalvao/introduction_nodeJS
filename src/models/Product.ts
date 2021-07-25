type Product = {
    title: string,
    price: number,
};

const data: Product[] = [
    {title: 'Produto X', price: 10.00},
    {title: 'Produto Y', price: 15.00},
    {title: 'Produto Z', price: 20.00},
    {title: 'Produto W', price: 30.99}
];

const frases: string[] = [
    'Tenha fé, jamais duvide',
    'Quem amamos voltará',
    'Para sempre viveremos, sob as bênçãos de Jeová'
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    }
};

export const Frases = {
    getAll: (): string[] => {
        return frases;
    }
};