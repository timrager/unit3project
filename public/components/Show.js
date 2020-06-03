class Show extends React.Component {
    render () {
        return (
            <div>
            <div id="image-div">
                <img src={this.state.image} />
            </div>
            <div id="info-div">
                <h3>{this.state.name}</h3>
                <h3>Caring for Your Plan</h3>
                <p>{this.state.plantCare}</p>
            </div>
            </div>
        )
    }
}