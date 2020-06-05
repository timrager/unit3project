class Show extends React.Component {
    render () {
        // const {name, image, type, plantCare, size} = this.props.singlePlant;
        console.log(this.props.singlePlant.image);
        return (
            <div>
                <div id="image-div">
                    <img src={this.props.singlePlant.image} />
                </div>
                <div id="info-div">
                    <h2>{this.props.singlePlant.name}</h2>
                    <h3>Plant Type</h3>
                    <p>{this.props.singlePlant.type}</p>
                    <h3>Caring for Your Plant</h3>
                    <p>{this.props.singlePlant.plantCare.water}</p>
                    <p>{this.props.singlePlant.plantCare.sun}</p>
                    <h3>Plant Size</h3>
                    <p>{this.props.singlePlant.size}</p>
                </div>
            </div>
        )
    }
}