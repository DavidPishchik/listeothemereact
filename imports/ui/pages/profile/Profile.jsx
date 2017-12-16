import React, { Component } from 'react';
import ProfileSection1 from './ProfileSection1';
import ProfileSection2 from './ProfileSection2';
import ProfileSection3 from './ProfileSection3';

export default class Profile extends Component {
  componentDidMount() {
    function starRating(ratingElem) {
      $(ratingElem).each(function () {

        var dataRating = $(this).attr('data-rating');

        // Rating Stars Output
        function starsOutput(firstStar, secondStar, thirdStar, fourthStar, fifthStar) {
          return ('' +
            '<span class="'+firstStar+'"></span>' +
            '<span class="'+secondStar+'"></span>' +
            '<span class="'+thirdStar+'"></span>' +
            '<span class="'+fourthStar+'"></span>' +
            '<span class="'+fifthStar+'"></span>');
        }

        var fiveStars = starsOutput('star', 'star', 'star', 'star', 'star');

        var fourHalfStars = starsOutput('star', 'star', 'star', 'star', 'star half');
        var fourStars = starsOutput('star', 'star', 'star', 'star', 'star empty');

        var threeHalfStars = starsOutput('star', 'star', 'star', 'star half', 'star empty');
        var threeStars = starsOutput('star', 'star', 'star', 'star empty', 'star empty');

        var twoHalfStars = starsOutput('star', 'star', 'star half', 'star empty', 'star empty');
        var twoStars = starsOutput('star', 'star', 'star empty', 'star empty', 'star empty');

        var oneHalfStar = starsOutput('star', 'star half', 'star empty', 'star empty', 'star empty');
        var oneStar = starsOutput('star', 'star empty', 'star empty', 'star empty', 'star empty');

        // Rules
        if (dataRating >= 4.75) {
          $(this).append(fiveStars);
        } else if (dataRating >= 4.25) {
          $(this).append(fourHalfStars);
        } else if (dataRating >= 3.75) {
          $(this).append(fourStars);
        } else if (dataRating >= 3.25) {
          $(this).append(threeHalfStars);
        } else if (dataRating >= 2.75) {
          $(this).append(threeStars);
        } else if (dataRating >= 2.25) {
          $(this).append(twoHalfStars);
        } else if (dataRating >= 1.75) {
          $(this).append(twoStars);
        } else if (dataRating >= 1.25) {
          $(this).append(oneHalfStar);
        } else if (dataRating < 1.25) {
          $(this).append(oneStar);
        }
      });
    };

    starRating('.star-rating');
  }

  render() {

    return (
      <div>


        {/* <!-- Wrapper --> */}
        <div id="wrapper">

          <ProfileSection1 />

          {/* <!-- Titlebar
          ================================================== --> */}
          <div id="titlebar" className="gradient">
          	<div className="container">
          		<div className="row">
          			<div className="col-md-12">

          				<div className="user-profile-titlebar">
          					<div className="user-profile-avatar"><img src="images/user-profile-avatar.jpg" alt=""/></div>
          					<div className="user-profile-name">
          						<h2>Tom Perrin</h2>
          						<div className="star-rating" data-rating="5">
          							<div className="rating-counter"><a href="#listing-reviews">(60 reviews)</a></div>
          						</div>
          					</div>
          				</div>

          			</div>
          		</div>
          	</div>
          </div>

          {/* <!-- Content
          ================================================== --> */}
          <div className="container">
          	<div className="row sticky-wrapper">

              <ProfileSection2 />
              <ProfileSection3 />


          	</div>
          </div>

          {/* <!-- Footer
          ================================================== --> */}
          <div id="footer" className="margin-top-65">
          	{/* <!-- Main --> */}
          	<div className="container">
          		<div className="row">
          			<div className="col-md-5 col-sm-6">
          				<img className="footer-logo" src="images/logo.png" alt=""/>
          				<br/><br/>
          				<p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                    a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
          			</div>

          			<div className="col-md-4 col-sm-6 ">
          				<h4>Helpful Links</h4>
          				<ul className="footer-links">
          					<li><a href="#">Login</a></li>
          					<li><a href="#">Sign Up</a></li>
          					<li><a href="#">My Account</a></li>
          					<li><a href="#">Add Listing</a></li>
          					<li><a href="#">Pricing</a></li>
          					<li><a href="#">Privacy Policy</a></li>
          				</ul>

          				<ul className="footer-links">
          					<li><a href="#">FAQ</a></li>
          					<li><a href="#">Blog</a></li>
          					<li><a href="#">Our Partners</a></li>
          					<li><a href="#">How It Works</a></li>
          					<li><a href="#">Contact</a></li>
          				</ul>
          				<div className="clearfix"></div>
          			</div>

          			<div className="col-md-3  col-sm-12">
          				<h4>Contact Us</h4>
          				<div className="text-widget">
          					<span>12345 Little Lonsdale St, Melbourne</span> <br/>
          					Phone: <span>(123) 123-456 </span><br/>
          					E-Mail:<span> <a href="#">office@example.com</a> </span><br/>
          				</div>

          				<ul className="social-icons margin-top-20">
          					<li><a className="facebook" href="#"><i className="icon-facebook"></i></a></li>
          					<li><a className="twitter" href="#"><i className="icon-twitter"></i></a></li>
          					<li><a className="gplus" href="#"><i className="icon-gplus"></i></a></li>
          					<li><a className="vimeo" href="#"><i className="icon-vimeo"></i></a></li>
          				</ul>

          			</div>

          		</div>

          		{/* <!-- Copyright --> */}
          		<div className="row">
          			<div className="col-md-12">
          				<div className="copyrights">© 2017 Listeo. All Rights Reserved.</div>
          			</div>
          		</div>

          	</div>

          </div>
          {/* <!-- Footer / End --> */}


          {/* <!-- Back To Top Button --> */}
          <div id="backtotop"><a href="#"></a></div>


        </div>
        {/* <!-- Wrapper / End --> */}








      </div>
    );
  }
}
