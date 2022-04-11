import { Route, Switch } from "react-router-dom";
import AgregarPersonalPage from './Pages/AgregarPersonalPage';
import EditarPersonalPage from './Pages/EditarPersonalPage';
import ListaPersonalPage from './Pages/ListaPersonalPage';
import EliminarPersonalPage from "./Pages/EliminarPersonalPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <ListaPersonalPage/>
        </Route>
        <Route path='/agregarPersonal'>
          <AgregarPersonalPage/>
        </Route>
        <Route path='/editarPersonal'>
          <EditarPersonalPage/>
        </Route>
        <Route path='/eliminarPersonal'>
          <EliminarPersonalPage/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
