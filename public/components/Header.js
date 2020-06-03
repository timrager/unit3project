
class Header extends React.Component{

    render(){
        let welcomeUser;
        if (this.props.user.isLoggedIn) {
           welcomeUser = (<button id="avatar" className="headerButton">Welcome back, {this.props.user.name}!</button>)
        } else {
           welcomeUser = (<button id="avatar" className="headerButton">Log In</button>)
        }

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

