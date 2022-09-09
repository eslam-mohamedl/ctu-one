

import React from 'react';
import './CourseFrom.css';
const CourseFrom = (props)=>{
  return(
    <div className="content ">
        <div className="box-center">
       <h2>
        Add <span>Course</span> Item
       </h2>
       <form onSubmit={props.addCourse}>
       <input type="text " value={props.current} onChange={props.updatecourses} placeholder='Enter course'/>
       <input type="submit" value="add"/>
       </form>
    </div>
    </div>
  )
}

export default CourseFrom;