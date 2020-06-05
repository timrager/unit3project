class Home extends React.Component {
    render () {
        return (
            <div>
                <button>
                    <Link to="/userProfile" >User Profile</Link>
                </button>
                {this.props.plantCat.map((card) => {
                    return <CatCard card={card} />
                })}

            </div>
        )
    }
}