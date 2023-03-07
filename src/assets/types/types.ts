export type cardItem = {
    id?: number,
    image: string,
    title: string,
    price: number,
    types: number[], 
    size: number[]
}

export interface ICard {
    cardData: cardItem[]
}