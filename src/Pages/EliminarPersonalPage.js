import { useHistory } from "react-router-dom";
import EliminarPersonal from '../components/personal/EliminarPersonal';

function EliminarPersonalPage(props){
    const history = useHistory();

    function eliminarPersonal(personal){
        fetch('https://localhost:7231/api/Personal/eliminar', {
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
        <section id="eliminar">
            <h1>Eliminar personal</h1>
            <h2>¿Estás seguro?</h2>
            <EliminarPersonal personal={props.personal} eliminarPersonal={eliminarPersonal}/>
        </section>   
      );
}

export default EliminarPersonalPage;