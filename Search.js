import React,{ Component } from 'react';

class SearchBar extends Component{
    state = {term : ''};
    onInputChange=(event)=>{
        this.setState({term:event.target.value});
    };
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)

    }
    render(){
        return(
            <div className='search-bar jumbotron'>
                <form onSubmit={this.onFormSubmit} className='form-group'>
                    <div className='field'>
                        <label> Video Search </label>
                        <input type="text"
                         className='form-control'
                          value={this.state.term}
                           onChange={this.onInputChange}></input>
                        </div>
                    </form>
                </div>

        )
    }
}
export default SearchBar;