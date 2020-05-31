
class App extends React.Component{
    render() {
        return(
            <div>
                <Header />
                <h1>Testing...</h1>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));