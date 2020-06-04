class Home extends React.Component {
    render () {
        return (
            <div>
                {this.props.plantCat.map((category, image) => {
                    return <CatCard category={category} />
                })}
            </div>
        )
    }
}