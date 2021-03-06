import React from 'react';
import {browserHistory} from 'react-router';
import css from '../css/nav.css';

// used to generate a unique key for react mapped components
import shortid from 'shortid';

// components
import StudentsListEntry from './StudentsListEntry.jsx';

class StudentsList extends React.Component {
  
  render() {
    let data = [];
    this.props.students.map((obj) => {

      for (var i = 0; i < obj.students.length; i++) {
        var studentObj = {
          courseName: obj.class.ClassName,
          courseId: obj.class.ClassId
        }
        studentObj['StudentId'] = obj.students[i].StudentId;
        studentObj['StudentName'] = obj.students[i].StudentName;
        data.push(studentObj);
      }
    });

    // setting a key with the index is an anti-pattern
    // https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
    return (
      <div>
        <table>
          <tbody>
            {data.map((pupil, index) => {
                return <StudentsListEntry 
                    student={pupil}
                    currentStudent={this.props.currentStudent}
                    handleStudentsListEntryClick={this.props.handleStudentsListEntryClick}
                    key={shortid.generate()}
                    index={index}           
                />
              })
            }
          </tbody>
        </table>
      </div>
    );

  }
}

export default StudentsList;
