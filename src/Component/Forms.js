import React, {useEffect, useRef, useState} from 'react'
// import axios from 'axios'
import Radiobtn from './Radiobtn'


function Forms() {
	const inputRef = useRef();
	// const errRef = useRef();
	 

  const[user, setUser] = useState('')
   const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
	const [cLetter, setCletter] = useState('')
	const [success, setSuccess] = useState(false);

	useEffect(() =>{
     inputRef.current.focus()
	}, []);


 const handleSubmit =   async (e) =>{
	e.preventDefault();
	console.log(user, email, tel);
	 setSuccess(true)
	 
   
 }
   
  return (
	<>
	 {success ? (
                <section>
                    <h1 style={{textAlign: 'center', just
					: 'center', fontSize: '35px'}}>YOU <i>HAVE SUBMITTED YOUR FORM</i></h1>
                    
                </section>
            ) : (
<div className='App'>
       
	<form onSubmit={handleSubmit} >
	    <div className='name'>
			<h5>Name <span className='span'>*</span></h5>
			<label htmlFor='username'>First and last name</label> <br />
			<input 
			ref={inputRef}
			className='Input'
			id='username'
			type='text'
			name='user'
			value={user}
			required 
			placeholder='your name....'
		     onChange={(e) =>{setUser(e.target.value)}}/>
		</div>

		<div className='email'>
			<label htmlFor='email'>Email <span className='span'>*</span></label> <br />
			<input 
			className = 'Input'
			id='email'
			name='email'
			value={email}
			onChange={(e) =>{setEmail(e.target.value)}}
			type='email'
			required 
		   placeholder='youremail@gmail.com'/>
			 
	    </div>

		<div className='fone'>
			<label htmlFor='telephone'>phone number  <span className='span'>*</span></label> <br />
			<input 
			className = 'Input'
			id='telephone'
			name='tel'
			value={tel}
		onChange={(e) =>{setTel(e.target.value)}}
			type='number'
			 required  
			placeholder='+234...'/>
			 
		</div>
           <Radiobtn />

		<div  className = ' letter' >
			<label>Submit your cover letter</label> <br/>
			 
		 <textarea 
			className='cover'
			id='cLetter'
		    name='cLetter'
		    value={cLetter}
			onChange={(event) =>{setCletter(event.target.value)}}
			rows='4'
			cols='50'
			required  
            placeholder='your cover letter'
			/> 
		</div> 
	     <div className='btn'>
			<button type='submit' className='submit' 
			  >Submit</button>
			<input type='reset' className='reset'
			value='clear form'
			 

			 />
	    </div>
	</form>
	
</div>
)
	 }
</>
  )
  
}

export default Forms;
