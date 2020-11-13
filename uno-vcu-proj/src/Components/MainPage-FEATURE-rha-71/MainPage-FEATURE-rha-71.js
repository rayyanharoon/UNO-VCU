import React from 'react';
import { Component } from 'react';

class MainPage extends React.Component {
    state = {
        rooms: [
            'Single',
            'Double',
            'Economy Double'
        ],
        searchTerm: ''
    }
    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }
    // dynamicSearch = () => {
    //     return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    // }

    render() {
        return (
            <div className="App">
                <input type='text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder='Search for a room type!'/>
                <br></br>
                <h3>Here is a list of the room types</h3>
                {/* <NamesContainer names={this.dynamicSearch()}/> */}
            </div>
        );
    }
}

export default MainPage;