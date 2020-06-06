class Show extends React.Component {
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
    }
    render () {

        // const {name, image, plantCare, size} = this.props.singlePlant;
        // console.log(this.props.user.shoppingCart);
        return (
            <div className="showPage">
                <div className="plantImage" id="image-div">
                    <img src={this.props.singlePlant.image} />
                </div>
                <div id="info-div">
                    <h2>{this.props.singlePlant.name}</h2>
                    <h3>Caring for Your Plant</h3>
                    <p>{this.props.singlePlant.plantCare.water}</p>
                    <p>{this.props.singlePlant.plantCare.sun}</p>
                    <h3>Plant Size</h3>
                    <p>{this.props.singlePlant.size}</p>
                    <button className="addToCart" onClick={() => this.addToCart(this.props.singlePlant)}>Add to Cart!</button>
                </div>
            </div>
        )
    }
}