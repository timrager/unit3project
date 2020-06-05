// import { BrowserRouter, Route, Link } from "react-router-dom";
const { BrowserRouter, Link, Switch, Route } = ReactRouterDOM;

const plantCat = [
    {
        category: 'low-maintenance',
        image: 'https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Lechuza-Color-35-White_3bbba3d9-a492-43f2-b2f2-e95ed97bd8d0.jpg?v=1544499885'
    },
    {
        category: 'pet-friendly',
        image: 'https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/african-violet-houseplant.jpg?itok=qiMZjFZs'
    },
    {
        category: 'mood-booster',
        image: 'https://thomsonslandscaping.com/wp-content/uploads/1947-1.jpg'
    },
    {
        category: 'air-purifying',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61gpcJHlfIL._AC_SX466_.jpg'
    }
]

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

    handleLogIn = ({email, password}) => {

        fetch('/user/login', {
            body: JSON.stringify({
                email: email,
                password: password,
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
                        {this.state.user &&
                        <Route path='/login'
                            render={() => {
                                return <UserLogin user={this.state.user} handleLogIn={this.handleLogIn}/>
                            }}
                        />
                        }

                        {this.state.user && <Route path='/newuser' 
                            render={() => {
                                return <NewUser handleSignUp={this.handleSignUp}/>
                        }}
                        />
                        }

                        <Route path="/userProfile"
                            render={(props) => {
                                return (
                                    <UserProfile userData={this.state.user} />
                                )
                            }}
                        />

                        {this.state.plants.length > 0 && plantCat.map((catName) => {
                            let plantData = this.state.plants.filter((plant) => {
                                let currentCat = plant.category.toLowerCase().replace(/\s/g, '-')
                                return currentCat === catName.category
                            })
                            return (
                                <Route path={`/${catName.category}`} 
                                render={(props) => {
                                    return (
                                        <PlantCategory plantData={plantData}  />
                                    )
                                }}
                                />
                            )
                        })}

                        {this.state.plants.length > 0 &&
                            <Route path={`/:id`}
                                render={(props) => {
                                    let id = location.pathname
                                    let newId = id.replace('/', '')
                                    let singlePlant = this.state.plants.find((plant) => {             
                                        return plant._id === newId;
                                    })
                                    return (
                                        <Show singlePlant={singlePlant} />
                                    )
                                }}
                            />
                        }

                        <Route path="/"
                            render={() => {
                                return <Home plantCat={plantCat} />
                            }}
                        />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));