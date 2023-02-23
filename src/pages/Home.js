import Dashboard from '../dashboard'
import Table from '../table'
import { useEffect, useState, useMemo } from 'react';
import Modal from '../modal'
import Button from '../button'



const url = 'http://localhost:5000/api/movements';


function Home() {

    const [showModal, setshowModal] = useState(false);
    const [datajson, setDatajson] = useState([]);
    const [isLoading, setIsloading] = useState(true)

    const getData = async () => {

        try {
            const tDfetch = await fetch(url);
            const tDfetchJson = await tDfetch.json();

            return setDatajson(tDfetchJson.data);
        }
        catch (err) {
            console.log(err)
            // crear un new State para guardar el error y mostrarlo en pantalla.
        }
    }
    useEffect(() => {

        getData()
        setIsloading(false)
    }, [isLoading]);

    return (
        <>
            <div className='container'>
                <Dashboard status={datajson} onclick={setshowModal} />
                {showModal && <Modal onclose={setshowModal} />}
                <Button onclick={setshowModal} />
                {isLoading ? <div> CARGANDO...</div> : <Table status={datajson} isLoad={setIsloading} />}
            </div>
        </>
    )
}





export default Home;