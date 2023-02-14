export const BtnCalcularImc = ({nome,setNome,altura,setAltura,peso,setPeso,setMensagem}) => {


  function calcularImc(){
   
      const alt = altura / 100;
      const imc = (peso / (alt**2))
    
            if(nome === "") {
               setNome("preencha o campo");
            } if(altura === ""){
               setAltura("preencha o campo");
            } if(peso === ""){
               setPeso("Preencha o campo");
            }
            if(imc <= 18.5){
               setMensagem(nome + " seu imc é " + parseFloat(imc.toFixed(1)) +  " ( Magreza! )");
            }else if(imc > 18.5 & imc <= 24.9){
               setMensagem(nome + " seu imc é " + parseFloat(imc.toFixed(1)) + " ( Normal )");
            }else if(imc >= 25.0 & imc <29.9){
               setMensagem(nome + " seu imc é " + parseFloat(imc.toFixed(1)) + " ( Sobrepeso )");
            }else if(imc >= 30.0 & imc <= 39.9){
               setMensagem(nome + " seu imc é " + parseFloat(imc.toFixed(1)) + " ( Obesidade )");
            }else if(imc > 40.0 ){
               setMensagem(nome + " seu imc é " + parseFloat(imc.toFixed(1)) + " ( Obesidade Grave! )");
            }
          }

    return(
      <button 
        onClick={calcularImc}
        >Calcular
      </button>    
      )
}