import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <center>
        <h1>Error 404. Page not fount...</h1>
        <Link to='/'><span style={{color: '#0390fc'}}>Back to main page</span></Link>
    </center>
  )
}

export default Error404