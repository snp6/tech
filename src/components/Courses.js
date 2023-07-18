import {Link} from 'react-router-dom'

const Courses = props => {
  const {blogData} = props
  const {id, name, logoUrl} = blogData

  return (
    <Link to={`/courses/${id}`} className="item-link">
      <li>
        <div className="item-container">
          <img className="item-image" src={logoUrl} alt={name} />

          <p className="item-topic">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default Courses
