// import React, { Component } from 'react'
// class Contact extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//         };
//       }

//     handleEmailChange (e){
//         this.setState({email: e.target.value});
//      }
//      handlePasswordChange (e) {
//         this.setState({password: e.target.value});
//      }
//      handleLogin () {
//         alert("EMail: " + this.state.email);
//         // console.log("Password: " + this.state.password);
//     }

//   render() {
//     return (
//       <div>
          
//         <form>
//           <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
//           <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
//           <button type="button" onClick={this.handleLogin}>Login</button>
//         </form>

//     </div>
//     )
//   }
// }
// export default Contact


import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
    };
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { fname, lname, email } = this.state;
     alert("EMail: " + this.state.email);
    // axios.post('/', { fname, lname, email })
    //   .then((result) => {
    //     //access the results here....
    //   });
  }

  render() {
    const { fname, lname, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="fname" value={fname} onChange={this.onChange} />
        <input type="text" name="lname" value={lname} onChange={this.onChange} />
        <input type="text" name="email" value={email} onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Contact