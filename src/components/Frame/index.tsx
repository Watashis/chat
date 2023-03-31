import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { Message } from '../Message';
import { IMessage } from '../../modules/api.types';

import style from './frame.module.css'


interface Props {

}



const Frame = forwardRef((props: Props, ref) => {
    let emptyMessages: IMessage[] = [];
    const [Messages, addMessage] = useState(emptyMessages);
    const _frame = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({
        addMessage(msg: IMessage) {
            console.log(msg)
            addMessage([...Messages, msg]);
            let scroll: ScrollToOptions = { top: _frame.current?.scrollHeight, left: 0 }
            _frame.current?.scroll(scroll)
        }
    }));

    return (<div className={style.frame} ref={_frame}>
        {Messages.map((msg, id) => {
            if (id == Messages.length - 1) {
                window.setTimeout(() => {
                    let scroll: ScrollToOptions = { top: _frame.current?.scrollHeight, left: 0 }
                    _frame.current?.scroll(scroll)
                }, 10)
            }
            return <Message message={msg} key={msg.id}></Message>
        })}
    </div>)
})




export { Frame };
