import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import News from './news/pages/News';
import New from './news/pages/New';
import Navigation from './shared/components/navigation/Navigation';
import './App.css';

function App() {
    const [needUpdate, setNeedUpdate] = useState(false);
    const needUpdateHandler = () => setNeedUpdate(!needUpdate);
    
    return (
        <div className="App">
            <Router>
                <Navigation needUpdateHandler={needUpdateHandler} />
                <main className='main-container'>
                    <Routes>
                        <Route path='/' element={<News needUpdate={needUpdate}/>} />
                        <Route path='/news/:newId' element={<New />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
