import React from 'react';
import './App.css';

class App extends React.Component {
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
    const { name, value,type,checked } = event.target
    type==="checkbox" ?
    this.setState({
        [name]:checked    
    })
    :
    this.setState({
      [name]: value
    })


  }




  render() {
    return (
      <div className="App">
        <form >
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="first name"

          />
          <br />
          <input
            name="lastName"
            placeholder="last name"
            value={this.state.lastName}
            onChange={this.handleChange} />
          <br />
          <input
          name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange} />

          <br />
          <label>
            <input type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
            />Male
          </label>
          <label>
            <input type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
            />female
          </label>
           <br/>

          <select 
          value={this.state.destination} 
          name="destination" 
          onChange={this.handleChange} placeholder="choose destination">
            <option value="--Choose--">--Choose--</option>
            <option value="gernmany">Germany</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Japan">Japan</option>
            <option value="Africa">Africa</option>
            
          </select>
          <br />
          
          <label>
            <input
            type="checkbox"
            name="isVegan"
            onChange={this.handleChange}
            checked={this.state.isVegan}
            />Vegan
            <input
            type="checkbox"
            name="isKosher"
            onChange={this.handleChange}
            checked={this.state.iskosher}
            />Kosher
            <input
            type="checkbox"
            name="isLactosFree"
            onChange={this.handleChange}
            checked={this.state.isLactosFree}
            />lactos
            <input
            type="checkbox"
            name="isKosher"
            onChange={this.handleChange}
            checked={this.state.iskosher}
            />Kosher
          </label>


          <br />

          
          <button>SUBMIT</button>
        </form>


        <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your Age: {this.state.age}</p>
        <p>Your Gender: {this.state.gender}</p>

        <p>your destination:{this.state.destination}</p>

        <p>
          your Dietary Restriction:<br/>
          Vegan:{this.state.isVegan ? "yes" : "no"}
          <br/>
          Kosher:{this.state.isKosher ? "yes" : "no"}
          <br/>
          lactos:{this.state.isLactosFree ? "yes" : "no"}
       </p>
      </div>







    );
  }
}

export default App;
