import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { postFile } from "../api/api";

function Upload(props) {
  const [formData, setFormData] = useState({
    file: "",
    user: 1,
  });

  useEffect(() => {
    postFile({
      ...formData,
    });
  }, [formData]);

  return (
    <div>
      <Button variant="contained" component="label">
        Upload File
        <input
          type="file"
          hidden
          onChange={(e) => {
            setFormData({
              ...formData,
              file: e.target.files[0],
            });
          }}
        />
      </Button>
    </div>
  );
}

export default Upload;
