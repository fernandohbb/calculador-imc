import './index.css';
import { useState } from "react"
import { Title } from './components/Title';
import { SubTitle } from './components/SubTitle';
import { InputName } from './components/inputs/InputName';
import { InputAltura } from './components/inputs/InputAltura';
import { InputPeso } from './components/inputs/InputPeso';
import { BtnCalcularImc } from './button/BtnCalcularImc';
import { BtnLimparInputs } from './button/BtnLimparInputs';
import { Messenger } from './components/Messenger';


      function App() {

            const[nome,setNome] = useState("");
            const[altura,setAltura] = useState("");
            const[peso,setPeso] = useState("");
            const[mensagem,setMensagem] = useState("");
  
            return (
                  <div className="App">
                        <Title />
                        <SubTitle />
                  <div className='area-input'>
                        <InputName 
                              nome={nome}
                              setNome={setNome}
                        />
                        <InputAltura 
                              altura={altura}
                              setAltura={setAltura}
                        />
                        <InputPeso 
                              peso={peso}
                              setPeso={setPeso}
                        />
                        <BtnCalcularImc
                              nome={nome}
                              setNome={setNome}
                              altura={altura}
                              setAltura={setAltura}
                              peso={peso}
                              setPeso={setPeso}
                              setMensagem={setMensagem}
                        />
                        <BtnLimparInputs 
                              setNome={setNome}
                              setAltura={setAltura}
                              setPeso={setPeso}
                              setMensagem={setMensagem}
                        />
                  </div>
                        <Messenger 
                        mensagem={mensagem}
                  />
                  </div>
                  );
                  }
export default App;
