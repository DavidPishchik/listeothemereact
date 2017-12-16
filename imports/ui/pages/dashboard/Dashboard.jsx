import React, { Component } from 'react';
import DashboardSection1 from './DashboardSection1';
import DashboardSection2 from './DashboardSection2';
import $ from 'jquery';

export default class Dashboard extends Component {
  componentDidMount() {
    $(window).on('load resize', function () {
      $('.dashboard-stat-content h4').counterUp({
        delay: 100,
        time: 800,
      });
    });

    function numericalRating(ratingElem) {
    	$(ratingElem).each(function() {
    		var dataRating = $(this).attr('data-rating');
    		// Rules
  	    if (dataRating >= 4.0) {
  	      $(this).addClass('high');
  	    } else if (dataRating >= 3.0) {
  	      $(this).addClass('mid');
  	    } else if (dataRating < 3.0) {
  	      $(this).addClass('low');
  	    }
    	});
    };

    numericalRating('.numerical-rating');
  }


  render() {

    return (
      <div>
        {/* <!-- Wrapper --> */}
        <div id="wrapper">
          <DashboardSection1 />
          <DashboardSection2 />
        </div>
        {/* <!-- Wrapper / End --> */}

      </div>
    );
  }
}
