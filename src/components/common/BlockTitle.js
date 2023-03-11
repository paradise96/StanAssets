function BlockTitle(props){
  const {title, subtitle, center} = props
  const mb = props.marginBottom ? props.marginBottom : '6'
  return (
    <div>
      <h6 className={`section-subtitle${center ? ' text-center' : ''}`}>{subtitle}</h6>
      <h6 className={`section-title mb-${mb}${center ? ' text-center' : ''}`}>{title}</h6>
    </div>
  )
}

export default BlockTitle
