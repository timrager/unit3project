class Plant extends React.Component {

    state = {
        plant: [],

        // name: String,
        // category: String,
        // type: String,
        // image: String,
        // size: String,
        // petFriendly: Boolean,
        // plantCare: {
        //     water: String,
        //     sun: String
        // }
    }

    // router.get('/', (req, res) => {
    //     onClick()plants.find({ category: succulent }, (err, foundPlants) => {
    //         res.json(foundPlants);
    //     })
    // })

    getData = (event) => {
        fetch('/')
    }

    render() {

        return(
            <div className="plantContainer">
                <button ></button>
            </div>
        )
    }
} 