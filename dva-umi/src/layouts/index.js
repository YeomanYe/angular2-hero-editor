import withRouter from 'umi/withRouter'
import App from './app'

export default withRouter((props) => {
  return (
      <App>
        { props.children }
      </App>
  )
})
