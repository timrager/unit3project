class NewUser extends React.Component {
    render() {
        const { handleSignUp, handleFormInput, password, email } = this.props;
    return(
        <div className="newUserForm">
            <form onSubmit={handleSignUp}>
                <input type="text" id="email" value={email} onChange={handleFormInput} />
                <input type="password" id="password" value={password} onChange={handleFormInput} />
                <input type="submit"/>
            </form>
        </div>
    )
    }
}