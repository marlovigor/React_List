import React from 'react';
import Formcon from '../Components/Formcon'




class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactosFree: false,



    }


    this.handleChange = this.handleChange.bind(this)



  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      })
      :
      this.setState({
        [name]: value
      })


  }

  render() {
    return(
    <Formcon 
    handleChange={this.handleChange}
    data={this.state}/>
    )
  }
}








export default Form;
