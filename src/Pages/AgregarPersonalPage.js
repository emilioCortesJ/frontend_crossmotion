import { useHistory } from "react-router-dom";
import AgregarPersonal from '../components/personal/AgregarPersonal';

function AgregarPersonalPage(){
    const history = useHistory();

    function agregarPersonal(personal){
        fetch('https://localhost:7231/api/Personal/agregar', {
            method: 'POST',
            body: JSON.stringify(personal),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            history.replace('/');
        })
    }
    return (
        <section>
            <h1>Agregar personal</h1>
            <AgregarPersonal onAddPersonal={agregarPersonal}/>
        </section>   
      );
}

export default AgregarPersonalPage;