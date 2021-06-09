import React from 'react';
import ShowMyInput from './showMyName';

class SearchBarClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            placeholder: 'Search Bar Class',
            inputValue: '',
        };
    }
    
    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }
    
    render() {
        return(
            <div> 
                <h1>Test capture texte saisi</h1>
                <input type="text" placeholder={this.state.placeholder} onChange={this.handleChange.bind(this)}/>
                <button>Send</button>
                <ShowMyInput inputValue={this.state.inputValue} />
            </div>
        )
    }
}

export default SearchBarClass;