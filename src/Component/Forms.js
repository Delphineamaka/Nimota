import React, {useState} from 'react'
import Radiobtn from './Radiobtn'

function Forms() {


 const [contact, setContact] = useState({
	yName: '',
	email: '',
	telephone: '',
	cLetter: ''

 })
 function handleChange(event){
	const {name, value} = event.target;
	setContact((preValue) =>{
		return{
			...preValue,
			[name]: value
		}
	})
 }



 function submitClick (){
	console.log('form submitted');
	// event.preventDefault();
 }
 
 function clearForm(){
	setContact({
		yName: '',
	    email: '',
	    telephone: '',
	    cLetter: ''


	})
 }
  
 
  return (
	<div className=' App ' >
	<form >
	    <div className='name'>
			<h5>Name <span className='span'>*</span></h5>
			<label>First and last name</label> <br />
			<input 
			className='Input'
			type='text'
			name='yName'
			value={contact.yName}
			required 
			placeholder='your answer'
 
		  onChange={handleChange}
			/>
			 
		</div>

		 <div className='email'>
			<label>Email <span className='span'>*</span></label> <br />
			<input 
			className = 'Input'
			name='email'
			value={contact.email}
			  onChange={handleChange}
			type='email'
			required 
		   placeholder='youremail@gmail.com'
		 
			/>
			 
		 </div>

		 <div className='fone'>
			<label>phone number  <span className='span'>*</span></label> <br />
			<input 
			className = 'Input'
			name='telephone'
			value={contact.telephone}
			  onChange={handleChange}
			type='tel'
			 required  
			placeholder='+234...'

			/>
			 
		 </div>
        <Radiobtn />

		 <div  className = ' letter' >
			<label>Submit your cover letter</label> <br />
			 
			<textarea 
			 className='cover'
			 name='cLetter'
			 value={contact.cLetter}
			rows='4'
			cols='50'
			required  
            placeholder='your cover letter'
			onChange={handleChange}
			/>
		 </div> 
		 <div className='btn'>
			<button type='submit' className='submit'onClick={submitClick} >Submit</button>
			 
				
			
			
			<input type='reset' className='reset'
			value='clear form' onClick={clearForm}
			 />
		 </div>
		 </form>
	</div>
  )
}

export default Forms;
