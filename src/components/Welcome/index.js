import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

// to set defaultProps
Welcome.defaultProps = {
  name: 'rahul',
  greeting: 'vanakkam',
}

export default Welcome
