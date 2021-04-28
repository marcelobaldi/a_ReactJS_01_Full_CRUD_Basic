//Libs, Arquivos, Etc
import React, { Component } from 'react';                           //ReactJS
import { Button, Input } from 'reactstrap';                         //BootStrap
import firebase from '../bancoDados/FirebaseConexao';               //Firebase

//Componente FullStack (Back e Front)
export default class App extends Component {
    
    //Variáveis e Métodos
    constructor(props) { super(props);
        this.state = {nome:'', idade:'', erro:'', 
            lista: [], encontrado: 'Não Encontrado'};               //Variáveis
        this.cadastrar = this.cadastrar.bind(this);                 //Métodos
        this.buscar = this.buscar.bind(this);                      
    }

    //Método - PréInicial
    componentDidMount() {
        this.buscar();
    }

    buscar() {
        firebase.database().ref('clientes').on('value', (snapshot) => {
            //Variáveis - Stand By
            let state = this.state;
            state.lista = [];
            state.encontrado = 'Não Encontrado';
       
            //Nó - Percorrer 
            snapshot.forEach( (childtem) => {
       
                //Montar Lista
                state.lista.push({
                    keyLista: childtem.key,
                    nomeLista: childtem.val().nome,
                    idadeLista: childtem.val().idade
                });
            });

            //Atualizar Variáveis Stand By (quando a lista estiver pronta)
            this.setState(state);   //atualizar depois 
        });
    }

    //Método - Cadastrar
    cadastrar(event) {   
        //Tratamento Campos Branco
        if(this.state.nome !=='' && this.state.idade !==''){    
            //Firebase - Caminho
            let pastaUsuarios = firebase.database().ref('clientes');
            let id = pastaUsuarios.push().key;

            //Firebase - Gravar
            pastaUsuarios.child(id).set({
                nome: this.state.nome,
                idade: this.state.idade,
            });        

            //Mensagem
            alert("Usuário " + this.state.nome + " Salvo!");
            event.preventDefault();                                 //SENÃO NÃO FUNCIONA!!! e Não Limpa Tela/Campos
            this.setState({nome:'', idade:'', erro:''});            //Atualizar Variável                
        }else{
            this.setState({ erro: 'Há Campos em Branco!' });        //Atualizar Variável    
            event.preventDefault();                                 //SENÃO NÃO FUNCIONA!!! e Não Limpa Tela/Campos
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    //Programação - FrontEnd
    render() { return ( <div class= "container">    

        <h4>Cadastro Cliente</h4>  <br/>                            {/* Texto */}                                  
        <p>{this.state.erro} </p>                                   {/* Variável */}   

        {/* Formulário */}
        <form onSubmit={ this.cadastrar }>                          {/* Método */}   
            <input class="form-control" type="text"   id="nome"  name="nome" 
            value={this.state.nome}   placeholder="Nome:"  style={{width:'300px', height:'40px'}}
			onChange={(e) => this.setState({nome: e.target.value})} /> <br/>

            <input class="form-control" type="number" id="idade" name="idade" 
            value={this.state.idade}  placeholder="Idade:" style={{width:'80px', height:'40px'}}
            onChange={(e) => this.setState({idade: e.target.value})} /> <br/>
            
			<Button color="primary" type="submit">Salvar</Button>   &nbsp;&nbsp;  {/*B Maiúsculo*/}   
		</form> <br/><br/>    
      

        {/* Lista */}
        { this.state.lista.map( (item, indice) => {
            return (
                <div key={indice}>
                    <b>{item.nomeLista}</b> &nbsp;&nbsp; {item.idadeLista} 
                    {/* <p>{item.key}</p> */}
                </div>
            );
        } ) }

    </div> );}
}


