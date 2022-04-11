import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function EliminarPersonal(props) {
  const history = useHistory();
  const location = useLocation();
  let personal = {
    idPersonal: location.state.personal.idPersonal,
    estatus: false,
  };

  function submitHandler(event) {
    props.eliminarPersonal(personal);
    history.push('/');
  }

  function cancelHandler(event) {
    history.push('/');
  }

  return (
    <Container>
        <Button variant="secondary" onClick={cancelHandler}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={submitHandler}>
          Eliminar
        </Button>
    </Container>
  );
}

export default EliminarPersonal;
