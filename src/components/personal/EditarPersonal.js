import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

function EditarPersonal(props) {
  const location = useLocation();
  let personal = {
    idPersonal: location.state.personal.idPersonal,
    nombre: location.state.personal.nombre,
    apellido: location.state.personal.apellido,
    fechaNacimiento: location.state.personal.fechaNacimiento,
  };
  const idPersonalRef = useRef();
  const nombreInputRef = useRef();
  const apellidoInputRef = useRef();
  const fechaNacimientoRef = useRef();
  const fkDepartamentoRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredIdPersonal = idPersonalRef.current.value;
    const enteredNombre = nombreInputRef.current.value;
    const enteredApellido = apellidoInputRef.current.value;
    const enteredFechaNacimiento = fechaNacimientoRef.current.value;
    const enteredFkDepartamento = fkDepartamentoRef.current.value;

    const personal = {
      idPersonal: enteredIdPersonal,
      nombre: enteredNombre,
      apellido: enteredApellido,
      fechaNacimiento: enteredFechaNacimiento,
      fkDepartamento: enteredFkDepartamento,
    };
    props.editarPersonal(personal);
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicIdPersonal">
        <Form.Label>Id de personal</Form.Label>
        <Form.Control
          type="number"
          disabled
          required
          ref={idPersonalRef}
          value={personal.idPersonal}
          placeholder="Nombre"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          required
          ref={nombreInputRef}
          defaultValue={personal.nombre}
          placeholder="Nombre"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          required
          ref={apellidoInputRef}
          defaultValue={personal.apellido}
          placeholder="Apellido"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFecha">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control
          type="date"
          required
          ref={fechaNacimientoRef}
          defaultValue={personal.fechaNacimiento}
          placeholder="Fecha de nacimiento"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFkDepartamento">
        <Form.Label>Departamento</Form.Label>
        <Form.Select required ref={fkDepartamentoRef}>
          <option value={1}>Ventas</option>
          <option value={2}>Administración</option>
          <option value={3}>Almacén</option>
        </Form.Select>
      </Form.Group>
      <Button className="btn btn-primary" onClick={submitHandler}>
        Editar
      </Button>
    </Form>
  );
}

export default EditarPersonal;
