import React from "react";
import { Card } from "./components/Card";

function App() {
  return (
    // o "React.Fragment" (<></>) é útil para não ferir o principio de retornar apenas um elemento, então para não termos que criar o elemento que será lido pelo servidor, essa propriedade agrupa o que iremos retornar sem ser lido, ou seja, não afeta a peformance.
    <>
      {/* component */}
      <Card/>
    </>
  );
}

export default App;
