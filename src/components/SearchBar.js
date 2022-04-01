import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {

    const [term, setTerm] = useState('');

   const  onSubmit = (event) => {

        event.preventDefault();
        onFormSubmit(term);
    }

    const onInputchange = (event)=>{
            
        event.preventDefault();
        setTerm(event.target.value);

    }
        
    return(
        <div className='search-bar ui segment'>
            <form onSubmit={onSubmit} className='ui form'>
                <div className='field'>
                    <label>Video Search</label>
                    <input type='text'
                    value={term}
                    onChange={onInputchange}
                    />
                </div>
            </form>

        </div>
    )


}




export default SearchBar;