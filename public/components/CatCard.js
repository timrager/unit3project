class CatCard extends React.Component {
    render () {
        return (
            <div>
                <img src={this.props.image} />
                <h3>{this.props.category}</h3>
                <p>{this.props.info}</p>
            </div>
        )
    }
}