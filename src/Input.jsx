import React, { useState } from 'react';
import './App.css';


const Input = (props)=>{
    const [cnote , Setcnote] = useState({
        title: '',
        note: ''
    });
    const Get = (e)=>{
        const {value , name} = e.target;
        Setcnote((prevdata)=>{
            return (
                {
                    ...prevdata , 
                    [name] : value
                }
                );
        });
        // props.name(name);
    }
    const Go = ()=>{
        if( (document.getElementById("title").getAttribute("value") !== "")){
            props.get(cnote);
        }
        else{
            alert("You must enter title field.");
        }
    }
    return (
        <React.Fragment>
            <div className="box" id="box_input">
                <div className="inputs">
                    <input type="text" name="title" placeholder="Title*" autoComplete="off" id="title" className="title" value={cnote.title} required onChange={Get} />
                    <br />
                    <textarea name="note" placeholder="Write something here..." className="note" id="note" value={cnote.note} required onChange={Get} />
                    <div className="add" onClick={Go}>
                        <button>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Input;
