function App(){
    const [counters,setCounters] =React.useState([
        {id:1,number:0}
    ]);
    const [sum,setSum] = React.useState(0)


    const updateCounter =(id,a)=>{
        let idx = counters.findIndex(el=> el.id === id)
        if(((counters[idx].number)+a)<0)return
        setCounters(prv =>{
            let newArr = [...prv];
            newArr[idx].number += a;
            setSum(sum+a)
            return newArr;
        })
    }


    const  addCounter =(add,id)=>{
        setCounters((prv)=>{
            let newArr = [...prv];
            if(add == 1)newArr.push({id:((newArr[newArr.length-1].id)+ 1),number:0})
            else {
                let idx = counters.findIndex(el=> el.id === id)
                setSum(sum-newArr[idx].number)
                newArr = newArr.filter((a)=>(a.id != id))
            }
            return newArr;
    })
    }


    return(
        <div className="app">
            <h1 className="show-sum">Sum = {sum}</h1>
            <button className="btn-add" onClick={()=>addCounter(1)}>Add Counter</button>
            <hr/>
            {counters.map(el=>(<Counter key={el.id} item={el} updateCounter={updateCounter} addCounter={addCounter}/>))}
        </div>
    )
}
function Counter(props){
    const {item,updateCounter,addCounter} = props
    return(
        <div className="counter">
            <button className="btn btn-dec" onClick={()=>updateCounter(item.id,-1)}>-</button>
            <h3 className="number">{item.number}</h3>
            <button className="btn btn-inc" onClick={()=>updateCounter(item.id,1)}>+</button>
            <button className="btn btn-clr" onClick={()=>updateCounter(item.id,-item.number)}>C</button>
            <button className="btn-add" onClick={()=>addCounter(-1,item.id)}>X</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)