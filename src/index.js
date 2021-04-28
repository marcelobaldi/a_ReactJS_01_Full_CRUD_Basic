//Importar - Libs
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar - Arquivos
import CSS_Codigo   from './01CSS_Codigo/App.js';
import CSS_Arquivo	from './02CSS_Arquivo/App.js';
import CSSBoot4	from './03BootStrap4/App.js';            //CSS_Boot4 da erro. tem que ser PascalCase !!!

//Conteúdo
ReactDOM.render(
    <React.StrictMode>
        
        {/* <CSS_Codigo/>		<br/><hr/><hr/> */}
        {/* <CSS_Arquivo/>	<br/><hr/><hr/> */}
       
        <CSSBoot4/>		<br/><hr/><hr/>

    </React.StrictMode>,
    document.getElementById('root')
);


//Formatação CSS:		Não Precisa Instalar e Nem Importar Libs
//Formatação Boot:		Precisa! 

//////////////////////////////////////////////////////////////

//1-3 Lib’s - Instalar
//- BootStrap:          npm install bootstrap
//- ReactStrap:         npm install reactstrap react react-dom

//2-3 Lib’s - Importar
//- Arquivo:            SRC/Index.js:
//- Lib:                import 'bootstrap/dist/css/bootstrap.min.css';

//3-3 Lib’s - Importar
//- Arquivo:            Nos Componentes Que Usar;
//- Lib:                import { Button, Input } from 'reactstrap';
//- Observação:         Importar os Objetos Que Utilizar;

//Observação
//- Site:               https://reactstrap.github.io
// - Ir em:				Components
// - Formatação:		Escolher Formatação e Seguir o Exemplo;


