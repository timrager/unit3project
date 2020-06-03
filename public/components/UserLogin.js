class UserLogin extends React.Component {
    render() {
        const { handleLogIn, handleFormInput, password, email } = this.props;
    return(
        <div className="userLoginForm">
            <form onSubmit={handleLogIn}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={email} onChange={handleFormInput} />
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={handleFormInput} />
                    <input type="submit"/>
            </form>
        </div>
    )
    }
}