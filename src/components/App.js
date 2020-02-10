import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

class App extends React.Component{
    render(){
        return ( 
        <div className ="ui container">
            <SearchBar/>
        </div>
        );
    }
}

export default App;