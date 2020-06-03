// import { BrowserRouter, Route, Link } from "react-router-dom";
const { BrowserRouter, Link, Route } = ReactRouterDOM;

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
            name: '',
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
                password: this.state.password,
                name: this.state.name
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

    handleNewUser = (event) => {
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
            })
            .then(createdUser => {
                return createdUser.json()
            })
            .then(jsonedUser => {
                this.setState({
                    isLoggedIn: true,
                    name: '',
                    email: '',
                    password: '',
                    shippingStreet: '',
                    shippingCity: '',
                    shippingState: '',
                    shippingZip: '',
                })
                console.log(jsonedUser);
            })
            .catch(error => console.log(error))
        });
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
                    name={this.state.name}
                    email={this.state.email}
                    password={this.state.password}
                    shippingStreet={this.state.shippingStreet}
                    shippingCity={this.state.shippingCity}
                    shippingState={this.state.shippingState}
                    shippingZip={this.state.shippingZip}
                    handleFormInput={this.handleFormInput}
                    handleSignUp={this.handleSignUp}
                />
            )
        } 
        return(
            <div>
                <Header user={this.state}/>
                <BrowserRouter>
                    <nav><Link to ="/testme">TestLink</Link></nav>
                    <Route path="/testme" 
                    render={(props) => { 
                        return ( <Sample1 user={this.state}/> ) }} 
                    />
                </BrowserRouter>
                    {/* <UserLogin 
                        email={this.state.email}
                        password={this.state.password}
                        handleLogIn={this.handleLogIn}
                        handleFormInput={this.handleFormInput}
                    />
                    
                    <NewUser
                        name={this.state.name}
                        email={this.state.email}
                        password={this.state.password}
                        shippingStreet={this.state.shippingStreet}
                        shippingCity={this.state.shippingCity}
                        shippingState={this.state.shippingState}
                        shippingZip={this.state.shippingZip}
                        handleFormInput={this.handleFormInput}
                        handleSignUp={this.handleSignUp}
                        />
                <Api />
                <Plant /> */}
                {/* <Show /> */}
                {/* <UserProfile />
                <CatCard image="https://www.thespruce.com/thmb/qrWRABcI6K_plsLUn2cX8WS_-QE=/2358x1613/filters:fill(auto,1)/kararileysempervivum-18-crop-565dd32562e34681a627e2de84f691e1.jpg" category="Low Maintenance" info="Don't feel like you have a green thumb? This category of plants is designed for the first time plant owner, or the human that would like to have some plants in their life, but may have not had good luck keeping previous plant babies alive in the past." />
                <CatCard image="https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/african-violet-houseplant.jpg?itok=qiMZjFZs" category="Air Purifying" info="These plants are great for purifying your home and office. If you feel as though your space has become musty and stale, then this category of plant is for you!" />
                <CatCard image="https://www.jacksonandperkins.com/images/xxl/27677.jpg" category="Pet Loving" info="No more worries about which plants are safe for your furry family members. This plant category is all safe for plants to nom on." />
                <CatCard image="https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Pygmy_Date_Palm_450_1_grande.jpg?v=1549683425" category="Mood Boosting" into="If cabin fever is giving you the blues, pick a plant from this category and let the good vibes flow." />
                <Footer /> */}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));