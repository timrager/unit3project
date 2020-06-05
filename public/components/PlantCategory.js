
class PlantCategory extends React.Component {
    render () {
        console.log(location)

        return (
            <div className="plantCat">
                {this.props.plantData.map((plant) => {
                    return (
                        <div>
                            <h1>{plant.name}</h1>
                            <Link to={`/${plant._id}`}plant={plant} ><img className="plantMenu" src={plant.image} /></Link>
                            <p>{plant.plantCare.water}</p>
                            <p>{plant.plantCare.sun}</p>
                            <button className="cartButton" onClick={() => shoppingCart.push(plant)}>Add to Cart</button>
                            {console.log(shoppingCart)}
                        </div>
                        )
                        // Need a show route in App
                    // Add a component here to show current item
                })}
            </div>
            )
    }
}