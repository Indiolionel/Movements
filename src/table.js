import { Fragment } from 'react';
import './table.css';
import Button from './button'
import Delete from './delete'


let url = 'http://localhost:5000/move';

function Table({ status }) {

  const listItems = status.map(a => {
    const changeColor = a.Amount > 0 ? 'green' : 'red';

    return (
      <tr className={`atributte ${changeColor}`} key={a.Name}>
        <div className='td'>
        <td>{a.Name}</td>
        <td>{a.Amount}</td>
        </div>
       <button onClick={()=>{Delete(a._id)}} className='btn-delete'><i class="fa-solid fa-trash-can"></i></button> 
         
         </tr>
         
    )
  }

  );


  return (
    <div className='container-table'>
      <div className='table'>

        <h3>Last movements!</h3>
        
        <table >
          <tbody>
          {listItems}
          </tbody>
          
        </table>
        
      </div>

    </div>
  )

}

export default Table;