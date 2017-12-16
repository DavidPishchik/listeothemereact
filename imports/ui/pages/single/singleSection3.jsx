import React, { Component } from 'react';

export default class SingleSection3 extends Component {
  render() {
    return (
      <div>
        {/* <!-- Sidebar
        ================================================== --> */}
        <div className="col-lg-4 col-md-4 margin-top-75 sticky">


          {/* <!-- Verified Badge --> */}
          <div className="verified-badge with-tip" data-tip-content="Listing has been verified and belongs the business owner or manager.">
            <i className="sl sl-icon-check"></i> Verified Listing
          </div>

          {/* <!-- Book Now --> */}
          <div className="boxed-widget booking-widget margin-top-35">
            <h3><i className="fa fa-calendar-check-o "></i> Book a Table</h3>
            <div className="row with-forms  margin-top-0">

              {/* <!-- Date Picker - docs: http://www.vasterad.com/docs/listeo/#!/date_picker --> */}
              <div className="col-lg-6 col-md-12">
                <input type="text" id="booking-date" data-lang="en" data-large-mode="true"
                  data-large-default="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017"/>
              </div>

              {/* <!-- Time Picker - docs: http://www.vasterad.com/docs/listeo/#!/time_picker --> */}
              <div className="col-lg-6 col-md-12">
                <input type="text" id="booking-time" defaultValue="9:00 am"/>
              </div>

              {/* <!-- Panel Dropdown --> */}
              <div className="col-lg-12">
                <div className="panel-dropdown">
                  <a href="#">Guests <span className="qtyTotal" name="qtyTotal">1</span></a>
                  <div className="panel-dropdown-content">

                    {/* <!-- Quantity Buttons --> */}
                    <div className="qtyButtons">
                      <div className="qtyTitle">Adults</div>
                      <input type="text" name="qtyInput" defaultValue="1"/>
                    </div>

                    <div className="qtyButtons">
                      <div className="qtyTitle">Childrens</div>
                      <input type="text" name="qtyInput" defaultValue="0"/>
                    </div>

                  </div>
                </div>
              </div>
              {/* <!-- Panel Dropdown / End --> */}

            </div>

            {/* <!-- progress button animation handled via custom.js --> */}
            <a href="pages-booking.html" className="button book-now fullwidth margin-top-5">Book Now</a>
          </div>
          {/* <!-- Book Now / End --> */}


          {/* <!-- Opening Hours --> */}
          <div className="boxed-widget opening-hours margin-top-35">
            <div className="listing-badge now-open">Now Open</div>
            <h3><i className="sl sl-icon-clock"></i> Opening Hours</h3>
            <ul>
              <li>Monday <span>9 AM - 5 PM</span></li>
              <li>Tuesday <span>9 AM - 5 PM</span></li>
              <li>Wednesday <span>9 AM - 5 PM</span></li>
              <li>Thursday <span>9 AM - 5 PM</span></li>
              <li>Friday <span>9 AM - 5 PM</span></li>
              <li>Saturday <span>9 AM - 3 PM</span></li>
              <li>Sunday <span>Closed</span></li>
            </ul>
          </div>
          {/* <!-- Opening Hours / End --> */}


          {/* <!-- Contact --> */}
          <div className="boxed-widget margin-top-35">
            <div className="hosted-by-title">
              <h4><span>Hosted by</span> <a href="pages-user-profile.html">Tom Perrin</a></h4>
              <a href="pages-user-profile.html" className="hosted-by-avatar"><img src="images/dashboard-avatar.jpg" alt=""/></a>
            </div>
            <ul className="listing-details-sidebar">
              <li><i className="sl sl-icon-phone"></i> (123) 123-456</li>
              {/* <!-- <li><i className="sl sl-icon-globe"></i> <a href="#">http://example.com</a></li> --> */}
              <li><i className="fa fa-envelope-o"></i> <a href="#">tom@example.com</a></li>
            </ul>

            <ul className="listing-details-sidebar social-profiles">
              <li><a href="#" className="facebook-profile"><i className="fa fa-facebook-square"></i> Facebook</a></li>
              <li><a href="#" className="twitter-profile"><i className="fa fa-twitter"></i> Twitter</a></li>
              {/* <!-- <li><a href="#" className="gplus-profile"><i className="fa fa-google-plus"></i> Google Plus</a></li> --> */}
            </ul>

            {/* <!-- Reply to review popup --> */}
            <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
              <div className="small-dialog-header">
                <h3>Send Message</h3>
              </div>
              <div className="message-reply margin-top-0">
                <textarea cols="40" rows="3" placeholder="Your message to Tom"></textarea>
                <button className="button">Send Message</button>
              </div>
            </div>

            <a href="#small-dialog" className="send-message-to-owner button popup-with-zoom-anim"><i className="sl sl-icon-envelope-open"></i> Send Message</a>
          </div>
          {/* <!-- Contact / End--> */}


          {/* <!-- Share / Like --> */}
          <div className="listing-share margin-top-40 margin-bottom-40 no-border">
            <button className="like-button"><span className="like-icon"></span> Bookmark this listing</button>
            <span>159 people bookmarked this place</span>

              {/* <!-- Share Buttons --> */}
              <ul className="share-buttons margin-top-40 margin-bottom-0">
                <li><a className="fb-share" href="#"><i className="fa fa-facebook"></i> Share</a></li>
                <li><a className="twitter-share" href="#"><i className="fa fa-twitter"></i> Tweet</a></li>
                <li><a className="gplus-share" href="#"><i className="fa fa-google-plus"></i> Share</a></li>
                {/* <!-- <li><a className="pinterest-share" href="#"><i className="fa fa-pinterest-p"></i> Pin</a></li> --> */}
              </ul>
              <div className="clearfix"></div>
          </div>

        </div>
        {/* <!-- Sidebar / End --> */}
      </div>
    );
  }
}
