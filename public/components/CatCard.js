
class CatCard extends React.Component {
    render () {
        return (
            <div className="plantBox">
                {/* <a href={}><img src={this.props.image} onClick={} /></a> */}
                <Link to={`/${this.props.category}`} ><img className="plantMenu" src='https://cdn.shopify.com/s/files/1/2198/4603/files/IMG_4268_1024x1024.JPG?v=1563762901' /></Link>
                <h3>{this.props.category}</h3>
                <p>This is some info.</p>
            </div>
        )
    }
}