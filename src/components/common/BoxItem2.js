function BoxItem(props){
  const {item} = props;
  return (
    <div className="box-item">
        <i className={`ti-${item.icon}`}></i>
        <h6 className="box-title">{item.title}</h6>
        <p>{item.text}</p>
    </div>
  )
}
export default BoxItem