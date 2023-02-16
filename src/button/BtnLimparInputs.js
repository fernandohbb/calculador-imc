export const BtnLimparInputs = ({setNome,setAltura,setPeso,setMensagem}) => {


      const limparImc = () => {
               setNome("");
               setAltura("");
               setPeso("");
               setMensagem("");
    }
   
return(
      <button 
            onClick={limparImc}
            >Limpar
      </button>   
    )
}