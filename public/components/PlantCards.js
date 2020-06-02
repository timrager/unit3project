class Plant extends React.Component {

    state = {
        name: String,
        category: String,
        type: String,
        image: String,
        size: String,
        petFriendly: Boolean,
        plantCare: {
            water: String,
            sun: String
        }
    }

    render() {

        return(
            <div className="plantContainer">
                <button className={this.props.something}></button>
            </div>
        )
    }
} 