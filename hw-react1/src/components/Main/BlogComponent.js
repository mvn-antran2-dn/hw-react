import React, { Component } from 'react';
import BlogItem from "./BlogItemComponent";

export default class Blog extends Component{
  render(){
    return(
      <section className = "section-blog">
            <div className = "container">
                <div className = "blog-title">
                    <h2>Latest News</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing.</p>
                </div>
                <ul className = "blog-list row">
                   <BlogItem href = "https://flone.reactdemo.hasthemes.com/blog-details-standard"
                             src = "https://flone.reactdemo.hasthemes.com/assets/img/blog/blog-1.jpg"
                             title = "A guide to latest trends"
                             content = "ADMIN"
                             span1 = "lifestyle"
														 span2 = "men"
                    />
										<BlogItem href = "https://flone.reactdemo.hasthemes.com/blog-details-standard"
                             src = "https://flone.reactdemo.hasthemes.com/assets/img/blog/blog-2.jpg"
                             title = "Five ways to lead a happy life"
                             content = "ADMIN"
														 span1 = "lifestyle"
                             span2 = "men"
                    />
										<BlogItem href = "https://flone.reactdemo.hasthemes.com/blog-details-standard"
                             src = "https://flone.reactdemo.hasthemes.com/assets/img/blog/blog-3.jpg"
                             title = "Tips on having a happy life"
                             content = "ADMIN"
														 span1 = "lifestyle"
														 span2 = "men"
                    />
                </ul>
            </div>
        </section>
    );
  };
}
