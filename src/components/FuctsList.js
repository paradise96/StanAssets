import FuctItem from './FuctItem'

function FuctsList(){
  return (
    <div className="widget-2">
      <FuctItem icon='ti-cup' value='100+' title='Awards Won' />
      <FuctItem icon='ti-face-smile' value='100+' title='Happy Clients' />
      <FuctItem icon='ti-blackboard' value='845+' title='Project Completed' />
      <FuctItem icon='ti-comments-smiley' value='15K+' title='Comments' />
    </div>
  )
}

export default FuctsList