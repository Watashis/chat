import { useRef, useState } from 'react';
import style from './Login.module.css'
import { Navigate, redirect } from "react-router-dom";
import Api from '../../modules/api';
declare var window: any;

export default function LoginPage() {
    const [logined,setLoging] = useState(false)
    let _input = useRef<HTMLInputElement>(null)
    let check = () =>{
        let api = window.api as Api;
        let userName = _input.current?.value
        if(userName!=null&&userName!=""){
            api.setUserName(userName);
            setLoging(true);
        }
    }
    return <div className={style.window}>
        <div className={style.login}>
            {logined? <Navigate to="/chat/123"  />:undefined}
            <h1>Log in</h1>
            <input className={style.input} placeholder='Login' ref={_input}></input>
            <div className={style.btn} onClick={check}>Login</div>
        </div>
    </div>
}