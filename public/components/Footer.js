const React = require('react')

class Footer extends React.Component {
    render () {
        return (
            <div>
                <h1>Finding my footing</h1>
                {/* Images Coming Soon */}
                <a href="#">Instagram</a>
                <a href="#">Pintrest</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
            </div>
        )
    }
}

module.exports = Footer;