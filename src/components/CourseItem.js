import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class BlogItemDetails extends Component {
  state = {blogData: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const statusCode = await response.statusCode
    console.log(statusCode)
    if (response.ok === true) {
      const details = await response.json()
      const data = details.course_details
      const updatedData = {
        id: data.id,
        name: data.name,
        imageUrl: data.image_url,
        description: data.description,
      }
      this.setState({
        blogData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {name, imageUrl, description} = blogData

    return (
      <div className="blog-info">
        <img className="author-pic" src={imageUrl} alt={name} />
        <div className="author-details">
          <h2 className="blog-details-title">{name}</h2>

          <p className="blog-content">{description}</p>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button type="button" onClick={this.getBlogItemData}>
        Retry
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderBlogItemDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default BlogItemDetails
