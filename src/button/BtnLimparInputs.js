export const BtnLimparInputs = ({setNome,setAltura,setPeso}) => {


       const limparImc = () => {
             setNome("");
             setAltura("");
             setPeso("");
    }

return(
      <button 
            onClick={limparImc}
            >Limpar
      </button>   
    )
}