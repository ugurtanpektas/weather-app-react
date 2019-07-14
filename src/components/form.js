import React from "react";

class Form extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.loadWeather(e.target.elements.city.value);
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit} className="city-form form-inline">
                <input type="text" name="city" className="form-control" autoComplete="off" value={this.props.city} placeholder="Şehir..."/>
                <button className="btn btn-primary">Getir</button>
            </form>
        )
    }
}

export default Form;