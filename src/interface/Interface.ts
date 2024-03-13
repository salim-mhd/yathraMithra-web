export interface blog {
    _id: string;
    heading: string;
    content: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  }

export interface packageInterface {
    _id: string;
    heading:string,
    image:string,
    description:string,
    price: string,
    orginalPrice : string,
    roomRating : number,
    day : number,
    night : number,
    foodTime : number,
    city: string,
    state: string,
    createdAt: string;
    updatedAt: string;
}