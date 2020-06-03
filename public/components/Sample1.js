
class Sample1 extends React.Component{

    render(){

        const { user } = this.props
        console.log(user)
        console.log(this.props)
        return(
            <h1>Look at Console Log</h1>
        )
    }
}