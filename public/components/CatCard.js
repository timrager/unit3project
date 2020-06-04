
class CatCard extends React.Component {
    render () {
        return (
            <div className="plantBox">
                <Link to={`/${this.props.category}`} ><img className="plantMenu" src='https://cdn.shopify.com/s/files/1/0212/1030/0480/products/Mona-Lisa-Lipstick-Plant-Hanging-Basket.jpg?v=1577197824' /></Link>
                <h3>{this.props.category}</h3>
            </div>
        )
    }
}