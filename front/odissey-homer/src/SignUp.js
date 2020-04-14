import React from 'react';

const initialState = {
    email: '',
    password: '',
    name: '',
    lastname: ''
}


class SignUp extends React.Component {
constructor(props) {
    super(props);
    this.state= initialState
}

updateEmailField = (event) => {
    this.setState({email: event.target.value})
}

updatePasswordField = (event) => {
    this.setState({password: event.target.value})
}

updateNameField = (event) => {
    this.setState({name: event.target.value})
}

updateLastnameField = (event) =>  {
    this.setState({lastname: event.target.value})
}

handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault();
}
  render() {
    return(
    <div> 
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="email" name="email" onChange={this.updateEmailField} placeholder="email"/>
            <input type='password' name='password' onChange={this.updatePasswordField}/>
            <input type='text' name='name' onChange={this.updateNameField}/>
            <input type='text' name='lastname' onChange={this.updateLastnameField}/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    );
  }
}

export default SignUp