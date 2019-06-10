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

const form = {
  paddingTop: "20px",
  backgroundColor: 'rgba(108, 190, 237, 1)',


}
const inputstyle1 = {
  width: '30%',
  height: '35px',
  borderRadius:'15px',
  margin:'5px',
}







export default Form;
