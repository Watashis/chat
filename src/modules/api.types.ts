interface IMessage{
    id:number,
    text?:string,
    type:string,
    date:string,
    from?:string,
    forme?:boolean
}
export type {IMessage}