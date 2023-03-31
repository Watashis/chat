import style from './message.module.css'
import { IMessage } from '../../modules/api.types'

interface MessageProp {
    message: IMessage
}

function Message(props: MessageProp) {
    let GetContent = () => {
        let content = <div></div>
        if (props.message.type == "text") {
            let text = props.message.text?.split("\n").map(t=><p>{t}</p>);
            content = <div className={style.text}>{text}</div>
        }
        if (props.message.forme) {
            content = <><div className={style.user}>{props.message.from}</div> {content}</>
        }
        return content
    }

    let msgStyle = style.messageBlock;
    msgStyle = props.message.forme == true ? `${msgStyle} ${style.forMe}` : msgStyle;

    return <div className={msgStyle}>
        <div className={style.message}>
            {GetContent()}
            <div className={style.date}>{props.message.date}</div>
        </div>
    </div>
}
export { Message }