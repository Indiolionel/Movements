import Dashboard from './dashboard'
import Table from './table'
import { useEffect, useState } from 'react';
import Modal from './modal'
import Button from './button'


let url = 'http://localhost:5000/move';

function App() {

    const [showModal, setshowModal] = useState(false);
    const [datajson, setDatajson] = useState([]);


    
    useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log("data",data)
            return setDatajson(data.moveAll);

        })
        .catch(function (error) {
            console.log(error);
        });
    
    }, [])
    

    


    return (
        <>
            <div className='container'>
        <Dashboard status={datajson} onclick={setshowModal} />
         {showModal ? <Modal onclose={setshowModal} /> : null}
         <Button onclick={setshowModal}/>
        <Table status={datajson} /> 
            </div>
        </>

    )

}

export default App;