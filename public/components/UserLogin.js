class UserLogin extends React.Component {
    state = {
        email: '',
        password: ''
    }
    
    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    updatePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    logIn = (event) => {
        event.preventDefault();
        this.props.handleLogIn(this.state);
        this.setState({
            email: '',
            password: ''
        })
    }
    
    render() {

        return(
        <div className="userLoginForm">
            <form onSubmit={this.logIn}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={this.state.email} onChange={this.updateEmail} />
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={this.state.password} onChange={this.updatePassword} />
                    <input type="submit"/>
            </form>
            <button id="createUserProfile"><Link to="/user/signup">New to Oxygen? Create a Profile</Link></button>
        </div>
    )
    }
}

