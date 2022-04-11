import { useHistory } from "react-router-dom";
import EditarPersonal from '../components/personal/EditarPersonal';

function EditarPersonalPage(props){
    const history = useHistory();

    function editarPersonal(personal){
        fetch('https://localhost:7231/api/Personal/editar', {
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
            <h1>Editar personal</h1>
            <EditarPersonal personal={props.personal} editarPersonal={editarPersonal}/>
        </section>   
      );
}

export default EditarPersonalPage;