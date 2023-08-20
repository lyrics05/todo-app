import React, { useState } from 'react';
import styles from "../Input.module.css"

const Input = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    console.log(data);

    function handleSubmit(e) {
      e.preventDefault();
        if(input == ""){
            alert("please enter a task")
        }else{
            const newTask = {
                id: data.length + 1,
                text: input,
                done: false // Initially set as not done
              };
              setData([...data, newTask]);
              setInput("");
        }
    }

    function handleCheckboxChange(id) {
        const updatedData = data.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        });
        setData(updatedData);
    }

    function handleChange(e) {
       setInput(e.target.value);
    }
    function handleDelete(id) {
        const updatedData = data.filter(d => d.id !== id);
        setData(updatedData);
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={input} placeholder="What's new" />
                <button type="submit">Add</button>
            </form>
            <div className={styles.container}>
                <ul >
                    {data?.map(d => (
                        <div className={styles.containerItems} key={d.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={d.done}
                                    onChange={() => handleCheckboxChange(d.id)}
                                />
                            </label>
                           <li className={d.done? styles.textoSub:null}> {d.text}</li>
                            <img onClick={()=>handleDelete(d.id)} src="/close.svg" alt="" />
                        </div>
                    ))}
                </ul>
               
            </div>
            <h1>TO DO APP</h1>
        </div>
    );
}

export default Input;

/* const Input = ()=>{
    const [data,setData] = useState([])
    const [input,setInput] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        const newTask = {
            id:data.length +1,
            text:input,
            completed: false
        }
      setData([...data, newTask])
    }
    function handleChange(e){
        setInput(e.target.value)
    }
    function handleCheckBox(id){
       const newData =  data.map(task=>{
            if(task.id===id){
                return{...task, completed:!task.completed}
            }
            return task
        })
        setData(newData)
    }
    function handleDelete(id){
        const deleted  = data.filter(d=>d.id!==id)
        setData(deleted)
    }
   return(
    <div>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input onChange={handleChange} type="text" />
            <button>add</button>
        </form>
            <ul>
                {data?.map(d=>{
                    return(
                      <div>
                         <input onChange={()=>handleCheckBox(d.id)} type="checkbox" value={d.completed}/>
                         <li className={d.completed? styles.textoSub:null}>{d.text}</li>
                         <img onClick={()=>handleDelete(d.id)} src="/close.svg" alt="" />
                      </div>
                    )
                })}
            </ul>
    </div>
   )
}

export default Input */