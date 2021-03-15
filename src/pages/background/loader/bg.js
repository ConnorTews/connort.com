import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import GetLocalPosts from "./img";
import GetLocalPosts4k from "./img4k";

export default function Background() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
              <button type="button" onClick={handleOpen}>
                <GetLocalPosts />
              </button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <GetLocalPosts4k />
                </Fade>
              </Modal>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
