import React, { Component } from "react";
import ImageLoader from "react-imageloader";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
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

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts,
    };
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="background">
        <div className="background_content">
          <Paper elevation={3}>
            <div className="padding_background">
              <div className="background_top">
                <h1>Backgrounds</h1>
                <Button>
                  <a href="#welcome">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chevron-up"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </a>
                </Button>
              </div>
              <div className="images">
                {posts.map((post) => (
                  <div key={post.id}>
                    <a href={post.imgPath4k}>
                      <ImageLoader
                        src={post.imgPath}
                        wrapper={React.createFactory("div")}
                        preloader={preloader}
                      ></ImageLoader>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
export default Background;
