import React, { Component } from ('react')

class Plants extends Component {
    constructor(props){
        super(props)
        this.state = {
            PlantName: '',
            PlantLocation: '',
        }
        this.handlePlantName = this.handlePlantName.bind(this)
        this.handlePlantLocation = this.handlePlantLocation.bind(this)
    }

    handlePlantLocation(event) {
        this.setState({ PlantLocation: event.target.value })
    }
    handlePlantName(event) {
        this.setState({ plantName: event.target.value})
    }

    addToPlantApp = event => {
        event.preventDefault()
        this.setState({
            PlantName: event.target.value,
            PlantLocation: event.target.value,
        })
        axios.post('<your-heroku-url here>', {
            SignatureOfGuest: this.state.SignatureOfGuest,
            MessageofGuest: this.state.MessageofGuest,
          })
        .then(response => {
          console.log(response, 'Signature added!');
        })
        .catch(err => {
          console.log(err, 'Signature not added, try again');
        });
    
    this.setState({
          SignatureOfGuest: "",
          MessageofGuest: "",
        });
    };
    }


}



export default Plants