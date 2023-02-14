export const InputPeso = ({peso, setPeso}) => {

    return(
        <input
        type="text"
        placeholder='Digite seu peso em kg (Ex:100)'
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
   />    )
}