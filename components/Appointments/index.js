// Write your code here
import {Component} from 'react'

import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: [], isStarred: false}

  addTitle = event => this.setState({title: event.target.value})

  addDate = event => this.setState({date: event.target.value})

  onAdd = () => {
    const {title, date} = this.state
    const newitem = {
      id: uuidv4(),
      title: title,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
      isStarred: false,
    }
    this.setState(prevState => {
      return {
        appointmentsList: [...prevState.appointmentsList, newitem],
        title: '',
        date: '',
      }
    })
  }
  isStarred = id => {
    this.setState(prevState => {
      return {
        appointmentsList: this.state.appointmentsList.map(item => {
          if (item.id === id) {
            return {...item, isStarred: !item.isStarred}
          }
          return item
        }),
      }
    })
  }
  getStarred = () => {
    this.state.isStarred
      ? this.setState({isStarred: false})
      : this.setState({isStarred: true})
  }

  render() {
    const {title, date, appointmentsList, isStarred} = this.state
    const filteredlist = appointmentsList.filter(item => {
      if (isStarred === true) {
        return item.isStarred === true
      } else {
        return item
      }
    })
    return (
      <div className="Container">
        <div className="AppointmentContainer">
          <div className="AddAppointmentSection">
            <div className="AppointmentInput">
              <h1>Add Appointment</h1>
              <div className="Inputcontainer">
                <label for="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={this.addTitle}
                />
              </div>
              <div className="Inputcontainer">
                <label htmlFor="date">DATE</label>
                <input
                  id="date"
                  onChange={this.addDate}
                  value={date}
                  type="date"
                />
              </div>
              <button type="button" onClick={this.onAdd}>
                Add
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="middleSection">
            <h1>Appointments</h1>
            <button onClick={this.getStarred}>Starred</button>
          </div>
          <ul>
            {filteredlist.map(item => (
              <AppointmentItem
                item={item}
                key={item.id}
                Changestar={this.isStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
