import React, { Component } from 'react';

export default class Section3 extends Component {
  
  render() {
    return (
      <div >

        {/* <!-- Categories Carousel --> */}
        <div className="fullwidth-carousel-container margin-top-25">
         <div className="fullwidth-slick-carousel category-carousel">

           {/* <!-- Item --> */}
           <div className="fw-carousel-item">

             {/* <!-- this (first) box will be hidden under 1680px resolution --> */}
             <div className="category-box-container half">
               <a href="listings-half-screen-map-grid-1.html" className="category-box" data-background-image="images/category-box-01.jpg">
                 <div className="category-box-content">
                   <h3>Hotels</h3>
                   <span>64 listings</span>
                 </div>
                 <span className="category-box-btn">Browse</span>
               </a>
             </div>

             <div className="category-box-container half">
               <a href="listings-half-screen-map-grid-1.html" className="category-box" data-background-image="images/category-box-02.jpg">
                 <div className="category-box-content">
                   <h3>Shops</h3>
                   <span>14 listings</span>
                 </div>
                 <span className="category-box-btn">Browse</span>
               </a>
             </div>
           </div>

           {/* <!-- Item --> */}
           <div className="fw-carousel-item">
             <div className="category-box-container">
               <a href="listings-half-screen-map-grid-1.html" className="category-box" data-background-image="images/category-box-03.jpg">
                 <div className="category-box-content">
                   <h3>Events</h3>
                   <span>67 listings</span>
                 </div>
                 <span className="category-box-btn">Browse</span>
               </a>
             </div>
           </div>

           {/* <!-- Item --> */}
           <div className="fw-carousel-item">
             <div className="category-box-container">
               <a href="listings-half-screen-map-grid-1.html" className="category-box" data-background-image="images/category-box-04.jpg">
                 <div className="category-box-content">
                   <h3>Fitness</h3>
                   <span>27 listings</span>
                 </div>
                 <span className="category-box-btn">Browse</span>
               </a>
             </div>
           </div>

           {/* <!-- Item --> */}
           <div className="fw-carousel-item">
             <div className="category-box-container">
               <a href="listings-half-screen-map-list.html" className="category-box" data-background-image="images/category-box-05.jpg">
                 <div className="category-box-content">
                   <h3>Nightlife</h3>
                   <span>22 listings</span>
                 </div>
                 <span className="category-box-btn">Browse</span>
               </a>
             </div>
           </div>

           {/* <!-- Item --> */}
           <div className="fw-carousel-item">
             <div className="category-box-container">
               <a href="listings-half-screen-map-list.html" className="category-box" data-background-image="images/category-box-06.jpg">
                 <div className="category-box-content">
                   <h3>Eat & Drink</h3>
                   <span>130 listings</span>
                 </div>
                 <span className="category-box-btn">Browse</span>
               </a>
             </div>
           </div>

         </div>
        </div>
        {/* <!-- Categories Carousel / End --> */}



        {/* <!-- Fullwidth Section --> */}
        <section className="fullwidth margin-top-65 padding-top-75 padding-bottom-70" data-background-color="#f8f8f8">

         <div className="container">
           <div className="row">

             <div className="col-md-12">
               <h3 className="headline centered margin-bottom-45">
                 Most Visited Places
                 <span>Discover top-rated local businesses</span>
               </h3>
             </div>

             <div className="col-md-12">
               <div className="simple-slick-carousel dots-nav">

               {/* <!-- Listing Item --> */}
               <div className="carousel-item">
                 <a href="listings-single-page.html" className="listing-item-container">
                   <div className="listing-item">
                     <img src="images/listing-item-01.jpg" alt=""/>

                     <div className="listing-badge now-open">Now Open</div>

                     <div className="listing-item-content">
                       <span className="tag">Eat & Drink</span>
                       <h3>Tom's Restaurant</h3>
                       <span>964 School Street, New York</span>
                     </div>
                     <span className="like-icon"></span>
                   </div>
                   <div className="star-rating" data-rating="3.5">
                     <div className="rating-counter">(12 reviews)</div>
                   </div>
                 </a>
               </div>
               {/* <!-- Listing Item / End --> */}

               {/* <!-- Listing Item --> */}
               <div className="carousel-item">
                 <a href="listings-single-page.html" className="listing-item-container">
                   <div className="listing-item">
                     <img src="images/listing-item-02.jpg" alt=""/>
                     <div className="listing-item-details">
                       <ul>
                         <li>Friday, August 10</li>
                       </ul>
                     </div>
                     <div className="listing-item-content">
                       <span className="tag">Events</span>
                       <h3>Sticky Band</h3>
                       <span>Bishop Avenue, New York</span>
                     </div>
                     <span className="like-icon"></span>
                   </div>
                   <div className="star-rating" data-rating="5.0">
                     <div className="rating-counter">(23 reviews)</div>
                   </div>
                 </a>
               </div>
               {/* <!-- Listing Item / End --> */}

               {/* <!-- Listing Item --> */}
               <div className="carousel-item">
                 <a href="listings-single-page.html" className="listing-item-container">
                   <div className="listing-item">
                     <img src="images/listing-item-03.jpg" alt=""/>
                     <div className="listing-item-details">
                       <ul>
                         <li>Starting from $59 per night</li>
                       </ul>
                     </div>
                     <div className="listing-item-content">
                       <span className="tag">Hotels</span>
                       <h3>Hotel Govendor</h3>
                       <span>778 Country Street, New York</span>
                     </div>
                     <span className="like-icon"></span>
                   </div>
                   <div className="star-rating" data-rating="2.0">
                     <div className="rating-counter">(17 reviews)</div>
                   </div>
                 </a>
               </div>
               {/* <!-- Listing Item / End --> */}

               {/* <!-- Listing Item --> */}
               <div className="carousel-item">
                 <a href="listings-single-page.html" className="listing-item-container">
                   <div className="listing-item">
                     <img src="images/listing-item-04.jpg" alt=""/>

                     <div className="listing-badge now-open">Now Open</div>

                     <div className="listing-item-content">
                       <span className="tag">Eat & Drink</span>
                       <h3>Burger House</h3>
                       <span>2726 Shinn Street, New York</span>
                     </div>
                     <span className="like-icon"></span>
                   </div>
                   <div className="star-rating" data-rating="5.0">
                     <div className="rating-counter">(31 reviews)</div>
                   </div>
                 </a>
               </div>
               {/* <!-- Listing Item / End --> */}

               {/* <!-- Listing Item --> */}
               <div className="carousel-item">
                 <a href="listings-single-page.html" className="listing-item-container">
                   <div className="listing-item">
                     <img src="images/listing-item-05.jpg" alt=""/>
                     <div className="listing-item-content">
                       <span className="tag">Other</span>
                       <h3>Airport</h3>
                       <span>1512 Duncan Avenue, New York</span>
                     </div>
                     <span className="like-icon"></span>
                   </div>
                   <div className="star-rating" data-rating="3.5">
                     <div className="rating-counter">(46 reviews)</div>
                   </div>
                 </a>
               </div>
               {/* <!-- Listing Item / End --> */}

               {/* <!-- Listing Item --> */}
               <div className="carousel-item">
                 <a href="listings-single-page.html" className="listing-item-container">
                   <div className="listing-item">
                     <img src="images/listing-item-06.jpg" alt=""/>

                     <div className="listing-badge now-closed">Now Closed</div>

                     <div className="listing-item-content">
                       <span className="tag">Eat & Drink</span>
                       <h3>Think Coffee</h3>
                       <span>215 Terry Lane, New York</span>
                     </div>
                     <span className="like-icon"></span>
                   </div>
                   <div className="star-rating" data-rating="4.5">
                     <div className="rating-counter">(15 reviews)</div>
                   </div>
                 </a>
               </div>
               {/* <!-- Listing Item / End --> */}
               </div>

             </div>

           </div>
         </div>
        </section>
        {/* <!-- Fullwidth Section / End --> */}


      </div>
    );
  }
}
