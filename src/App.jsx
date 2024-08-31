import { useState } from 'react'
import Quots from './quots';


function App() {
 
  const [cat , setCat]= useState("");

  const [qu , setQu] = useState("");

  function author(event){
    let catvalue = event.target.value;
    setCat(catvalue);
    
  }
   
   
    
    
   function ge  (){
    const result =Quots.filter(quote=>quote.author === cat)
    console.log(result)

    

      const ransdomv = Math.floor(Math.random()*result.length)
      console.log(ransdomv)
      setQu(result[ransdomv].quote);
     
    }
    function back(){
      setCat("");
    }

  return (
    
    <>
    <div className=' h-[100vh] w-[100]   flex justify-center items-center'>
      <div className='h-[500px] w-[500px] bg-orange-500  rounded-3xl flex justify-center items-center' >
      { cat? (

        <>
       
        <button className='h-[30px] w-[100px] bg-red-500 rounded-xl mb-[400px] ml-[10px] ' onClick={back}>back</button>
       
        <p className='h-[200px] w-[700px]'>{qu}</p>
        <button className='h-[30px] w-[150px] bg-red-500 rounded-xl relative   mt-[200px] mr-[50px] 'onClick={ge}>genarate</button>
        </>

      ) : (
        
        <>
  <select name="" id=""onChange={author} value={cat}  >
  <option value="select author">select author</option>
     <option value="Oscar Wilde">Oscar Wilde</option>
     <option value="Frank Zappa">Frank Zappa</option>
     <option value="Albert Einstein">Albert Einstein</option>
     <option value=" Elbert Hubbard"> Elbert Hubbard</option>
  </select>
  </>
  )}
   </div>
  </div>
    </>
  );
}

export default App

