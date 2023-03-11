import './../assets/scss/Blog.scss';
import BlockTitle from '../components/common/BlockTitle';
import { useState, useEffect } from 'react';
import { NEWS_API_KEY } from '../config';
import axios from 'axios';
import BlogItem from '../components/blog/BlogItem';
import { toast } from '../helpers';
import Pagination from '../components/common/Pagination';

function Blog(){
  const [newsList, setNewsList] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const limit = 12;

  console.log(total);

  useEffect(()=>{
    fetchBlogData();
  }, [page]);

  const handlerPrevPage = ()=>{
    if(page===1){
      return false
    }
    setPage(page-1);
  }

  const handlerNextPage = ()=>{
    if(page===total){
      return false
    }
    setPage(page+1);
  }

  const fetchBlogData = ()=>{
    console.log("CALL: fetchBlogData")
    const offset = (page - 1) * limit;

    axios.get(`https://api.mediastack.com/v1/news?access_key=${NEWS_API_KEY}&limit=${limit}&offset=${offset}&categories=technology&languages=en`)
    .then((resp)=>{
      setNewsList(resp.data.data);
      setTotal(Math.ceil(resp.data.pagination.total/limit));
    })
    .catch((resp)=>{
      toast.danger(resp.data.error.message);
    })
  }

  return (
    <div className="blog-page">
      <section>
        <div className="container">
          <BlockTitle title="News Feeds" subtitle="Our Blog" center />
          <div className="items-wrap">
            {newsList.map((itemNews, index)=> <BlogItem key={index} item={itemNews} />)}
          </div>
          <Pagination total={total} page={page} gotoHandler={(newPage)=>{setPage(newPage)}} />
        </div>
      </section>
    </div>
  )
}

export default Blog