
class App extends React.Component{

    render(){

        return(
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));