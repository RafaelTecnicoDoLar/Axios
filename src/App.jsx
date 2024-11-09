

function App() {
  const [rua, setRua] = useState()
  const [bairro, setBairro] = useState()
  const [cidade, setCidade] = useState()
  const [estado, setEstado] = useState()
  const [validarcep, setValidarCEP] = useState()

  function alterarCep(e) {
    if (e.target.value.length == 8) {
      axios.get(`https://brasilapi.com.br/api/cep/v1/${e.target.value}`)

        .then(function (response) {
          setValidarCEP("CEP Válido")

          setRua(response.data.street);
          setBairro(response.data.neighborhood);
          setCidade(response.data.city);
          setEstado(response.data.state);

        })

        .cath(function () {
          setValidarCEP("CEP Inválido")

        })
    }

    if (e.target.value.length >= 9) {
      setValidarCEP("CEP Inválido, excedeu o limite de caracteres")

    }

  }

  function Enviar() {

  }

  return (
    <>
      <h1>
        Irei descobrir seu endereço, insira o CEP e de enter
      </h1>

      <form className="Formulario">

        <input type='text' name='cep' placeholder='CEP' onChange={alterarCep} />


        <input type='text' name="rua" placeholder='Rua' value={rua} onChange={(e) => setRua(e.target.value)} />
        <input type='text' name="numero" placeholder='Número' />
        <input type='text' name="complemento" placeholder='Complemento' />
        <input type='text' name="bairro" placeholder='Bairro' value={bairro} onChange={(e) => setBairro(e.target.value)} />
        <input type='text' name="cidade" placeholder='Cidade' value={cidade} onChange={(e) => setCidade(e.target.value)} />
        <input type='text' name="estado" placeholder='Estado' value={estado} onChange={(e) => setEstado(e.target.value)} />

        <p>
          {validarcep}
        </p>

        <button onClick={Enviar}> Enviar</button>

      </form>
    </>
  )
}

export default App;
