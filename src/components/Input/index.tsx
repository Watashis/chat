import { forwardRef, useImperativeHandle, useRef } from "react"
import style from './Input.module.css'
declare var window: any;
interface Props {
    SendMessage: Function
}
// const Input = forwardRef((props: any, ref: any) => {
//     let _input = useRef<HTMLInputElement>(null);

//     useImperativeHandle(ref, () => ({
//         setFocus() {
//             _input.current?.focus();
//         }
//     }));

//     const SendMessage = () => {
//         let msgText = _input.current?.value;
//         if (msgText != null && msgText != "") {
//             props.SendMessage(msgText)
//         }
//         window.UpdateWinSize();
//     }
//     return <div className={style.block}>
//         <input className={style.input} title="Message" placeholder="Message" ref={_input}></input>
//         <div className={style.send} onClick={SendMessage} >{'->'}</div>
//     </div>
// })


function Input(props: Props) {
    let _input = useRef<HTMLTextAreaElement>(null);
    const SendMessage = () => {
        let msgText = _input.current?.value;
        if (msgText != null && msgText != "") {
            props.SendMessage(msgText)
        }
        window.UpdateWinSize();
        _input.current?.focus();
        _input.current!.value = ""
    }
    let keydown = (e:any) => {
        if(e.keyCode=13){
            console.log('enter')
            var scrollOption:ScrollToOptions = {left:0, top:_input.current?.scrollHeight as number+100}
            _input.current?.scroll(scrollOption)
            console.log(_input.current?.scrollHeight)
        }

    }
    return <div className={style.block}>
        <div className={style.textAreaBlock}>
            <textarea className={style.input} title="Message" placeholder="Message" ref={_input} onKeyDown={e=>keydown(e)}></textarea>
        </div>
        <div className={style.send} onClick={SendMessage} >{'->'}</div>
    </div>
}


export { Input }