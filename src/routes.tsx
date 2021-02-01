import React from "react"; // sempre q eu for utilizar um componente eu preciso importar o react no arquivo(nessa versao do react 16.9.0)

import { BrowserRouter, Switch, Route } from "react-router-dom"; // alguns pacotes, no typescript, não vem com as informações necessarias que o TS precisa pra entender oq tem dentro dele, o erro q da informa oq precisa ser feito. Nesse caso precisei instalar @types com o yarn = @types/react-router-dom -D

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";

// exact vai comparar os caminhos para que não mostre tela landing junto com as outras, geralmente só usada na primeira rota mesmo
// switch faz com que apenas uma rota seja exibida em tela de cada vez, é opcional mas melhor por
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
