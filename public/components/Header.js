
class Header extends React.Component{

    render(){

        return(
            <header>
                <div id="logo">Oxygen</div>
                <div className="buttonContainer">
                    <button id="avatar" className="headerButton">Profile</button>
                    <button id="cart" className="headerButton">Cart</button>
                    <button id="hamburger" className="headerButton">Menu</button>
                </div>
            </header>
        )

    }
    
}

