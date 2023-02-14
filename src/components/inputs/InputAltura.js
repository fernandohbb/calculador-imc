export const InputAltura = ({altura, setAltura}) => {

    return(
       <input
            type="text"
            placeholder='Digite sua altura em cm (Ex:180)'
            value={altura}
            onChange={(e) => setAltura(e.target.value)}         
    />    )
}