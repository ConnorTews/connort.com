import React from "react";
import Paper from "@material-ui/core/Paper";

export default function website() {
  return (
    <div id="welcome" className="welcome">
      <div className="website_content">
        <Paper elevation={10}>
          <div className="padding_welcome">
            <h1>Welcome to my website.</h1>
            <p>
              <b>I'm remaking this website so things wont work probably.</b>
            </p>
          </div>
        </Paper>
      </div>
    </div>
  );
}
