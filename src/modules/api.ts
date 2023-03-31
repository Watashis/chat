import { connect, Socket } from 'socket.io-client'
import { IMessage } from './api.types';
type Message = {
    type: string
    data: any
}


class Api {
    socket: Socket;
    _userName: string = "";
    _userId: string = "";
    addMessage?: Function = undefined;

    constructor() {
        this.socket = connect("http://192.168.1.23:4000")
        this.socket.on('messageResponse', (data) => {
            if (data.type == 'setId') {
                this._userId = data.id
            }
            if (data.type == 'message') {
                if (this.addMessage != null) {
                    let msg:IMessage = {
                        id:data.id,
                        text:data.text,
                        date:"18:00",
                        type:'text'
                    }
                    if(data.userId!=this._userId){
                        msg.forme=true;
                        msg.from=data.user;
                    }
                    this.addMessage(msg)
                }
            }
            console.log(data)
        })
    }
    check() {
        console.log(this._userName)
    }
    setUserName(name: string) {
        this._userName = name;
        let msg: Message = {
            type: "setUserName",
            data: name
        }
        this.socket.send(msg)
    }
    sendMessage(text: string) {
        let msg: Message = {
            type: "message",
            data: text
        }
        this.socket.send(msg)
    }
}
export default Api