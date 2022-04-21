import React, { Component } from 'react';

class BlogItem extends Component{
    render(){
      return(
        <li className = "blog-item col-4">
          <div className = "blog-img ">
              <a href = {this.props.href} className = "blog-img-default">
                  <img src = {this.props.src} alt = {this.props.title} />
              </a>
              <div className = "blog-tag d-flex">
                  <span>{this.props.span1}</span>
                  <span>{this.props.span2}</span>
              </div>
          </div>
          <div className = "blog-content">
              <h3><a href = "" className = "blog-header">{this.props.title}</a></h3>
              <p className = "blog-contact">By <a href = ".">{this.props.content}</a> </p>
          </div>
      </li>
    );
  }
}

export default BlogItem;
