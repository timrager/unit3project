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
                <Header user={this.state}/>
                <BrowserRouter>
                    <nav>
                        <Link to ="/testme">TestLink</Link>
                        <Link to="/low-maintenance">Low Maintenance</Link>
                        {plantCat.map((plantCat) => {
                            return (
                            <Link to={`/${plantCat}`}>{plantCat}</Link>
                            )
                        })}
                    </nav>
                    <Switch>

                        <Route path="/testme" 
                            render={(props) => { 
                                return ( <Sample1 user={this.state}/> ) }} 
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
                {/* <Api /> */}
                {/* <Plant />
                <Show /> */}
                {/* <CatCard 
                    image="https://www.thespruce.com/thmb/qrWRABcI6K_plsLUn2cX8WS_-QE=/2358x1613/filters:fill(auto,1)/kararileysempervivum-18-crop-565dd32562e34681a627e2de84f691e1.jpg" 
                    category="Low Maintenance" 
                    info="Don't feel like you have a green thumb? This category of plants is designed for the first time plant owner, or the human that would like to have some plants in their life, but may have not had good luck keeping previous plant babies alive in the past." 
                />
                <CatCard 
                    image="https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/african-violet-houseplant.jpg?itok=qiMZjFZs" 
                    category="Air Purifying" 
                    info="These plants are great for purifying your home and office. If you feel as though your space has become musty and stale, then this category of plant is for you!" 
                />
                <CatCard 
                    image="https://www.jacksonandperkins.com/images/xxl/27677.jpg" 
                    category="Pet Loving" 
                    info="No more worries about which plants are safe for your furry family members. This plant category is all safe for plants to nom on." 
                />
                <CatCard 
                    image="https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Pygmy_Date_Palm_450_1_grande.jpg?v=1549683425" 
                    category="Mood Boosting" 
                    info="If cabin fever is giving you the blues, pick a plant from this category and let the good vibes flow." 
                />
                <Footer /> */}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));