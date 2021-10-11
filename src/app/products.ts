export interface MyProduct {
    title : string,
    imgPath: string,
    altTxt: string,
    description: string,
    price: string,
    reviews: Total
}
interface Total {
    count: number
}