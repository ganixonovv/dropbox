import {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { db } from "../firebase";
import { deleteDoc, doc,} from "firebase/firestore";
import { trash } from '../../constant/icons';
import {
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase";

export default function Cards({url}) {

  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    const storageRef = ref(storage, `/`);

    listAll(storageRef)
      .then(res => {
        const imagePromises = res.items.map(item => getDownloadURL(item));
        return Promise.all(imagePromises);
      })
      .then(urls => {
        setImgUrls(urls);
      })
      .catch(error => {
        console.error('Error retrieving images:', error);
      });
  }, [imgUrls]);

  const deleteImg = async (id) => {
        const movieDoc = doc(db, "movies", id);
        await deleteDoc(movieDoc);
      };

  return (
    <Card sx={{ maxWidth: 345, margin: "35px", border: "1px solid black" }}>
      { imgUrls.map(url => <div><CardActionArea>
        <CardMedia
          border="1px solid black"
          component="img"
          height="140"
          image={url}
          alt="fotos"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => deleteImg(url.id)}>
            <img width="24" height="24" src={trash} alt="trash"/>
        </Button>
      </CardActions></div>)}
    </Card>
  );
}