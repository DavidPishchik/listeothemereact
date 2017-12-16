import React, { Component } from 'react';

export default class Section1 extends Component {

  render() {
    return (

        <header id="header-container">
         {/* <!-- Header --> */}
         <div id="header">
           <div className="container">

             {/* <!-- Left Side Content --> */}
             <div className="left-side">

               {/* <!-- Logo --> */}
               <div id="logo">
                 <a href="/"><img src="../images/logo.png" alt=""/></a>
               </div>

               {/* <!-- Mobile Navigation --> */}
               <div className="mmenu-trigger">
                 <button className="hamburger hamburger--collapse" type="button">
                   <span className="hamburger-box">
                     <span className="hamburger-inner"></span>
                   </span>
                 </button>
               </div>


               {/* <!-- Main Navigation --> */}
               <nav id="navigation" className="style-1">
                 <ul id="responsive">

                   <li><a className="current" href="/">Home</a>
                     <ul>
                       <li><a href="index.html">Home 1</a></li>
                       <li><a href="index-2.html">Home 2</a></li>
                       <li><a href="index-3.html">Home 3</a></li>
                       <li><a href="index-4.html">Home 4</a></li>
                     </ul>
                   </li>

                   <li><a href="/single">Listings</a>
                     <ul>
                       <li><a href="#">List Layout</a>
                         <ul>
                           <li><a href="listings-list-with-sidebar.html">With Sidebar</a></li>
                           <li><a href="listings-list-full-width.html">Full Width</a></li>
                         </ul>
                       </li>
                       <li><a href="#">Grid Layout</a>
                         <ul>
                           <li><a href="listings-grid-with-sidebar-1.html">With Sidebar 1</a></li>
                           <li><a href="listings-grid-with-sidebar-2.html">With Sidebar 2</a></li>
                           <li><a href="listings-grid-full-width.html">Full Width</a></li>
                         </ul>
                       </li>
                       <li><a href="#">Half Screen Map</a>
                         <ul>
                           <li><a href="listings-half-screen-map-list.html">List Layout</a></li>
                           <li><a href="listings-half-screen-map-grid-1.html">Grid Layout 1</a></li>
                           <li><a href="listings-half-screen-map-grid-2.html">Grid Layout 2</a></li>
                         </ul>
                       </li>
                       <li><a href="listings-single-page.html">Single Listing</a></li>
                     </ul>
                   </li>

                   <li><a href="/dashboard">User Panel</a>
                     <ul>
                       <li><a href="dashboard.html">Dashboard</a></li>
                       <li><a href="dashboard-messages.html">Messages</a></li>
                       <li><a href="dashboard-bookings.html">Bookings</a></li>
                       <li><a href="dashboard-my-listings.html">My Listings</a></li>
                       <li><a href="dashboard-reviews.html">Reviews</a></li>
                       <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                       <li><a href="dashboard-add-listing.html">Add Listing</a></li>
                       <li><a href="dashboard-my-profile.html">My Profile</a></li>
                       <li><a href="dashboard-invoice.html">Invoice</a></li>
                     </ul>
                   </li>

                   <li><a href="/profile">Pages</a>
                     <ul>
                       <li><a href="pages-user-profile.html">User Profile</a></li>
                       <li><a href="pages-booking.html">Booking Page</a></li>
                       <li><a href="pages-blog.html">Blog</a>
                         <ul>
                           <li><a href="pages-blog.html">Blog</a></li>
                           <li><a href="pages-blog-post.html">Blog Post</a></li>
                         </ul>
                       </li>
                       <li><a href="pages-contact.html">Contact</a></li>
                       <li><a href="pages-coming-soon.html">Coming Soon</a></li>
                       <li><a href="pages-elements.html">Elements</a></li>
                       <li><a href="pages-pricing-tables.html">Pricing Tables</a></li>
                       <li><a href="pages-typography.html">Typography</a></li>
                       <li><a href="pages-404.html">404 Page</a></li>
                       <li><a href="pages-icons.html">Icons</a></li>
                     </ul>
                   </li>

                 </ul>
               </nav>
               <div className="clearfix"></div>
               {/* <!-- Main Navigation / End --> */}

             </div>
             {/* <!-- Left Side Content / End --> */}


             {/* <!-- Right Side Content / End --> */}
             <div className="right-side">
               <div className="header-widget">
                 <a href="#sign-in-dialog" className="sign-in popup-with-zoom-anim"><i className="sl sl-icon-login"></i> Sign In</a>
                 <a href="dashboard-add-listing.html" className="button border with-icon">Add Listing <i className="sl sl-icon-plus"></i></a>
               </div>
             </div>
             {/* <!-- Right Side Content / End --> */}

             {/* <!-- Sign In Popup --> */}
             <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">

               <div className="small-dialog-header">
                 <h3>Sign In</h3>
               </div>

               {/* <!--Tabs --> */}
               <div className="sign-in-form style-1">

                 <ul className="tabs-nav">
                   <li className=""><a href="#tab1">Log In</a></li>
                   <li><a href="#tab2">Register</a></li>
                 </ul>

                 <div className="tabs-container alt">

                   {/* <!-- Login --> */}
                   <div className="tab-content" id="tab1">
                     <form method="post" className="login">

                       <p className="form-row form-row-wide">
                         <label>Username:
                           <i className="im im-icon-Male"></i>
                           <input type="text" className="input-text" name="username" id="username" value="" />
                         </label>
                       </p>

                       <p className="form-row form-row-wide">
                         <label>Password:
                           <i className="im im-icon-Lock-2"></i>
                           <input className="input-text" type="password" name="password" id="password"/>
                         </label>
                         <span className="lost_password">
                           <a href="#" >Lost Your Password?</a>
                         </span>
                       </p>

                       <div className="form-row">
                         <input type="submit" className="button border margin-top-5" name="login" value="Login" />
                         <div className="checkboxes margin-top-10">
                           <input id="remember-me" type="checkbox" name="check"/>
                           <label>Remember Me</label>
                         </div>
                       </div>

                     </form>
                   </div>

                   {/* <!-- Register --> */}
                   <div className="tab-content" id="tab2">

                     <form method="post" className="register">

                     <p className="form-row form-row-wide">
                       <label>Username:
                         <i className="im im-icon-Male"></i>
                         <input type="text" className="input-text" name="username" id="username2" value="" />
                       </label>
                     </p>

                     <p className="form-row form-row-wide">
                       <label>Email Address:
                         <i className="im im-icon-Mail"></i>
                         <input type="text" className="input-text" name="email" id="email2" value="" />
                       </label>
                     </p>

                     <p className="form-row form-row-wide">
                       <label>Password:
                         <i className="im im-icon-Lock-2"></i>
                         <input className="input-text" type="password" name="password1" id="password1"/>
                       </label>
                     </p>

                     <p className="form-row form-row-wide">
                       <label >Repeat Password:
                         <i className="im im-icon-Lock-2"></i>
                         <input className="input-text" type="password" name="password2" id="password2"/>
                       </label>
                     </p>

                     <input type="submit" className="button border fw margin-top-10" name="register" value="Register" />

                     </form>
                   </div>

                 </div>
               </div>
             </div>
             {/* <!-- Sign In Popup / End --> */}

           </div>
         </div>
         {/* <!-- Header / End --> */}
        </header>



    );
  }
}
