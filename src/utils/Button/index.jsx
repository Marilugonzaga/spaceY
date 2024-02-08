import PropTypes from 'prop-types'
import { ButtonDefault } from './style'

function Button({ children, ...rest }) {
  return (
    <>
      <ButtonDefault {...rest}>{children}</ButtonDefault>
    </>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.string,
}
