import { useState} from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../firebase";
import { Button, Input } from "@mui/material";

function Upload() {
  const [imgUpload, setImgUpload] = useState(null);
  const [upload, setUpload] = useState(false)
  const uploadFile = () => {
    if (imgUpload == null) return;
    const imageRef = ref(storage, `/${imgUpload.name}`);
    uploadBytes(imageRef, imgUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(() => {
      });
    });
    setUpload(true)
  };

  return (
    <div className="Upload">
      <div className="Absalute">
        <Input
        type="file"
        onChange={(event) => {
          setImgUpload(event.target.files[0]);
        }}/>
      <Button sx={{border: "1px solid blue"}} onClick={uploadFile}> Upload Image</Button>
      </div> 
      {upload}
    </div>
  );
}

export default Upload;




