
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
                    isLoggedIn: true,
                    email: '',
                    password: ''
                })
            })
        
        
    }

    handleFormInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        let showForm;
        if (this.state.isLoggedIn) {
            showForm = (
                <UserLogin 
                    email={this.state.email}
                    password={this.state.password}
                    handleLogIn={this.state.handleLogIn}
                    handleFormInput={this.state.handleFormInput}
                />
            )
        } else {
            showForm = (
                <NewUser
                    email={this.state.email}
                    password={this.state.password}
                    handleFormInput={this.handleFormInput}
                    handleSignUp={this.handleSignUp}
                />
            )
        } 
        return(
            <div>
                <Header />
                    {showForm}
                    {/* <NewUser
                        email={this.state.email}
                        password={this.state.password}
                        handleFormInput={this.handleFormInput}
                        handleSignUp={this.handleSignUp}
                    /> */}
                    
                    {/* <UserLogin 
                        email={this.state.email}
                        password={this.state.password}
                        handleLogIn={this.state.handleLogIn}
                        handleFormInput={this.state.handleFormInput}
                    /> */}
                <Api />
                <Plant />
                <CatCard image="https://www.thespruce.com/thmb/qrWRABcI6K_plsLUn2cX8WS_-QE=/2358x1613/filters:fill(auto,1)/kararileysempervivum-18-crop-565dd32562e34681a627e2de84f691e1.jpg" category="Low Maintenance" info="" />
                <CatCard image="https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/african-violet-houseplant.jpg?itok=qiMZjFZs" category="Air Purifying" info="" />
                <CatCard image="https://www.jacksonandperkins.com/images/xxl/27677.jpg" category="Pet Loving" info="" />
                <CatCard image="https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Pygmy_Date_Palm_450_1_grande.jpg?v=1549683425" category="Mood Boosting" into="" />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));