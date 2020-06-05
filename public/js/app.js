// import { BrowserRouter, Route, Link } from "react-router-dom";
const { BrowserRouter, Link, Switch, Route } = ReactRouterDOM;

// const plantCat = ['low-maintenance', 'pet-friendly', 'mood-booster', 'air-purifying'];

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

    // state = {
    //     user: {
    //         name: '',
    //         email: '',
    //         password: '',
    //         shippingStreet: '',
    //         shippingCity: '',
    //         shippingState: '',
    //         shippingZip: '',
    //         faveList: [],
    //         isLoggedIn: false
    //     },
    //     plants: []
    // }
    state = {
            name: '',
            email: '',
            password: '',
            shippingStreet: '',
            shippingCity: '',
            shippingState: '',
            shippingZip: '',
            faveList: [],
            isLoggedIn: false,
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
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                shippingStreet: this.state.shippingStreet,
                shippingCity: this.state.shippingCity,
                shippingState: this.state.shippingState,
                shippingZip: this.state.shippingZip,
            }),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(response => {
                localStorage.setItem("token", response.token)
                this.setState({
                        isLoggedIn: true,
                        name: '',
                        email: '',
                        password: '',
                        shippingStreet: '',
                        shippingCity: '',
                        shippingState: '',
                        shippingZip: '',
                        faveList: []
                })
            })
        }

    handleLogOut = () => {
        this.setState({
                name: '',
                email: '',
                password: '',
                isLoggedIn: false
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
                    {this.state &&
                    <Header user={this.state}/>
                    }
                    <Switch>
                        {this.state &&
                        <Route path='/login'
                            render={() => {
                                return <UserLogin user={this.state} handleLogIn={this.handleLogIn}/>
                            }}
                        />
                        }

                        {this.state && <Route path='/signup' 
                            render={(props) => {
                                return <NewUser handleSignUp={this.handleSignUp} handleFormInput={this.handleFormInput}/>
                        }}
                        />
                        }

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

                        <Route path="/:id"
                            render={(props) => {
                                return (
                                    <Show />
                                )
                            }}
                        />

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