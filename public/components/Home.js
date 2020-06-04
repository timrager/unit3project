class Home extends React.Component {
    render () {
        return (
            <div>
                {this.props.plantCat.map((category) => {
                    return <CatCard category={category} />
                })}
            </div>
        )
    }
}