import './index.scss'
const Button = ({ title, active = true, loading, ...props }) => {
  return (
    <button
      className={`button ${active ? 'active' : ''} ${loading ? 'loading' : ''}`}
      type={props.type || 'text'}
      {...props}
    >
      {title}
    </button>
  )
}
export default Button
