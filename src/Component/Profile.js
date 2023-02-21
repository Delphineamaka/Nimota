import React from 'react'
import img1 from './Asset/img1.png'



 function Profile() {
  return (
	<div className='col'>
	    <div className = 'pro' >
	      <img src={img1} alt='nimota img' />
	   </div>
	   <div className=' pan'>
			<h4><span>Internship application form</span></h4>
			<h5><span><i>Apply for a Fulfilling Internship Experience: Join the Nimota Team</i></span></h5>
	   </div>
   </div>
 
	 
  )
}

export default Profile