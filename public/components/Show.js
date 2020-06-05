class Show extends React.Component {
    render () {
        console.log(this.props.user.faveList);
        return (
            <div>
                <div id="image-div">
                    <img src={this.props.image} />
                </div>
                <div id="info-div">
                    <h3>{this.props.name}</h3>
                    <h3>Caring for Your Plant</h3>
                    <p>{this.props.plantCare}</p>
                </div>
            </div>
        )
    }
}