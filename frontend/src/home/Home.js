import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFiles } from "../api/api";
import Upload from "../upload/Upload";

function Home(props) {
  const token = localStorage.getItem("token");

  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    getFiles().then((res) => {
      setUploads(res.data);
    });
  }, []);

  console.log(uploads);
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        {uploads.map((item) => {
          return (
            <ListItem
              key={item.url}
              disableGutters
              secondaryAction={<p>Download File</p>}
            >
              <ListItemText
                primary={`${item.file.split("/").pop()}`}
              ></ListItemText>
            </ListItem>
          );
        })}
      </List>

      <Upload></Upload>
    </div>
  );
}

export default Home;
