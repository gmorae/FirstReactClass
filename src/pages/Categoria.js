import React, { Component} from 'react'
import '../App.css'
import Rodape from '../components/Rodape'
import Navbar from '../components/Navbar/Navbar'

class Categoria extends Component{
    render(){
        return(
            <div className="App">
                <Navbar />
                <h1>Categoria</h1>
                <p>Teste Categoria</p>
                <Rodape />
            </div>
        )
    }
}

export default Categoria
