import React from 'react';

class SearchBar extends React.Component{

    state = {term : ''};

    onInputchange = (event)=>{
            
        event.preventDefault();
        this.setState({term : event.target.value});

    }

    onFormSubmit = (event) => {

        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){

        return(
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>SearchBar</label>
                        <input type='text'
                        value={this.state.term}
                        onChange={this.onInputchange}
                        />
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchBar;