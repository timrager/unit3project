
class CatCard extends React.Component {
    render () {
        const {category, image} = this.props.card;
        const fixCat = (category) => {
            let realCat = category.replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
            return realCat;
        }
        return (
            <div className="plantBox">
                <Link to={`/${category}`} ><img className="plantMenu" src={image} /></Link>
                <h3>{fixCat(category)}</h3>
            </div>
        )
    }
}