import useFetch from "../Hooks/useFetch";
import options from "../Hooks/options";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Home = () =>{
    var result = [];
    const [url,setUrl]= useState('https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyDQo7WflBKPuv7uMFdOKOz0mjbxZq6oTOw&maxResults=5');
    const {data,isPending,error} = useFetch(options(url));
    const handlePageChange = (d) =>{
        var page = d.selected*5;
        setUrl(`https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyDQo7WflBKPuv7uMFdOKOz0mjbxZq6oTOw&maxResults=5&startIndex=${page}`);
    }
    if (data){
        result = data;
    }
    
    console.log(result)
    return(
        <div className="body">
            <Search/>
            {isPending&&<div>Loading...</div>}
            {error&&<div>{error}</div>}
           
            {data&&result.map((e) => (
                <div key = {e.id} className="cont shadow p-3 mb-5 bg-body rounded">
                    <div className="content linkWrapper">
                        <Link to={`/book/${e.id}`}>
                            <img className="mainThumbnail" src={e.volumeInfo.imageLinks.thumbnail} alt={e.volumeInfo.title}></img>
                            <p className="orderTitle homeTitle">{e.volumeInfo.title}</p>
                            {e.volumeInfo.subtitle?<p className="orderSubtitle">{e.volumeInfo.subtitle}</p>: <p className="orderSubtitle">No Subtitle Available</p>}
                            <p><b>Author(s)</b>: {e.volumeInfo.authors + " "}</p>
                            {e.volumeInfo.averageRating ? <p><b>Rating</b>: {e.volumeInfo.averageRating}</p>: <p><b>Rating: No Ratings</b></p>}

                        </Link>
                    </div>
                </div>
                
            ))}
          
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                pageCount={8}
                containerClassName={'pagination d-flex justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
                breakLinkClassName={'page-link'}
                onPageChange={handlePageChange}
            />
        </div>
    )

}
export default Home;