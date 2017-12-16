import React, { Component } from 'react';

export default class ProfileSection2 extends Component {
  render() {
    return (
      <div>

        		{/* <!-- Content
        		================================================== --> */}
        		<div className="col-lg-8 col-md-8 padding-left-30">

        			<h3 className="margin-top-0 margin-bottom-40">Tom's Listings</h3>

        			{/* <!-- Listings Container --> */}
        			<div className="row">

        				{/* <!-- Listing Item --> */}
        				<div className="col-lg-12 col-md-12">
        					<div className="listing-item-container list-layout">
        						<a href="listings-single-page.html" className="listing-item">

        							{/* <!-- Image --> */}
        							<div className="listing-item-image">
        								<img src="images/listing-item-01.jpg" alt=""/>
        								<span className="tag">Eat & Drink</span>
        							</div>

        							{/* <!-- Content --> */}
        							<div className="listing-item-content">
        								<div className="listing-badge now-open">Now Open</div>

        								<div className="listing-item-inner">
        									<h3>Tom's Restaurant</h3>
        									<span>964 School Street, New York</span>
        									<div className="star-rating" data-rating="3.5">
        										<div className="rating-counter">(12 reviews)</div>
        									</div>
        								</div>

        								<span className="like-icon"></span>
        							</div>
        						</a>
        					</div>
        				</div>
        				{/* <!-- Listing Item / End --> */}

        				{/* <!-- Listing Item --> */}
        				<div className="col-lg-12 col-md-12">
        					<div className="listing-item-container list-layout">
        						<a href="listings-single-page.html" className="listing-item">

        							{/* <!-- Image --> */}
        							<div className="listing-item-image">
        								<img src="images/listing-item-03.jpg" alt=""/>
        								<span className="tag">Hotels</span>
        							</div>

        							{/* <!-- Content --> */}
        							<div className="listing-item-content">

        								<div className="listing-item-inner">
        								<h3>Hotel Govendor</h3>
        								<span>778 Country Street, New York</span>
        									<div className="star-rating" data-rating="2.0">
        										<div className="rating-counter">(17 reviews)</div>
        									</div>
        								</div>

        								<span className="like-icon"></span>

        								<div className="listing-item-details">Starting from $59 per night</div>
        							</div>
        						</a>
        					</div>
        				</div>
        				{/* <!-- Listing Item / End --> */}

        				{/* <!-- Listing Item --> */}
        				<div className="col-lg-12 col-md-12">
        					<div className="listing-item-container list-layout">
        						<a href="listings-single-page.html" className="listing-item">

        							{/* <!-- Image --> */}
        							<div className="listing-item-image">
        								<img src="images/listing-item-04.jpg" alt=""/>
        								<span className="tag">Eat & Drink</span>
        							</div>

        							{/* <!-- Content --> */}
        							<div className="listing-item-content">
        								<div className="listing-badge now-open">Now Open</div>

        								<div className="listing-item-inner">
        								<h3>Burger House</h3>
        								<span>2726 Shinn Street, New York</span>
        									<div className="star-rating" data-rating="5.0">
        										<div className="rating-counter">(31 reviews)</div>
        									</div>
        								</div>

        								<span className="like-icon"></span>
        							</div>
        						</a>
        					</div>
        				</div>
        				{/* <!-- Listing Item / End --> */}

        				<div className="col-md-12 browse-all-user-listings">
        					<a href="#">Browse All Listings <i className="fa fa-angle-right"></i> </a>
        				</div>

        			</div>
        			{/* <!-- Listings Container / End --> */}


        			{/* <!-- Reviews --> */}
        			<div id="listing-reviews" className="listing-section">
        				<h3 className="margin-top-60 margin-bottom-20">Reviews</h3>

        				<div className="clearfix"></div>

        				{/* <!-- Reviews --> */}
        				<section className="comments listing-reviews">

        					<ul>
        						<li>
        							<div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
        							<div className="comment-content"><div className="arrow-comment"></div>
        								<div className="comment-by">Kathy Brown <div className="comment-by-listing">on <a href="#">Burger House</a></div> <span className="date">June 2017</span>
        									<div className="star-rating" data-rating="5"></div>
        								</div>
        								<p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>

        								<div className="review-images mfp-gallery-container">
        									<a href="images/review-image-01.jpg" className="mfp-gallery"><img src="images/review-image-01.jpg" alt=""/></a>
        								</div>
        							</div>
        						</li>

        						<li>
        							<div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /> </div>
        							<div className="comment-content"><div className="arrow-comment"></div>
        								<div className="comment-by">John Doe <div className="comment-by-listing">on <a href="#">Tom's Restaurant</a></div> <span className="date">May 2017</span>
        									<div className="star-rating" data-rating="4"></div>
        								</div>
        								<p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
        							</div>
        						</li>

        						<li>
        							<div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
        							<div className="comment-content"><div className="arrow-comment"></div>
        								<div className="comment-by">Kathy Brown <div className="comment-by-listing">on <a href="#">Burger House</a></div> <span className="date">June 2017</span>
        									<div className="star-rating" data-rating="5"></div>
        								</div>
        								<p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>

        								<div className="review-images mfp-gallery-container">
        									<a href="images/review-image-02.jpg" className="mfp-gallery"><img src="images/review-image-02.jpg" alt=""/></a>
        									<a href="images/review-image-03.jpg" className="mfp-gallery"><img src="images/review-image-03.jpg" alt=""/></a>
        								</div>
        							</div>
        						</li>

        						<li>
        							<div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /> </div>
        							<div className="comment-content"><div className="arrow-comment"></div>
        								<div className="comment-by">John Doe <div className="comment-by-listing">on <a href="#">Hotel Govendor</a></div> <span className="date">May 2017</span>
        									<div className="star-rating" data-rating="5"></div>
        								</div>
        								<p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
        							</div>

        						</li>
        					 </ul>
        				</section>

        				{/* <!-- Pagination --> */}
        				<div className="clearfix"></div>
        				<div className="row">
        					<div className="col-md-12">
        						{/* <!-- Pagination --> */}
        						<div className="pagination-container margin-top-30">
        							<nav className="pagination">
        								<ul>
        									<li><a href="#" className="current-page">1</a></li>
        									<li><a href="#">2</a></li>
        									<li><a href="#"><i className="sl sl-icon-arrow-right"></i></a></li>
        								</ul>
        							</nav>
        						</div>
        					</div>
        				</div>
        				<div className="clearfix"></div>
        				{/* <!-- Pagination / End --> */}
        			</div>


        		</div>


      </div>
    );
  }
}
