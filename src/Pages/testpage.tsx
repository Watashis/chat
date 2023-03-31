import { useParams } from 'react-router-dom';

export default function TestPage(qwe:any){
    let { id } = useParams();
    console.log(id)
    return <div>Testpage</div>
}