
class PlantCategory extends React.Component {
    render () {
        return (
            <div className="plantCat">
                {this.props.plantData.map((plant) => {
                    return (
                        <div>
                        <h1>{plant.name}</h1>
                        <Link to={`/${plant._id}`}plant={plant} ><img className="plantMenu" src={plant.image} /></Link>
                        <p>{plant.plantCare.water}</p>
                        <p>{plant.plantCare.sun}</p>
                        </div>
                        )
                })}
            </div>
        )
    }
}