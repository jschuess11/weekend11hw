class App extends React.Component  {
    state = {
        name: "Timothy Himothy",
        age: 22
    }
    render () {
        return (
            <div className = "app-content">
                <h1>Hey Devs</h1>
                <p>My name is { this.state.name } and I am {this.state.age}</p>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("app"))