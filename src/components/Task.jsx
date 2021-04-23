import React from 'react';
import {FaTimes} from 'react-icons/fa';

export default function Task({task,onDelete,ondobbleClick}) {
    //console.log(task)
    
    return (
        <div >
            {task?task.map((val)=>{
                return(
                    <>
                    <div className={`task ${val.remainder?'reminder':''}`} onDoubleClick={()=>ondobbleClick(val.id)}>
                    <h4 >{val.text}{'   '}                    
                    <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(val.id)}
                    />
                    </h4>
                    <p>{val.day}</p>
                    </div>
                    </>
                )
            })
            :<div>Empty</div>
            }
        </div>
    )
}
