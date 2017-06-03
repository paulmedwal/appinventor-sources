import { connect } from 'react-redux'
import ExportAIA from '../components/ExportAIA'

const mapStateToProps = (state, ownProps) => ({
  components: state.components
})

const ExportContainer = connect(
  mapStateToProps
)(ExportAIA)

export default ExportContainer
