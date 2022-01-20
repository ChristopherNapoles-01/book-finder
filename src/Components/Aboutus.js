const AboutUs = ()=>{
    
    return (
        <div>
            <div className="body">
            <h2 className="text-center">About Us</h2>
            <div className="shadow p-3 mb-5 bg-body rounded cont">
                <h3>Hello!</h3>
                <h3>Book Worm Library is powered by Google Books API, part of Google API's which is very useful.
                    The Website only handles limited amount of request due to the free usage of the Google Books API.
                    It only allows 1000 requests per day if the amount of requests is consumed, the website will display an
                    Error 429, an error that indicates that the limit of requests was already reach. The website will only become
                    usable after 24 hours.
                </h3>
                <h3>The Website is made for the purpose of easily finding books or articles from Google, and as a part
                    of the Porfolio of Mr. Christopher P. Napoles.
                </h3>
            </div>
            </div>
        </div>
    )
}
export default AboutUs;