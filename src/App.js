import React, { Component } from 'react';

import Navbar from './component/Navbar';
import CourseFrom from './component/courseFrom/CourseFrom';
import CourseList from './component/courseList/CourseList';
import Cruds from './component/cruds/Cruds';

class App extends Component {
   state = {
     courses : [
      {name: "html"},
      {name: "css"},
      {name: "javascript"},
     ],
     current : ''
   }
   updatecourses = (e) =>{
   this.setState({
    current : e.target.value
   })
    
   }
   addCourse = (e) =>{
    e.preventDefault();
    let  current = this.state.current;
    let courses = this.state.courses;
    courses.push({name : current})
    this.setState({
      courses,
      current : ''
      
    })

   }
   deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
   }
  render(){
    const courses = this.state.courses;

    const  courseList = courses.map( (course,index) =>{
      return  <CourseList details={course} key={index}  index={index} deleteCourse={this.deleteCourse}/>
    } )
    return (
      <div className="App">
      <Navbar/>
      <CourseFrom current={this.state.current} updatecourses={this.updatecourses} addCourse={this.addCourse}/>
      <Cruds/>

      <ul className="container">{courseList}</ul>
      
      </div>
    );
  
  }
}

export default App;
