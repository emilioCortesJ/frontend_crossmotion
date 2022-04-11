import { useHistory } from "react-router-dom";

function PersonalItem(props) {
  const history = useHistory();
  
  function redirectPage() {
    history.push("/editarPersonal", { personal: props.personal });
  }
  function redirectPageDelete() {
    history.push("/eliminarPersonal", { personal: props.personal });
  }
  return (
    <tr key={props.personal.idPersonal}>
      <td>{props.personal.idPersonal}</td>
      <td>{props.personal.nombre}</td>
      <td>{props.personal.apellido}</td>
      <td>{props.personal.edad}</td>
      <td>{props.personal.fechaNacimiento}</td>
      <td>{props.personal.fechaRegistro}</td>
      <td>{props.personal.departamento}</td>
      <td>
        <button className="btn btn-warning" onClick={redirectPage}>
          Editar
        </button>

        <button className="btn btn-danger" onClick={redirectPageDelete}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default PersonalItem;
