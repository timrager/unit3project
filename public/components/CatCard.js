
class CatCard extends React.Component {
    render () {
        return (
            <div className="plantBox">
                {/* Would I use an href tag here or a Link tag? */}
                {/* Would I put the onClick function here or in the App Component */}
                {/* <a href={}><img src={this.props.image} onClick={} /></a> */}
                <img className="plantMenu" src={this.props.image} />
                <h3>{this.props.category}</h3>
                <p>{this.props.info}</p>
            </div>
        )
    }
}