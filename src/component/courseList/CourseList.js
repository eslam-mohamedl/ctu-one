import React, { Component,Fragment } from 'react'
import './CourseList.css';

class CourseList extends Component{
 state = {
    isEdit : false
 }
    rendercourse = ()=>{
        return(
            <li className="nav-list">
            <p>{this.props.details.name}</p>
            <button onClick={()=> {this.toggleState()}}>Edit</button>
            <button onClick={() => this.props.deleteCourse(this.props.index)}>Delete</button>
        </li>
        )
    }
    renderUpdataFrom = () =>{
        return(
          <form>
            <input type="text" defaultValue={this.props.details.name}/>
            <button>update course</button>
          </form>
        )
    }

    toggleState = ()=>{
       let {isEdit} = this.state;
       this.setState({
        isEdit : !isEdit
       })
    }
    render(){
        let {isEdit} = this.state;
        return(
           <Fragment>
              { isEdit ? this.renderUpdataFrom()  :this.rendercourse()}
           </Fragment>
        )
    }
}


export default CourseList;