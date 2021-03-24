import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbums, getPhotos } from "../api";

const Albums= () => {
  const [state, setState] = useState({ albums: [] });

  const { id } = useParams();
  useEffect(() => {
    getAlbums(id).then((data) => {
      setState({ albums: data });
    });
  }, []);

  

  const showPhotos = (albumId) => {
    
    getPhotos(albumId).then(data => {
       const Photos = state.albums.map(album => {
         if(album.id === albumId) {
           album.photos = data
         }
         return album;
       })
      setState({albums : Photos})
    })

  }

  return (
    <ul>
      {state.albums.map((album) => (
        <li key={album.id}>
          <p>
            <strong>User Id:</strong>
            {album.id}
          </p>
          <p>
            <strong>Title:</strong>
            {album.title}
          </p>
          <button
            onClick={() => {
              showPhotos(album.id);
            }}
          >
            ShowPhotos
          </button>
          <ul>
            <li>
              {album.photos ? (
                <ul>
                  {album.photos.map((photo) => (
                    <li key={photo.id}>
                      <p>
                        <strong>Photo Id:</strong>
                        {photo.id}
                      </p>
                      <p>
                        <strong>Photo Title:</strong>
                        {photo.title}
                      </p>
                      <p>
                        {" "}
                        <strong>Photo url:</strong>
                        {photo.url}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Albums;
