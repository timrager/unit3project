const React = require('react')

class Header extends React.Component{

    render(){

        return(

            <header>
                <div id="logo"></div>
                <div id="avatar"></div>
                <div id="cart"></div>
                <div id="hamburger"></div>
            </header>

        )
    }

}

module.exports = Header;