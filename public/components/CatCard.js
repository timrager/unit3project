class CatCard extends React.Component {
    render () {
        return (
            <div className="plantBox">
                <a href={this.props.image}><img className="plantMenu" src={this.props.image} onClick={} /></a>
                <h3>{this.props.category}</h3>
                <p>{this.props.info}</p>
            </div>
        )
    }
}