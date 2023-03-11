function BoxItem(props){
  const {icon, title, text} = props;
  return (
    <div className="box-item">
        <i className={`ti-${icon}`}></i>
        <h6 className="box-title">{title}</h6>
        <p>{text}</p>
    </div>
  )
}
export default BoxItem