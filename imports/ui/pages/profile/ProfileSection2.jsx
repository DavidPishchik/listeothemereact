import React, { Component } from 'react';

export default class ProfileSection2 extends Component {
  render() {
    return (
      <div>
        {/* <!-- Sidebar
        ================================================== --> */}
        <div className="col-lg-4 col-md-4 margin-top-0">

          {/* <!-- Verified Badge --> */}
          <div className="verified-badge with-tip" data-tip-content="Account has been verified and belongs to the person or organization represented.">
            <i className="sl sl-icon-user-following"></i> Verified Account
          </div>

          {/* <!-- Contact --> */}
          <div className="boxed-widget margin-top-30 margin-bottom-50">
            <h3>Contact</h3>
            <ul className="listing-details-sidebar">
              <li><i className="sl sl-icon-phone"></i> (123) 123-456</li>
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

        </div>
        {/* <!-- Sidebar / End --> */}


      </div>
    );
  }
}
