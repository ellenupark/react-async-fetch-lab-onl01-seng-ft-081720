import React, { Component } from 'react';

class App extends Component {
    componentDidMount() {
        return fetch('http://api.open-notify.org/astros.json')
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default App;
