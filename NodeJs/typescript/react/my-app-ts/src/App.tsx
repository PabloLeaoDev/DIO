import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    // o "React.Fragment" (<></>) é útil para não ferir o principio de retornar apenas um elemento, então para não termos que criar o elemento que será lido pelo servidor, essa propriedade agrupa o que iremos retornar sem ser lido, ou seja, não afeta a peformance.
    <Layout>
      <Card id = {1} paragraph="Paragrafo 1"/>
      <Card id = {2} paragraph="Paragrafo 2"/>
      <Card id = {3} paragraph="Paragrafo 3"/>
    </Layout>
  );
}

export default App;
