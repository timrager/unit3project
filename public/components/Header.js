const { BrowserRouter, Link, Route } = ReactRouterDOM;

class Header extends React.Component{

    render(){
        let welcomeUser;
        if (this.props.user.isLoggedIn) {
           welcomeUser = (<button id="avatar" className="headerButton"><Link to="/user/profile"> Welcome back, {this.props.user.name}!</Link></button>)
        } else {
           welcomeUser = (<button id="avatar" className="headerButton"><Link to="/user/login">Log In</Link></button>)
        }

        // if (this.props.user.isLoggedIn) {
        //     welcomeUser = (<button id="avatar" className="headerButton">Welcome back, {this.props.user.name}!</button>)
        //  } else {
        //     welcomeUser = (<button id="avatar" className="headerButton">Log In</button>)
        //  }

        return(
            <header>
                <div id="logo">Oxygen</div>
                <div className="buttonContainer">
                    {welcomeUser}
                    <button id="cart" className="headerButton">Cart</button>
                    <button id="hamburger" className="headerButton">Menu</button>
                </div>
            </header>
        )

    }
    
}

