import { useState } from "react"


function App() {
  
  let [name , setName] = useState("");
  let [caption , setCaption] = useState("");
  let [arr , setArr] = useState([]);
  let [show , setShow] = useState(false);
  let [error , setError] = useState({

    name: "",
    caption: ""

  })

  let [index , setIndex] = useState("")

  let nameregex = /^[a-zA-Z ]{4,40}$/;

  let captionregex = /^[a-zA-Z ]{10,100}$/

  let handletodo = () =>{
   
   if(name == ""){
    
    setError({name: "Please Enter Your Name"})

   }

   else if(!name.match(nameregex)){

    setError({name: "Please Enter Your valid Name"})

   }
   
   else if( caption == "" ){
   
    setError({caption: "Please Enter Your caption"})

   }
 
   else if(!caption.match(captionregex)){

    setError({caption: "Please Enter 10 word and Character Submit"})

   }
   
   else{
 
    setError({caption: ""})

     let arr2 = [...arr]
     arr2.push({
      
       name:name,
       caption:caption
 
     })
     
     setArr(arr2)
     setName("")
     setCaption("")

   }
  }


  let handledelete = (index) =>{

    let arr3 = [...arr]

    arr3.splice(index , 1);

    setArr(arr3)
     
  }
  
  let handleedit = (item , index) =>{

    setName(item.name);
    setCaption(item.caption)
    setShow(true)
    setIndex(index)
  }

  let handleupdate = () =>{

    
    let arr4 = [...arr]

    arr4[index]=({

      name:name,
      caption:caption

    })

    setArr(arr4)

  }

  return (
    <>
       
       <div className="todo_main">

            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="input_1"/> <br/>
            <p>{error.name}</p>
            <input value={caption} onChange={(e) => setCaption(e.target.value) } type="text" placeholder="caption" className="input_2"/> <br/>
            <p>{error.caption}</p>

            {
              show ?

              <button onClick={handleupdate} className="todo_btn">Update</button>
              
              :
              
              <button onClick={handletodo} className="todo_btn">Add Todo</button>
              
              
            }


       </div>

     
   { 
   
   arr.map((item , index) =>(

        <>

          <div className="tode_list_main">
              <li className="todo_list">{item.name}</li>
              <li className="todo_list">{item.caption}</li>

              <div className="todo_list_btn">   
                <button onClick={() => handleedit(item , index)} className="add_btn">Edit</button>
                <button onClick={() => handledelete(index)} className="add_btn">Delete</button>
              </div>

          </div>

        </>

   ))
   
   }

    </>
  )
}

export default App
