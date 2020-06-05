const { BrowserRouter, Link, Route } = ReactRouterDOM;

class Header extends React.Component{

    render(){
        let welcomeUser;
        if (this.props.user.isLoggedIn) {
           welcomeUser = (<button id="avatar" className="headerButton"> Welcome back, {this.props.user.name}!</button>)
        } else {
           welcomeUser = (<button id="avatar" className="headerButton"><Link to="/login">Log In</Link></button>)
        }

        return(
            <header>
                <div id="logo">Oxygen</div>
                <div className="buttonContainer">
                    {welcomeUser}
                    <button id="cart" className="headerButton"><Link to="/userProfile" >Cart</Link></button>
                    <button id="home" className="headerButton"><Link to="/">Home</Link></button>
                </div>
            </header>
        )

    }
    
}

