// import { BrowserRouter, Route, Link } from "react-router-dom";
const { BrowserRouter, Link, Switch, Route } = ReactRouterDOM;

const plantCat = ['low-maintenance', 'pet-friendly', 'mood-booster', 'air-purifying'];

class App extends React.Component{

    state = {
        user: {
            name: '',
            email: '',
            password: '',
            isLoggedIn: false
        },
        plants: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = (event) => {
        fetch('/oxygen')
            .then(response => response.json())
            .then(data => this.setState({ plants: data }))
    }
    
    handleSignUp = (event) => {
        event.preventDefault();

        fetch('/user/signup', {
            body: JSON.stringify({
                name: this.state.user.name,
                email: this.state.user.email,
                password: this.state.user.password,
                shippingStreet: this.state.user.shippingStreet,
                shippingCity: this.state.user.shippingCity,
                shippingState: this.state.user.shippingState,
                shippingZip: this.state.user.shippingZip,
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
                    user: {
                        isLoggedIn: true,
                        name: '',
                        email: '',
                        password: '',
                        shippingStreet: '',
                        shippingCity: '',
                        shippingState: '',
                        shippingZip: '',
                    }
                })
            })
        }

    handleLogOut = () => {
        this.setState({
            user: {
                name: '',
                email: '',
                password: '',
                isLoggedIn: false
            }
        })
        localStorage.clear();
    }

    handleLogIn = (event) => {
        event.preventDefault();

        fetch('/user/login', {
            body: JSON.stringify({
                email: this.state.user.email,
                password: this.state.user.password,
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
                    user: {
                        isLoggedIn: true,
                        email: '',
                        password: ''
                    }
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
                <BrowserRouter>
                    {/* <nav>
                        <Link to="/low-maintenance">Low Maintenance</Link>
                        {plantCat.map((plantCat) => {
                            return (
                            <Link to={`/${plantCat}`}>{plantCat}</Link>
                            )
                        })}
                    </nav> */}
                    {this.state.user &&
                    <Header user={this.state.user}/>
                    }
                    <Switch>
                        <Route path="/login"
                            render={() => {
                                return <UserLogin user={this.state.user}/>
                            }}
                        />

                        {this.state.plants.length > 0 && plantCat.map((catName) => {
                            let plantData = this.state.plants.filter((plant) => {
                                let currentCat = plant.category.toLowerCase().replace(/\s/g, '-')
                                return currentCat === catName 
                            })
                            return (
                                <Route path={`/${catName}`} 
                                render={(props) => {
                                    return (
                                        <PlantCategory plantData={plantData}  />
                                    )
                                }}
                                />
                            )
                        })}

                        <Route path="/:id"
                            render={(props) => {
                                return (
                                    <Show />
                                )
                            }}
                             />

                        <Route path="/"
                            render={() => {
                                return <Home plantCat={plantCat}/>
                            }}
                        />
                    </Switch>
                    <Footer />
                </BrowserRouter>
                    {/* <UserLogin 
                        email={this.state.user.email}
                        password={this.state.user.password}
                        handleLogIn={this.handleLogIn}
                        handleFormInput={this.handleFormInput}
                    />
                    
                    <NewUser
                        name={this.state.user.name}
                        email={this.state.user.email}
                        password={this.state.user.password}
                        shippingStreet={this.state.user.shippingStreet}
                        shippingCity={this.state.user.shippingCity}
                        shippingState={this.state.user.shippingState}
                        shippingZip={this.state.user.shippingZip}
                        handleFormInput={this.handleFormInput}
                        handleSignUp={this.handleSignUp}
                    /> */}
                {/* <Plant />
                <Show /> */}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));