import React from 'react'
import './Cruds.css';


const Cruds = ()=>{
    return(
        <div className='main-list'>
        <div className="box-containers">
         <div className="header">
          <ul>
              <li><i class="fa-solid fa-pen"></i> Create</li>
              <li><i class="fa-solid fa-file-lines"></i> Read</li>
              <li><i class="fa-solid fa-square-pen"></i> Updata</li>
              <li><i class="fa-solid fa-trash-can"></i> Delete</li>

          </ul>
         </div>
            
          </div>  

      </div>
    )
}
export default Cruds;