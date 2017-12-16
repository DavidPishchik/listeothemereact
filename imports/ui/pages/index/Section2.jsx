import React, { Component } from 'react';

export default class Section2 extends Component {

  render() {
    return (
      <div>

          {/* <!-- Banner
          ================================================== --> */}
          <div className="main-search-container" data-background-image="images/main-search-background-01.jpg">
           <div className="main-search-inner">

             <div className="container">
               <div className="row">
                 <div className="col-md-12">
                   <h2>Find Nearby Attractions</h2>
                   <h4>Expolore top-rated attractions, activities and more</h4>

                   <div className="main-search-input">

                     <div className="main-search-input-item">
                       <input type="text" placeholder="What are you looking for?" value=""/>
                     </div>

                     <div className="main-search-input-item location">
                       <input type="text" placeholder="Location" value=""/>
                       <a href="#"><i className="fa fa-dot-circle-o"></i></a>
                     </div>

                     <div className="main-search-input-item">
                       <select data-placeholder="All Categories" className="chosen-select" >
                         <option>All Categories</option>
                         <option>Shops</option>
                         <option>Hotels</option>
                         <option>Restaurants</option>
                         <option>Fitness</option>
                         <option>Events</option>
                       </select>
                     </div>

                     <button className="button">Search</button>
                     {/* <button className="button" onclick="window.location.href='listings-half-screen-map-list.html'">Search</button> */}
                   </div>
                 </div>
               </div>
             </div>

           </div>
          </div>


          {/* <!-- Content
          ================================================== --> */}
          <div className="container">
           <div className="row">

             <div className="col-md-12">
               <h3 className="headline centered margin-top-75">
                 Popular Categories
                 <span>Browse <i>the most desirable</i> categories</span>
               </h3>
             </div>

           </div>
          </div>

      </div>
    );
  }
}
