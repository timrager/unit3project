

class NewUser extends React.Component {
    render() {
        const { handleSignUp, handleFormInput, password, email } = this.props;
    return(
        <form onSubmit={handleSignUp}>
            <input type="text" id="email" value={email} onChange={handleFormInput} />
            <input type="password" id="password" value={password} onChange={handleFormInput} />
            <input type="submit"/>
        </form>
    )
    }
}

class UserLogin extends React.Component {
    render() {
        const { handleLogIn, handleFormInput, password, email } = this.props;
    return(
        <form onSubmit={handleLogIn}>
            <input type="text" id="email" value={email} onChange={handleFormInput} />
            <input type="password" id="password" value={password} onChange={handleFormInput} />
            <input type="submit"/>
        </form>
    )
    }
}

class App extends React.Component{

    state = {
        email: '',
        password: '',
        isLoggedIn: false
    }

    handleSignUp = (event) => {
        event.preventDefault();

        fetch('/user/signup', {
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(response => {
                localStorage.setItem("token", response.token)
                // localStorage.token = response.data.token;
                this.setState({
                    email: '',
                    password: '',
                    isLoggedIn: true
                })
            })
    }

    handleLogOut = () => {
        this.setState({
            email: '',
            password: '',
            isLoggedIn: false
        })
        localStorage.clear();
    }

    handleLogIn = (event) => {
        event.preventDefault();

        fetch('/user/login', {
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(response => {
                localStorage.setItem("token", response.token)
                //localStorage.token = loggedInUser.data.token
                this.setState({
                    isLoggedIn: true
                })
            })
    }

    handleFormInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <Header />
                    {/* <form onSubmit={this.handleSignUp}>
                        <input type="text" id="email" value={this.state.email} onChange={this.handleFormInput} />
                        <input type="password" id="password" value={this.state.password} onChange={this.handleFormInput} />
                        <input type="submit"/>
                    </form> */}
                    <NewUser
                        email={this.state.email}
                        password={this.state.password}
                        handleFormInput={this.handleFormInput}
                        handleSignUp={this.handleSignUp}
                    />
                    
                    <UserLogin 
                        email={this.state.email}
                        password={this.state.password}
                        handleLogIn={this.state.handleLogIn}
                        handleFormInput={this.state.handleFormInput}
                    />
                    {/* <form onSubmit={this.handleLoginIn}>
                        <input type="text" id="email" value={this.state.email} onChange={this.handleFormInput} />
                        <input type="password" id="password" value={this.state.password} onChange={this.handleFormInput} />
                        <input type="submit"/>
                    </form> */}
                <Api />
                {/* <Catcard /> */}
                <CatCard />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));