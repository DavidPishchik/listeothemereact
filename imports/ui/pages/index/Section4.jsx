import React, { Component } from 'react';

export default class Section4 extends Component {
  
  render() {
    return (
      <div>

        {/* <!-- Info Section --> */}
        <div className="container">

         <div className="row">
           <div className="col-md-8 col-md-offset-2">
             <h2 className="headline centered margin-top-80">
               Plan The Vacation of Your Dreams
               <span className="margin-top-25">Explore some of the best tips from around the world from our partners and friends.  Discover some of the most popular listings in Sydney.</span>
             </h2>
           </div>
         </div>

         <div className="row icons-container">
           {/* <!-- Stage --> */}
           <div className="col-md-4">
             <div className="icon-box-2 with-line">
               <i className="im im-icon-Map2"></i>
               <h3>Find Interesting Place</h3>
               <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</p>
             </div>
           </div>

           {/* <!-- Stage --> */}
           <div className="col-md-4">
             <div className="icon-box-2 with-line">
               <i className="im im-icon-Mail-withAtSign"></i>
               <h3>Contact a Few Owners</h3>
               <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum metus nullam viverra porta purus.</p>
             </div>
           </div>

           {/* <!-- Stage --> */}
           <div className="col-md-4">
             <div className="icon-box-2">
               <i className="im im-icon-Checked-User"></i>
               <h3>Make a Reservation</h3>
               <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin feugiat pharetra consectetur.</p>
             </div>
           </div>
         </div>

        </div>
        {/* <!-- Info Section / End --> */}


        {/* <!-- Recent Blog Posts --> */}
        <section className="fullwidth border-top margin-top-70 padding-top-75 padding-bottom-75" data-background-color="#fff">
         <div className="container">

           <div className="row">
             <div className="col-md-12">
               <h3 className="headline centered margin-bottom-45">
                 From The Blog
               </h3>
             </div>
           </div>

           <div className="row">
             {/* <!-- Blog Post Item --> */}
             <div className="col-md-4">
               <a href="pages-blog-post.html" className="blog-compact-item-container">
                 <div className="blog-compact-item">
                   <img src="images/blog-compact-post-01.jpg" alt=""/>
                   <span className="blog-item-tag">Tips</span>
                   <div className="blog-compact-item-content">
                     <ul className="blog-post-tags">
                       <li>22 August 2017</li>
                     </ul>
                     <h3>Hotels for All Budgets</h3>
                     <p>Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque.</p>
                   </div>
                 </div>
               </a>
             </div>
             {/* <!-- Blog post Item / End --> */}

             {/* <!-- Blog Post Item --> */}
             <div className="col-md-4">
               <a href="pages-blog-post.html" className="blog-compact-item-container">
                 <div className="blog-compact-item">
                   <img src="images/blog-compact-post-02.jpg" alt=""/>
                   <span className="blog-item-tag">Tips</span>
                   <div className="blog-compact-item-content">
                     <ul className="blog-post-tags">
                       <li>18 August 2017</li>
                     </ul>
                     <h3>The 50 Greatest Street Arts In London</h3>
                     <p>Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque.</p>
                   </div>
                 </div>
               </a>
             </div>
             {/* <!-- Blog post Item / End --> */}

             {/* <!-- Blog Post Item --> */}
             <div className="col-md-4">
               <a href="pages-blog-post.html" className="blog-compact-item-container">
                 <div className="blog-compact-item">
                   <img src="images/blog-compact-post-03.jpg" alt=""/>
                   <span className="blog-item-tag">Tips</span>
                   <div className="blog-compact-item-content">
                     <ul className="blog-post-tags">
                       <li>10 August 2017</li>
                     </ul>
                     <h3>The Best Cofee Shops In Sydney Neighborhoods</h3>
                     <p>Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque.</p>
                   </div>
                 </div>
               </a>
             </div>
             {/* <!-- Blog post Item / End --> */}

             <div className="col-md-12 centered-content">
               <a href="pages-blog.html" className="button border margin-top-10">View Blog</a>
             </div>

           </div>

         </div>
        </section>
        {/* <!-- Recent Blog Posts / End --> */}

      </div>
    );
  }
}
