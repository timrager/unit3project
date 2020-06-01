// import seedImages from '../../models/seedImages';

class Api extends React.Component {
    state = {
        plants: [],
    }

    componentDidMount() {
        this.getData();
    }

    getData = (event) => {
        fetch('/oxygen')
            .then(response => response.json())
            .then(data => this.setState({ plants: data }))
    }

    remove = (id, index) => {
        fetch(`/oxygen/${id}`, {
            method: "DELETE"
        }).then((response) => {
            this.setState({
                plants: [...this.state.plants.slice(0, index), ...this.state.plants.slice(index+1)]
            })
        });
    }

    render() {
        return(
            <div>
                <h1>Plants</h1>
                <ul>
                    {this.state.plants.length > 0 && this.state.plants.map((plant, index) => {
                    return <li>
                        {plant.category === "Low Maintenance" ? plant.name : ''} 
                        {/* <image src={`${seedImages}/${plant.name}.jpg`}></image> */}
                        <button onClick={() => this.remove(plant._id, index)}>Delete</button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}