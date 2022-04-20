import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <center>
        <h1>Error 404. Page not fount...</h1>
        <Link to='/'>Back to main page</Link>
    </center>
  )
}

export default Error404