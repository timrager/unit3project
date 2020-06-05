
class CatCard extends React.Component {
    render () {
        const {category, image} = this.props.card;
        return (
            <div className="plantBox">
                <Link to={`/${category}`} user={this.props.user}><img className="plantMenu" src={image} /></Link>
                <h3>{category}</h3>
            </div>
        )
    }
}