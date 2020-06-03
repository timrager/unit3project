class UserLogin extends React.Component {
    render() {
        const { handleLogIn, handleFormInput, password, email } = this.props;
    return(
        <div className="userLoginForm">
            <form onSubmit={handleLogIn}>
                <input type="text" id="email" value={email} onChange={handleFormInput} />
                <input type="password" id="password" value={password} onChange={handleFormInput} />
                <input type="submit"/>
            </form>
        </div>
    )
    }
}