
class Sample2 extends React.Component{

    render(){

        const { user } = this.props
        console.log(user)
        console.log(this.props)
        return(
            <h1>Look at Console Log - Sample2!</h1>
        )
    }
}