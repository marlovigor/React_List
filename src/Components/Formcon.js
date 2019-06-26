import React from 'react';




function Formcon (props){
    return (
        <div className="App">
        <h1>Personal Info</h1>
          <form style={form}>
            <input
              style={inputstyle1}
              name="firstName"
              value={props.data.firstName}
              onChange={props.handleChange}
              placeholder="first name"
  
            />
            <br />
            <input
              style={inputstyle1}
              name="lastName"
              placeholder="last name"
              value={props.data.lastName}
              onChange={props.handleChange} />
            <br />
            <input
              name="age"
              style={inputstyle1}
              placeholder="age"
              value={props.data.age}
              onChange={props.handleChange} />
  
            <br />
            <label>
              <input type="radio"
                name="gender"
                value="male"
                checked={props.data.gender === "male"}
                onChange={props.handleChange}
              />Male
            </label>
            <label>
              <input type="radio"
                name="gender"
                value="female"
                checked={props.data.gender === "female"}
                onChange={props.handleChange}
              />female
            </label>
            <br />
  
            <select
              value={props.data.destination}
              name="destination"
              onChange={props.handleChange} placeholder="choose destination">
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
                onChange={props.handleChange}
                checked={props.data.isVegan}
              />Vegan            
              <input
                type="checkbox"
                name="isKosher"
                onChange={props.handleChange}
                checked={props.data.iskosher}
              />Kosher
              <input
                type="checkbox"
                name="isLactosFree"
                onChange={props.handleChange}
                checked={props.data.isLactosFree}
              />lactos
  
            </label>
  
  
            <br />
  
  
            <button>SUBMIT</button>
          </form>
  
  
          <p>Your Name: {props.data.firstName} {props.data.lastName}</p>
          <p>Your Age: {props.data.age}</p>
          <p>Your Gender: {props.data.gender}</p>
  
          <p>your destination:{props.data.destination}</p>
  
          <p>
            your Dietary Restriction:<br />
            Vegan:{props.data.isVegan ? "yes" : "no"}
            <br />
            Kosher:{props.data.isKosher ? "yes" : "no"}
            <br />
            lactos:{props.data.isLactosFree ? "yes" : "no"}
          </p>
        </div>
  
      );
}
const form = {
    paddingTop: "20px",
    backgroundColor:'lightblue'
  
  }
  const inputstyle1 = {
    width: '30%',
    height: '35px',
    borderRadius:'15px',
    margin:'5px',
  }
  


export default Formcon