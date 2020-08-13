//2:53:42
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Ejemplo from './tareas/tareas.json';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Tareas from './componente/tareas';
import TareaForm from './componente/tareaForm';
import Post from './componente/post'
/*
function Helloworld(props){ //Componente -- props propiedades 
  //recibe el componente
  console.log(props)
  return (
    <div id="hello">{props.texto}
    <h3>{props.subtitulo}</h3>
    </div>
  )
}
*/
//F1 comment tobble block comment para comentar el bloque 
//funcion flecha
//const App = () => <div>Este es mi componente <Helloworld/></div>
//clase
/*class App extends React.Component {
  render(){
    return <div>Este es mi componente <Helloworld/></div>
  }

}
*/
//Concepto de estado
class Helloworld extends React.Component {
  state = {
    show: true,
    tareas: Ejemplo
  }
  mostrar = () => {
    this.setState({show:!this.state.show})
  }
  addTarea = (titulo, descripcion)=>{
    console.log(titulo,descripcion)
    const newTarea = {
      title: titulo,
      description:descripcion,
      id: this.state.tareas.length+1
    }
    console.log(newTarea)
    //Cambia el estado de tareas agregándole un nuevo objeto
    this.setState({
      tareas: [...this.state.tareas, newTarea]
    })
  }
  deleteTarea = (id) => {
    const nuevaTarea = this.state.tareas.filter(tareas => tareas.id !== id)
    console.log(nuevaTarea)
    this.setState({
      tareas:nuevaTarea
    })
  }
  checkDone = (id) => {
    const nuevaTarea =this.state.tareas.map( tarea => {
      if(tarea.id === id) {
        tarea.done = !tarea.done 
      }
      return tarea;
    });
    this.setState({
      tareas:nuevaTarea
    })
  }
  render() {
    if(this.state.show){
      return(
      <div id="hello">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Route exact path="/" render={() => {
            return <div>
              <TareaForm addTarea={this.addTarea}/>
              <h3>{this.props.subtitulo}</h3>
              <Tareas tareas={this.state.tareas} deleteTarea={this.deleteTarea} checkDone={this.checkDone}/>
            </div>
          }

          }>
          </Route>
          <Route path="/posts" component={Post}>

          </Route>
        </Router>
        {this.props.texto}
     
      <button onClick={this.mostrar}>Cambiar el estado de show</button>
      </div>
      )
    } else {
      return(
        <div>
        <h1>No hay elemento</h1>
        <button onClick={this.mostrar}>Cambiar el estado de show</button>
        </div>
      )
    }
  }
}

class App extends React.Component {
 
  render() {
    return(
      <div className="App">
        <div>
         

        Este es mi componente: Helloworld()
        <Helloworld texto="Primer texto" subtitulo="subtitulo"/>
        </div>
      </div>
    )
  }
}

export default App;
