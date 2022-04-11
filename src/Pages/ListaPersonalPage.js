import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import PersonalItem from "../components/personal/PersonalItem";

function ListaPersonalPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetups] = useState([]);
  
  useEffect(() => {
    fetch("https://localhost:7231/api/Personal/obtenerPersonal")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    return (
      <div>
        <h2>Personal</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id_personal</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Fecha de nacimiento</th>
              <th>Fecha de registro</th>
              <th>Departamento</th>
              <th>Acciones</th>
            </tr>
            {loadedMeetup.map((personal) => 
              <PersonalItem key={personal.idPersonal} personal={personal}/>
            )}
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    );
  }
}

export default ListaPersonalPage;
