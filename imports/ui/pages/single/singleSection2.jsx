import React, { Component } from 'react';

export default class SingleSection2 extends Component {
  render() {
    return (
      <div className="col-lg-8 col-md-8 padding-right-30">

        {/* <!-- Titlebar --> */}
        <div id="titlebar" className="listing-titlebar">
          <div className="listing-titlebar-title">
            <h2>Burger House <span className="listing-tag">Eat & Drink</span></h2>
            <span>
              <a href="#listing-location" className="listing-address">
                <i className="fa fa-map-marker"></i>
                2726 Shinn Street, New York
              </a>
            </span>
            <div className="star-rating" data-rating="5">
              <div className="rating-counter"><a href="#listing-reviews">(31 reviews)</a></div>
            </div>
          </div>
        </div>

        {/* <!-- Listing Nav --> */}
        <div id="listing-nav" className="listing-nav-container">
          <ul className="listing-nav">
            <li><a href="#listing-overview" className="active">Overview</a></li>
            <li><a href="#listing-pricing-list">Pricing</a></li>
            <li><a href="#listing-location">Location</a></li>
            <li><a href="#listing-reviews">Reviews</a></li>
            <li><a href="#add-review">Add Review</a></li>
          </ul>
        </div>

        {/* <!-- Overview --> */}
        <div id="listing-overview" className="listing-section">

          {/* <!-- Description --> */}

          <p>
            Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.
          </p>

          <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
          </p>

          {/* <!-- Amenities --> */}
          <h3 className="listing-desc-headline">Amenities</h3>
          <ul className="listing-features checkboxes margin-top-0">
            <li>Elevator in building</li>
            <li>Friendly workspace</li>
            <li>Instant Book</li>
            <li>Wireless Internet</li>
            <li>Free parking on premises</li>
            <li>Free parking on street</li>
          </ul>
        </div>


        {/* <!-- Food Menu --> */}
        <div id="listing-pricing-list" className="listing-section">
          <h3 className="listing-desc-headline margin-top-70 margin-bottom-30">Pricing</h3>

          <div className="show-more">
            <div className="pricing-list-container">

              {/* <!-- Food List --> */}
              <h4>Burgers</h4>
              <ul>
                <li>
                  <h5>Classic Burger</h5>
                  <p>Beef, salad, mayonnaise, spicey relish, cheese</p>
                  <span>$6</span>
                </li>
                <li>
                  <h5>Cheddar Burger</h5>
                  <p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
                  <span>$6</span>
                </li>
                <li>
                  <h5>Veggie Burger</h5>
                  <p>Panko crumbed and fried, grilled peppers and mushroom</p>
                  <span>$6</span>
                </li>
                <li>
                  <h5>Chicken Burger</h5>
                  <p>Cheese, chicken fillet, avocado, bacon, tomatoes, basil</p>
                  <span>$6</span>
                </li>
              </ul>

              {/* <!-- Food List --> */}
              <h4>Drinks</h4>
              <ul>
                <li>
                  <h5>Frozen Shake</h5>
                  <span>$4</span>
                </li>
                <li>
                  <h5>Orange Juice</h5>
                  <span>$4</span>
                </li>
                <li>
                  <h5>Beer</h5>
                  <span>$4</span>
                </li>
                <li>
                  <h5>Water</h5>
                  <span>Free</span>
                </li>
              </ul>

            </div>
          </div>
          <a href="#" className="show-more-button" data-more-title="Show More" data-less-title="Show Less"><i className="fa fa-angle-down"></i></a>
        </div>
        {/* <!-- Food Menu / End --> */}


        {/* <!-- Location --> */}
        <div id="listing-location" className="listing-section">
          <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Location</h3>

          <div id="singleListingMap-container">
            <div id="singleListingMap" data-latitude="40.70437865245596" data-longitude="-73.98674011230469" data-map-icon="im im-icon-Hamburger"></div>
            <a href="#" id="streetView">Street View</a>
          </div>
        </div>

        {/* <!-- Reviews --> */}
        <div id="listing-reviews" className="listing-section">
          <h3 className="listing-desc-headline margin-top-75 margin-bottom-20">Reviews <span>(12)</span></h3>

          <div className="clearfix"></div>

          {/* <!-- Reviews --> */}
          <section className="comments listing-reviews">

            <ul>
              <li>
                <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
                <div className="comment-content"><div className="arrow-comment"></div>
                  <div className="comment-by">Kathy Brown<span className="date">June 2017</span>
                    <div className="star-rating" data-rating="5"></div>
                  </div>
                  <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>

                  <div className="review-images mfp-gallery-container">
                    <a href="images/review-image-01.jpg" className="mfp-gallery"><img src="images/review-image-01.jpg" alt=""/></a>
                  </div>
                  <a href="#" className="rate-review"><i className="sl sl-icon-like"></i> Helpful Review <span>12</span></a>
                </div>
              </li>

              <li>
                <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /> </div>
                <div className="comment-content"><div className="arrow-comment"></div>
                  <div className="comment-by">John Doe<span className="date">May 2017</span>
                    <div className="star-rating" data-rating="4"></div>
                  </div>
                  <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                  <a href="#" className="rate-review"><i className="sl sl-icon-like"></i> Helpful Review <span>2</span></a>
                </div>
              </li>

              <li>
                <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
                <div className="comment-content"><div className="arrow-comment"></div>
                  <div className="comment-by">Kathy Brown<span className="date">June 2017</span>
                    <div className="star-rating" data-rating="5"></div>
                  </div>
                  <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>

                  <div className="review-images mfp-gallery-container">
                    <a href="images/review-image-02.jpg" className="mfp-gallery"><img src="images/review-image-02.jpg" alt=""/></a>
                    <a href="images/review-image-03.jpg" className="mfp-gallery"><img src="images/review-image-03.jpg" alt=""/></a>
                  </div>
                  <a href="#" className="rate-review"><i className="sl sl-icon-like"></i> Helpful Review <span>4</span></a>
                </div>
              </li>

              <li>
                <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /> </div>
                <div className="comment-content"><div className="arrow-comment"></div>
                  <div className="comment-by">John Doe<span className="date">May 2017</span>
                    <div className="star-rating" data-rating="5"></div>
                  </div>
                  <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                  <a href="#" className="rate-review"><i className="sl sl-icon-like"></i> Helpful Review</a>
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


        {/* <!-- Add Review Box --> */}
        <div id="add-review" className="add-review-box">

          {/* <!-- Add Review --> */}
          <h3 className="listing-desc-headline margin-bottom-20">Add Review</h3>

          <span className="leave-rating-title">Your rating for this listing</span>

          {/* <!-- Rating / Upload Button --> */}
          <div className="row">
            <div className="col-md-6">
              {/* <!-- Leave Rating --> */}
              <div className="clearfix"></div>
              <div className="leave-rating margin-bottom-30">
                <input type="radio" name="rating" id="rating-1" defaultValue="1"/>
                <label className="fa fa-star"></label>
                <input type="radio" name="rating" id="rating-2" defaultValue="2"/>
                <label className="fa fa-star"></label>
                <input type="radio" name="rating" id="rating-3" defaultValue="3"/>
                <label className="fa fa-star"></label>
                <input type="radio" name="rating" id="rating-4" defaultValue="4"/>
                <label className="fa fa-star"></label>
                <input type="radio" name="rating" id="rating-5" defaultValue="5"/>
                <label className="fa fa-star"></label>
              </div>
              <div className="clearfix"></div>
            </div>

            <div className="col-md-6">
              {/* <!-- Uplaod Photos --> */}
              <div className="add-review-photos margin-bottom-30">
                <div className="photoUpload">
                    <span><i className="sl sl-icon-arrow-up-circle"></i> Upload Photos</span>
                    <input type="file" className="upload" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Review Comment --> */}
          <form id="add-comment" className="add-comment">
            <fieldset>

              <div className="row">
                <div className="col-md-6">
                  <label>Name:</label>
                  <input type="text" defaultValue=""/>
                </div>

                <div className="col-md-6">
                  <label>Email:</label>
                  <input type="text" defaultValue=""/>
                </div>
              </div>

              <div>
                <label>Review:</label>
                <textarea cols="40" rows="3"></textarea>
              </div>

            </fieldset>

            <button className="button">Submit Review</button>
            <div className="clearfix"></div>
          </form>

        </div>
        {/* <!-- Add Review Box / End --> */}
      </div>

    );
  }
}
