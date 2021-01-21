import React from 'react';
import './App.css';

const Output = (props)=>{
    const Deletebox = (e)=>{
        console.log(e);
        const arr = props.op.map((v,i)=>{
            if(e !== i)
            {
                return v;
            }
        });
        for(let a=e;a<arr.length;a++){
            arr[a] = arr[a+1];
        }
        arr.length -= 1;
        props.update(arr);
    };
    return (
        props.op.map((v , i)=>{
        // console.log("Title : ",v.title);
        // console.log("Note : ",v.note);
        return (
            <React.Fragment>
                <div className="box_o" id={i}>
                    <div className="delete">
                        <button onClick={()=>Deletebox(i)}><i className="fa fa-trash" aria-hidden="true" onClick={()=>Deletebox(i)}></i></button>
                    </div>
                    <div className="title_o">
                        <h3>{v.title}</h3>
                    </div>
                    <div className="note_o">
                        <p>{v.note}</p>
                    </div>
                </div>   
            </React.Fragment>
        )
    })
    )
}

export default Output;
