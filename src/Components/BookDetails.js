import { useParams } from "react-router-dom";
import options from "../Hooks/options";
import useSpecific from "../Hooks/useSpecific";
import Search from "./Search";
const BookDetails = () => {
    const {id} = useParams();
    const url = `https://www.googleapis.com/books/v1/volumes/${id}?projection=full&key=AIzaSyDQo7WflBKPuv7uMFdOKOz0mjbxZq6oTOw`;
    const{data:details,isPending,error} = useSpecific(options(url));
    var str='No Available Description';
    if(details){
        if(details.volumeInfo.description){
            str = details.volumeInfo.description.toString();
            str = str.replace( /(<([^>]+)>)/ig, '');
        }
        
    }   
   
    console.log(details);
    return(
        
        <div className="body">
            <Search/>
           {isPending&&<div>Loading...</div>}
           {error&&<div>{error}</div>}
           {details&&(
               <div className="d-flex justify-content-center">
                    <div className="bookContainer cont shadow p-3 mb-5 bg-body rounded">
                            <div className="text-center">
                                <p className="homeTitle">{details.volumeInfo.title}</p>
                                {details.volumeInfo.imageLinks?<img className="homeThumbnails" src={details.volumeInfo.imageLinks.thumbnail} alt={details.volumeInfo.title}></img>
                                :<div className="d-flex justify-content-center"><div className="emptyThumbnail d-flex align-items-center justify-content-center">No Thumbnail</div></div>}
                                <p><b>{details.volumeInfo.subtitle}</b></p>
                            </div>
                            <p>"{str}"</p>
                            {details.volumeInfo.averageRating? <p><b>Average Rating</b>: {details.volumeInfo.averageRating}</p> :  <p><b>Average Rating</b>: No Average Rating</p>}
                            <p><b>Ratings Count</b>: {details.volumeInfo.ratingsCount ? details.volumeInfo.ratingsCount : 0}</p>  
                            <p><b>Author</b>: {details.volumeInfo.authors+" "}</p>  
                            <p><b>Published Date</b>: {details.volumeInfo.publishedDate}</p>     
                            <p><b>Publisher</b>: {details.volumeInfo.publisher}</p>
                            <p><b>Page Count</b>: {details.volumeInfo.pageCount}</p>
                            <p>For More Information about this Book: <a className="infoLink" href={details.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">Click Here</a></p>

                    </div>
               </div>

           )}
        </div>
    )
}
export default BookDetails;