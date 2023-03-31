import style from './title.module.css'

interface TitleProps {
    children: string
}

export default function Title(props: TitleProps) {
    return <div className={style.title}>
        <div>{"<-"}</div>
        <div className={style.text}>{props.children}</div>
        <div>:</div>
    </div>
}