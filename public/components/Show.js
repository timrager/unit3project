class Show extends React.Component {
    render () {
        const {name, image, plantCare, size, type} = this.props.plantData;
        return (
            <div>
                <div id="image-div">
                    <img src={image} />
                </div>
                <div id="info-div">
                    <h2>{name}</h2>
                    <h3>Plant Type</h3>
                    <h3>{type}</h3>
                    <h3>Caring for Your Plant</h3>
                    <p>{plantCare}</p>
                    <h3>Plant Size</h3>
                    <p>{size}</p>
                </div>
            </div>
        )
    }
}