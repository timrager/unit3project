const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class NewUser extends React.Component {
    state = {
        email: '',
        password: '',
        name: '',
        shippingStreet: '',
        shippingCity: '',
        shippingZip: '',
        errors: {
            name: '',
            email: '',
            password: '',
        }
    }

    handleChange = (event) =>{
        event.preventDefault();
        const { id, value } = event.target;
        let errors = this.state.errors;

        switch (id) {
            case 'name': 
                errors.name = value.length < 5 ? 'Full Name must be 5 characters long!' : '';
                break;
            case 'email': 
                errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
                break;
            case 'password': 
                errors.password = value.length < 8 ? 'Password must be 8 characters long!' : '';
                break;
            default:
                break;
          }

        this.setState({
            errors,
            [event.target.id]: event.target.value
        }, () => {
            console.log(errors)
        })
    }

    createUser = (event) => {
        event.preventDefault();
        this.props.handleSignUp(this.state);
        this.setState({
            email: '',
            password: '',
            name: '',
            shippingStreet: '',
            shippingCity: '',
            shippingZip: ''
        })
    }

    render() {

    return(
        <div className="newUserForm">
            <form onSubmit={this.createUser}>
                <h2>Create a Profile</h2>
                <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.name} onChange={this.handleChange} />
                <label htmlFor="email">Email</label>    
                    <input type="text" id="email" value={this.email} onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={this.password} onChange={this.handleChange} />
                <label htmlFor="shippingStreet">Street Address</label>
                    <input type="text" id="shippingStreet" value={this.shippingStreet} onChange={this.handleChange} />
                <label htmlFor="shippingCity">City</label>
                    <input type="text" id="shippingCity" value={this.shippingCity} onChange={this.handleChange} />
                <label htmlFor="shippingZip">Zip Code</label>
                    <input type="text" id="shippingZip" value={this.shippingZip} onChange={this.handleChange} />
                    <input type="submit"/>
            </form>
        </div>
    )
    }
}

