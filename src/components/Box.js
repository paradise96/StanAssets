// import BoxItem from './common/BoxItem'
import BoxItem2 from './common/BoxItem2'
import boxItemsUa from './../data/ua/boxItems.json'
import boxItemsEn from './../data/en/boxItems.json'


function Box(){
  const boxItems = localStorage.getItem('lang') && localStorage.getItem('lang') === 'ua' ? boxItemsUa : boxItemsEn
  return (
    <div className="box text-center">
      {boxItems.map((item, index)=>(
        // <BoxItem 
        //   icon={item.icon}
        //   title={item.title}
        //   text={item.text}
        //   key={index}
        // />  
        <BoxItem2 
          item={item}
          key={index}
        />  
      ))}
    </div>
  )
}

export default Box