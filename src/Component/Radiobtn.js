import React,{useState} from 'react'

function Radiobtn() {
 const [currentRadioValue, setCurentRadioValue] = useState('')
	 
 function handleChange(event){
		 setCurentRadioValue(event.target.value);
	  }
  return (
	<div className='field radioBtn' >
			<h4 required='true'>Field<span> *</span></h4>
		 <div>
			<input type='radio' 
			required = 'true'
			onChange={handleChange}
			checked={currentRadioValue === 'DevOps'}
			 value='DevOps'/> 
			<label>DevOps</label>
		</div><br />

			<div>
				<input type='radio'
			      value='Full-Stack Development' 
				  onChange={handleChange}
				   checked={currentRadioValue ==='Full-Stack Development' }

				/>
			 <label>Full-Stack Development</label>
			</div> <br/>

		 <div>
			<input  type='radio'
			  value='Front-End Development'
			  onChange={handleChange}
			  checked={currentRadioValue === 'Front-End Development'}

			/>
		    <label>Front-End Development</label>
		 </div> <br />
       
	   <div>
		  <input  type='radio'
			value='Back-End Development'
			onChange={handleChange}
			checked={currentRadioValue==='Back-EndDevelopment' }
		  />
		  <label>Back-End Development</label>
       </div> <br />

	 <div>
		 <input type='radio' 
		   value='Mobile Development (iOS, Android)'
		   onChange={handleChange}
		   checked={currentRadioValue === 'Mobile Development (iOS, Android)'}
		  />
		 <label>Mobile Development (iOS, Android)</label>
		</div> <br />

		<div>
			<input type='radio'
		       value='Product Design'
		       onChange={handleChange}
		       checked={currentRadioValue ==='Product Design' }
		   />
		 <label>Product Design</label>
		</div> <br />

		<div>
			<input 
		      type='radio'
		      value='Product Management'
		      onChange={handleChange}
		      checked={currentRadioValue === 'Product Management'}
		   />
		    <label>Product Management</label>
		</div> <br />

		<div>
			<input type='radio'
			  value='Other:' 
			  required
			  onChange={handleChange}
		      checked={currentRadioValue === '0ther:'}

			/> 
		    <label>Other:</label> 
		</div> 
		
    </div>
  )
}

export default Radiobtn;
