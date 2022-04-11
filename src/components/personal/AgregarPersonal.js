import { Form, Button } from "react-bootstrap";
import { useRef } from "react";

function AgregarPersonal(props) {
  const nombreInputRef = useRef();
  const apellidoInputRef = useRef();
  const fechaNacimientoRef = useRef();
  const fkDepartamentoRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredNombre = nombreInputRef.current.value;
    const enteredApellido = apellidoInputRef.current.value;
    const enteredFechaNacimiento = fechaNacimientoRef.current.value;
    const enteredFkDepartamento = fkDepartamentoRef.current.value;

    const personal = {
      nombre: enteredNombre,
      apellido: enteredApellido,
      fechaNacimiento: enteredFechaNacimiento,
      fkDepartamento: enteredFkDepartamento,
    };
    props.onAddPersonal(personal);
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          required
          ref={nombreInputRef}
          placeholder="Nombre"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          required
          ref={apellidoInputRef}
          placeholder="Apellido"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFecha">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control
          type="date"
          required
          ref={fechaNacimientoRef}
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
      <Button className="btn btn-primary" onClick={submitHandler}>Agregar</Button>
    </Form>
  );
}

export default AgregarPersonal;
