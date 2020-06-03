
class CatCard extends React.Component {
    render () {
        const { category, plants } = this.props;
        // console.log(this.props)
        // console.log(plants);
        // plants.map((plant) => {
        //     if (plant.name === "undefined") {
        //         console.log('error');
        //     } else (console.log(plant.name));
        // })
        return (
            <div className="plantBox">
               <img className="plantMenu" src={this.props.image} />
                <h3>{this.props.category}</h3>
                <p>{this.props.info}</p>
            </div>
        )
    }
}