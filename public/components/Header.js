const { BrowserRouter, Link, Route } = ReactRouterDOM;

class Header extends React.Component{

    render(){
        let welcomeUser;
        if (this.props.user.isLoggedIn) {
           welcomeUser = (<button id="avatar" className="headerButton"><Link to="/userprofile"> Welcome back, {this.props.user.name}!</Link></button>)
        } else {
           welcomeUser = (<button id="avatar" className="headerButton"><Link to="/login">Log In</Link></button>)
        }

        return(
            <header>
                <div id="logo">
                    <h2>Oxygen</h2>
                    </div>
                <div className="buttonContainer">
                    {welcomeUser}
                    <button id="cart" className="headerButton">Cart</button>
                    <button id="home" className="headerButton"><Link to="/">Home</Link></button>
                    <button id="hamburger" className="headerButton">Menu</button>
                </div>
            </header>
        )

    }
    
}

