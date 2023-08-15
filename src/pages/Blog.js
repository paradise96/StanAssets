import { useState, useEffect } from 'react';
import axios from 'axios';



function Blog(){
  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;
  const AMOUNT_OF_PAGES = gamesList.length/ITEMS_PER_PAGE;



  const prevHandler = () =>{
    setPage(1 < page ? page-1 : page);
  }

  const nextHandler = () =>{
    setPage(AMOUNT_OF_PAGES > page ? page+1 : page);
  }

  const goToPageHandler = (num) => () => {
    setPage(num)
  }

  const fetchData = ()=> {
    axios
    .get(`https://paradise96.github.io/gamesAPI/blogAPI.json`)
    .then((resp)=>{
      setGamesList(resp.data.data);
    })
  }
    useEffect(()=>{
      fetchData();
    }, []);

    return( 
      <section className='blog'>
        <div className='container'>
          <h2 className='headers mrg_15'>BLOG</h2>
          {gamesList.slice((page-1)*ITEMS_PER_PAGE, page*ITEMS_PER_PAGE).map((item, index)=>{
            return(
                <div className='blog_item' key={index}>
                  <div className='blog_image'>
                    <img src={item.img} alt="different games pictures"></img>
                  </div>
                  <div className='blog_text'>
                    <h2>{item.header}</h2>
                    <p>{item.description}</p>
                    <h3>{item.date}</h3>
                  </div>
              </div>
            )
          })}
          <div className='blog_pagination'> 
              <button className='btn_prev' onClick={prevHandler}>prev</button>
              <ul>
              {Array.from(Array(AMOUNT_OF_PAGES).keys()).map((item, index) => {
                const pageNumber = item + 1;
                  return( 
                  <li key={index} className={pageNumber === page ? '_active' : ''} onClick={goToPageHandler(item+1)}>{item+1}</li>
                  )
                })}
              </ul>
              <button className='btn_next' onClick={nextHandler}>next</button>
          </div>
          
        </div>
      </section>
    )
}

export default Blog

