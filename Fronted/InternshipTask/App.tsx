import React from 'react';
import AuthContext from './Authentication/AuthContext';

const App: React.FC = () => {
    return (
        <div className="App">
            <div>
                <h1>To-Do Application</h1>
                <AuthContext/>
            </div>   
        </div>
    );
};

export default App;
