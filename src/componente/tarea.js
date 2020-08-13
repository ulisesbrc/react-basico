import React from 'react';
//Componente Tarea
class Tarea extends React.Component { 
    done(){
        return {
            color: this.props.tarea.done?'red':'blue',
            textDecoration: this.props.tarea.done?'line-through':'none'

        }
    }
    render(){
        const {tarea} = this.props
        return <div style={this.done()}>
        <h4>{tarea.title}</h4>
        <p>{tarea.description} - {tarea.done} - 
        {tarea.id}
        </p>
        <input type="checkbox" onChange={this.props.checkDone.bind(this,tarea.id)}/>
        <button style={btnDelete} onClick={this.props.deleteTarea.bind(this,tarea.id)}>x</button>
        </div>

    }
}
const btnDelete = {
    fontSize : '20px',
    background :'blue',
    color : '#ccc',
    cursor :'pointer',
    borderRadius:'50%',
    
}
export default Tarea;