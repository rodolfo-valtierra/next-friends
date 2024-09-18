export interface IFriend {
    id:number, 
    start: string
}
export interface IUser {
    id: number,
    name: string,
    lastName: string,
    sex: string,
    age: number,
    address: string,
    hobbies: string,
    work: string,
    friends: IFriend[]   
  }