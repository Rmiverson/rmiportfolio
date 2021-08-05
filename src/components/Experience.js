import React from 'react'

const Experience = () => {
   return (
      <div id="experience">
         <h3>Experience</h3>
         <div className="grid">
            <div className="grid-item">
               <h4>Photo Editor</h4>
               <h5>O'Conner Photography</h5>
               <p>Edited, retouched, and green screened photos for school students and staff.</p>
               <ul>
                  <li>Retouched hundreds of photos using photoshop.</li>
                  <li>Entered order information into a database using Photolynx</li>
               </ul>
               <p>Stanwood WA, Aug 2019 - Jun 2020</p>            
            </div>

            <div className="grid-item">
               <h4>Junior Designer</h4>
               <h5>Domain7</h5>
               <p>Worked on an animation project as part of a youth behavioral help program for the Child Development Institute SNAP.</p>
               <ul>
                  <li>Worked on animation and video editing for 9 animations.</li>
                  <li>Rigged and lip syned 6 characters.</li>
                  <li>Created 6 original sound tracks for the background music.</li>
               </ul>
               <p>Remote, Mar 2018 - Oct 2018</p>            
            </div>

            <div className="grid-item">
               <h4>Instructional Tutor</h4>
               <h5>Skagit Valley College</h5>
               <p>Tutored special needs students in Web Design, HTML and CSS coding.</p>
               <ul>
                  <li>Helped students how to use Adobe Dreamweaver</li>
                  <li>Assisted them in developing a personal website</li>
                  <li>Gave feedback on assignments and projects that they’ve completed</li>
               </ul>
               <p>Mount Vernon WA, Jan 2017 - Apr 2017</p>
            </div>
         </div>
         
      </div>
   )
}

export default Experience