
class PlantCategory extends React.Component {
    state = {
        user: this.props.user
    }

    addToCart = (plant) => {

        let newItem = this.state.user.shoppingCart.push(plant);

        this.setState({
            user: {
                shoppingCart: [...newItem, ...this.state.user.shoppingCart]
            }
        })
        console.log(`User State: ${this.state.user}`);
        console.log(`shoppingCart: ${this.state.user.shoppingCart}`);

    }
    
    
    render () {
        console.log(this.props.user)
        return (
            <div className="plantCat">
                {this.props.plantData.map((plant) => {
                    return (
                        <div>
                        <h1>{plant.name}</h1>
                        <Link to={`/${plant._id}`}plant={plant} ><img className="plantMenu" src={plant.image} /></Link>
                        <p>{plant.plantCare.water}</p>
                        <p>{plant.plantCare.sun}</p>
                        <button onClick={() => this.addToCart(plant)}>Add to Cart!</button>
                        </div>
                        )
                })}
            </div>
        )
    }
}