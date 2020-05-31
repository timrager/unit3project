

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
            .then(newUser => {
                localStorage.token = newUser.data.token;
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
            .then(loggedInUser => {
                localStorage.token = loggedInUser.data.token
                this.setState({
                    isLoggedIn: true
                })
                console.log('loggedin')
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
                <h1>Testing...</h1>
                <Header />
                    <form onSubmit={this.handleSignUp}>
                        <input type="text" id="email" value={this.state.email} onChange={this.handleFormInput} />
                        <input type="password" id="password" value={this.state.password} onChange={this.handleFormInput} />
                        <input type="submit"/>
                    </form>
                    
                    <form onSubmit={this.handleLoginIn}>
                        <input type="text" id="email" value={this.state.email} onChange={this.handleFormInput} />
                        <input type="password" id="password" value={this.state.password} onChange={this.handleFormInput} />
                        <input type="submit"/>
                    </form>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));