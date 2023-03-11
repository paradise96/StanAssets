import { formatDate } from "../../helpers";

function BlogItem(props){
  const { item } = props;

  const image = item.image
    ? <img src={ item.image } alt={ item.title } onError={(e)=>{e.target.src='/assets/imgs/no-picture.png'}} />
    : <img src="/assets/imgs/no-picture.png" alt={item.title} />

  return (
    <div className="card blog-post my-4 my-sm-5 my-md-0">
        { image }
        <div className="card-body">
            <div className="details mb-3">
                <span><i className="ti-calendar"></i> {formatDate(item.published_at)}</span>
                <span><i className="ti-bookmark-alt"></i> { item.source }</span>
            </div>
            <h5 className="card-title">{ item.title }</h5>
            <p>{ item.description }</p>
            <a href={ item.url } target="_blank" rel="noreferrer" className="d-block mt-3">Read More...</a>
        </div>
    </div>
  )
}

export default BlogItem