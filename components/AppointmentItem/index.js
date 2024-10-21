// Write your code here
import './index.css'
const AppointmentItem = props => {
  const {item, Changestar} = props
  const {id, title, date, isStarred} = item
  const onclick = () => {
    Changestar(id)
  }
  return (
    <li>
      <div>
        <p>{title}</p>
        <button onClick={onclick} data-testid="star">
          <img
            src={
              isStarred
                ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
            }
            alt="star"
          />
        </button>
      </div>
      <p>{date}</p>
    </li>
  )
}

export default AppointmentItem
