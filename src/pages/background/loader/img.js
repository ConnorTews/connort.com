import React, { Component } from "react";
import ImageLoader from "react-imageloader";
import posts from "./pre_img";

function preloader() {
  return (
    <div className="loader">
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </div>
  );
}

class GetLocalPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts,
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.map((posts) => (
          <div key={posts.id}>
            <ImageLoader
              src={posts.imgPath}
              wrapper={React.createFactory("div")}
              preloader={preloader}
            >
              Image load failed!
            </ImageLoader>
            {/* <img src={posts.imgPath} alt="ad" /> */}
          </div>
        ))}
      </div>
    );
  }
}

export default GetLocalPosts;
