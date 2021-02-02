import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu';

function App() {

  const [inputFrutas, setInputFrutas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");

  //Redux
  const frutas = useSelector((state) => state.frutasReducer.frutas)
  //const arrayFrutas = frutas.frutas
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
  // console.log(titulo);

  const dispatch = useDispatch();
  console.log(frutas)

  function adicionarFruta(event) {
    event.preventDefault();

    const objFruta = {
      nome: inputFrutas
    }

    dispatch({ type: "ADICIONAR", value: objFruta });

  }

  function alterarTitulo(event) {

    setInputTitulo(event.target.value);
    dispatch({ type: "ALTERAR", value: event.target.value });
  }

  return (
    <div>

    {/* Inicio Parte visual */}

      <div className="card mb-3">
        <img className="card-img-top" src="https://www.recodepro.org.br/wp-content/uploads/2020/05/logo_maior-2.png" alt="Imagem de capa do card" />
        <div className="alinhamento">
          <div className="card-body container">
            <h5 className="card-title"><button type="button" class="btn btn-warning btn-lg"><h1>{stateTitulo}</h1></button></h5>
            <p className="card-text">{frutas.map((fruta, index) => {
              return (
                <li key={index}>{fruta.nome}</li>
              )
            })}</p>
          </div>
        </div>

     {/* Fim Parte Visual */}

        <div className="container">
          <form>
            <label><h1 className="text-warning">Mudar Título:</h1></label>
            <input className="bg-warning" placeholder="Digite um título"
              value={inputTitulo}
              onChange={alterarTitulo}
            />
          </form>

          <Menu />

          <form onSubmit={adicionarFruta}>

            <input className="bg-warning" placeholder="Digite uma anotação"
              value={inputFrutas}
              onChange={(event) => setInputFrutas(event.target.value)}
            />

            <button className="btn-warning">
              Enviar
     </button>

          </form>
        </div>
      </div>
    </div>
  );
}


export default App;
