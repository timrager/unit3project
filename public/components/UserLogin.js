class UserLogin extends React.Component {
    state = {
        name: this.props.user.name,
        email: this.props.user.email,
        password: this.props.user.password
    }
    
    handleFormInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    
    render() {
        const { handleLogIn, handleFormInput, password, email } = this.props;
    return(
        <div className="userLoginForm">
            <form onSubmit={handleLogIn}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={this.state.email} onChange={this.handleFormInput} />
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={this.state.password} onChange={this.handleFormInput} />
                    <input type="submit"/>
            </form>
        </div>
    )
    }
}