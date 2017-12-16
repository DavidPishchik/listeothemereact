import React, { Component } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

export default class Index extends Component {
  componentDidMount() {

    $('.fullwidth-slick-carousel').slick({
      centerMode: true,
      centerPadding: '15%',
      slidesToShow: 3,
      dots: true,
      arrows: false,
      responsive: [
    	{
    	  breakpoint: 1441,
    	  settings: {
    	    centerPadding: '10%',
    	    slidesToShow: 3
    	  }
    	},
    	{
    	  breakpoint: 1025,
    	  settings: {
    	    centerPadding: '10px',
    	    slidesToShow: 2,
    	  }
    	},
    	{
    	  breakpoint: 767,
    	  settings: {
    	    centerPadding: '10px',
    	    slidesToShow: 1
    	  }
    	}
      ]
    });

    $('.simple-slick-carousel').slick({
    	infinite: true,
    	slidesToShow: 3,
    	slidesToScroll: 3,
    	dots: true,
    	arrows: true,
    	responsive: [
    	    {
    	      breakpoint: 992,
    	      settings: {
    	        slidesToShow: 2,
    	        slidesToScroll: 2
    	      }
    	    },
    	    {
    	      breakpoint: 769,
    	      settings: {
    	        slidesToShow: 1,
    	        slidesToScroll: 1
    	      }
    	    }
      ]
    });

    function inlineCSS() {
    	// Common Inline CSS
      $(".main-search-container, section.fullwidth, .listing-slider .item, .address-container, .img-box-background, .image-edge, .edge-bg").each(function() {
    		var attrImageBG = $(this).attr('data-background-image');
    		var attrColorBG = $(this).attr('data-background-color');

            if(attrImageBG !== undefined) {
                $(this).css('background-image', 'url('+attrImageBG+')');
            }

            if(attrColorBG !== undefined) {
                $(this).css('background', ''+attrColorBG+'');
            }
    	});
    }

    // Init
    inlineCSS();


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

        <Section1 />
        <div className="clearfix"></div>
        <Section2 />
        <Section3 />
        <Section4 />

        {/* <!-- Footer
        ================================================== --> */}
        <div id="footer" className="sticky-footer">
         {/* <!-- Main --> */}
         <div className="container">
           <div className="row">
             <div className="col-md-5 col-sm-6">
               <img className="footer-logo" src="images/logo.png" alt=""/>
               <br/><br/>
               <p>Morbi convallis bibendum urna ut viverra. Maecenas quis
                 consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi
                 ultricies laoreet ullamcorper phasellus semper.</p>
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
