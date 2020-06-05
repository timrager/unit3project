class NewUser extends React.Component {
    // state = {
    //     email: '',
    //     password: '',
    //     name: '',
    //     shippingStreet: '',
    //     shippingCity: '',
    //     shippingState: '',
    //     shippingZip: ''
    // }
    
    // updateEmail = (event) => {
    //     this.setState({
    //         email: event.target.value
    //     })
    // }

    // updatePassword = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    // updateName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // updateShippingStreet = (event) => {
    //     this.setState({
    //         shippingStreet: event.target.value
    //     })
    // }

    // updateShippingCity= (event) => {
    //     this.setState({
    //         shippingCity: event.target.value
    //     })
    // }

    // updateShippingZip= (event) => {
    //     this.setState({
    //         shippingZip: event.target.value
    //     })
    // }

    render() {
        console.log(this.props)
    return(
        <div className="newUserForm">
            <form>
                <h2>Create a Profile</h2>
                <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.name} onChange={this.handleFormInput} />
                <label htmlFor="email">Email</label>    
                    <input type="text" id="email" value={this.email} onChange={this.handleFormInput} />
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={this.password} onChange={this.handleFormInput} />
                <label htmlFor="shippingStreet">Street Address</label>
                    <input type="text" id="shippingStreet" value={this.shippingStreet} onChange={this.handleFormInput} />
                <label htmlFor="shippingCity">City</label>
                    <input type="text" id="shippingCity" value={this.shippingCity} onChange={this.handleFormInput} />
                <label htmlFor="shippingZip">Zip Code</label>
                    <input type="text" id="shippingZip" value={this.shippingZip} onChange={this.handleFormInput} />
                    <input value='Submit' type='submit' onClick={this.props.handleSignUp}></input> 
            </form>
        </div>
    )
    }
}

