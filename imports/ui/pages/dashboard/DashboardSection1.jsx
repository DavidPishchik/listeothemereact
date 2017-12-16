import React, { Component } from 'react';

export default class DashboardSection1 extends Component {
  render() {
    return (
      <div>
        {/* <!-- Header Container
        ================================================== --> */}
        <header id="header-container" className="fixed fullwidth dashboard">

          {/* <!-- Header --> */}
          <div id="header" className="not-sticky">
            <div className="container">

              {/* <!-- Left Side Content --> */}
              <div className="left-side">

                {/* <!-- Logo --> */}
                <div id="logo">
                  <a href="/"><img src="images/logo.png" alt=""/></a>
                  <a href="/" className="dashboard-logo"><img src="images/logo2.png" alt=""/></a>
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

                    <li><a href="/">Home</a>
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

                    <li><a className="current" href="/dashboard">User Panel</a>
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
                {/* <!-- Header Widget --> */}
                <div className="header-widget">

                  {/* <!-- User Menu --> */}
                  <div className="user-menu">
                    <div className="user-name"><span><img src="images/dashboard-avatar.jpg" alt=""/></span>My Account</div>
                    <ul>
                      <li><a href="dashboard.html"><i className="sl sl-icon-settings"></i> Dashboard</a></li>
                      <li><a href="dashboard-messages.html"><i className="sl sl-icon-envelope-open"></i> Messages</a></li>
                      <li><a href="dashboard-bookings.html"><i className="fa fa-calendar-check-o"></i> Bookings</a></li>
                      <li><a href="index.html"><i className="sl sl-icon-power"></i> Logout</a></li>
                    </ul>
                  </div>

                  <a href="dashboard-add-listing.html" className="button border with-icon">Add Listing <i className="sl sl-icon-plus"></i></a>
                </div>
                {/* <!-- Header Widget / End --> */}
              </div>
              {/* <!-- Right Side Content / End --> */}

            </div>
          </div>
          {/* <!-- Header / End --> */}

        </header>
        <div className="clearfix"></div>
        {/* <!-- Header Container / End --> */}

      </div>
    );
  }
}
