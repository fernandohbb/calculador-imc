export const InputName= ({nome, setNome}) => {

    return(
        
       <input
            type="text"
            placeholder='Digite seu nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}  
            required       
    />
    )
}