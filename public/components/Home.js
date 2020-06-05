class Home extends React.Component {
    render () {
        return (
            <div>
                {this.props.plantCat.map((card) => {
                    return <CatCard card={card} user={this.props.user}/>
                })}
            </div>
        )
    }
}