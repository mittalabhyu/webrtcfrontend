import React from "react";
import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";

const MainPageButton = () => {
  const start = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        mediaSource: 'screen',
      },

    })

    const data = [];
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (e) => {
      data.push(e.data);
    }
    mediaRecorder.start();
    mediaRecorder.onstop = (e) => {
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";

      var url = window.URL.createObjectURL(new Blob((data), { type: "video/mp4" }));

      a.href = url;
      a.download = "filename.mp4";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }
  return (
    <Button
      onClick={() => start()}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865F2",
      }}
    >
      <GroupsIcon />
    </Button>
  );
};

export default MainPageButton;
