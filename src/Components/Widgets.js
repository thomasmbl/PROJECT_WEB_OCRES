import React from "react";

const API_URL = 'https://www.breakingbadapi.com/api/characters';

class Widgets extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {items: [], isLoaded: false }
        
    }   

    componentDidMount()
  {
    fetch(`${API_URL}?name=${this.props.charac}`)
      .then(response => response.json() )
      .then(json => { this.setState({isLoaded: true, items: json, }) })
  }

    render(){
        var { isLoaded, items } = this.state;

        return(
            <div className="CharacImg">
                <img className="imgCharac" src={items.img} alt=""/>
            </div>
        )




    }

}

export default Widgets;


/*

constructor(charac){
        if(charac === undefined){
            charac = "Walter White";
        }
        this.charac = charac;
    }   

    componentDidMount()
  {
    fetch(`${API_URL}?name=${this.charac}`)
      .then(response => response.json() )
      .then(json => { this.setState({charac: json, }) })
  }

    render(){
        return(
            <div className="CharacImg">
                <img className="imgCharac" src={this.charac.img} alt=""/>
            </div>
        )




    }

    */