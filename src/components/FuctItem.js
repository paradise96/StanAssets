function FuctItem(props){
  const {icon, value, title} = props

  return (
    <div className="widget-item">
        <i className={icon}></i>
        <h6 className="title">{value}</h6>
        <div className="subtitle">{title}</div>
    </div>
  )
}

export default FuctItem