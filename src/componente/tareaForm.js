import React from 'react';
class TareaForm extends React.Component { 
    state = {
        title : '',
        description : ''
      }
      onSubmit = e => {
        e.preventDefault();
       // console.log(this.state)
        this.props.addTarea(this.state.title,this.state.description);
      }
      onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(e.target.name,e.target.value)
      }
    render(){
       // console.log(this.props) //verifico las propiedades que tiene el componente
        //ejecuta la función que se ha pasado como propiedad
        return <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.title} name="title" />
        <br />
        <textarea onChange={this.onChange} name="description" value={this.state.description}></textarea>
        <input type="submit" value="enviar" />
        </form>
    }
}
export default TareaForm;