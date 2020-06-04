
class PlantCategory extends React.Component {
    render () {
        return (
            <div className="plantCat">
                {this.props.plantData.map((plant) => {
                    return plant.name;
                    // Add a component here to show current item
                })}
            </div>
        )
    }
}