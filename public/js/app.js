
class App extends React.Component{
    render() {
        return(
            <div>
                <h1>Testing...</h1>
                <Header />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));