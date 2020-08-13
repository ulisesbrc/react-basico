import React from 'react';
import Tarea from './tarea';
import PropTypes from 'prop-types';
//Componente Tarea
class Tareas extends React.Component { 
    render(){
        return this.props.tareas.map(e=> 
        <Tarea 
            tarea={e} 
            key={e.id} 
            deleteTarea={this.props.deleteTarea} 
            checkDone={this.props.checkDone} />)
    }
}
Tareas.propTypes = {
    tareas: PropTypes.array.isRequired
}
export default Tareas;