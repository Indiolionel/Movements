import Dashboard from './dashboard'
import Table from './table'
import { useState } from 'react';
import Modal from './modal'



function App({data}) {

    const [showModal, setshowModal] = useState(false);

    return (
        <>
        
        <div className='container'>
            
        <Dashboard balance={data.balance} onclick={setshowModal}/>
        {showModal ? <Modal onclose={setshowModal}/> : null}

        <Table items={data.items} onclick={setshowModal}/>
        </div>
        
        </>
    
)
    
}

export default App;