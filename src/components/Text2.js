const Text2 = () => {
    const [inputText,setImputText]= useState('');
    const [showingText,setShowingText]= useState('');

    const handleInputChange = (event) => {
        setInputTexto(event.target.value);
      };
      const exibirTexto = () => {
        setExibidoTexto(inputTexto);
      };
    return (
        <div>
         <input type="text" value={inputTexto} onChange={handleInputChange} />
      <button onClick={exibirTexto}>Exibir</button>
      <h4>{exibidoTexto}</h4>
        </div>
        
    );
}

export default text2;