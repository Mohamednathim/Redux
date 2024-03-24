import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { playlists } from "../data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPlaylist } from "../redux/slice/playlist/selectedPlaylistSlice";
import { fetchPlaylists } from "../redux/slice/playlist/playlistSlice";
import Spinner from "react-bootstrap/esm/Spinner";
import { FETCH_PLAYLIST_REQUEST } from "../redux/actions/playlistActions";

const Playlist = () => {
  const navigate = useNavigate();
  const playlists = useSelector((state) => state.playlists.data);
  const isLoading = useSelector((state) => state.playlists.isLoading);
  const error = useSelector((state) => state.playlists.error);
  const dispatch = useDispatch();

  const viewPlaylist = (playlist) => {
    dispatch(setSelectedPlaylist(playlist));
    navigate("/playlist");
  };

  useEffect(() => {
    dispatch(FETCH_PLAYLIST_REQUEST());
  }, []);

  if (isLoading) {
    return (
      <div style={{ height: 500 }} className="d-flex justify-content-center">
        <Spinner
          className="align-self-center"
          style={{ height: 100, width: 100 }}
          animation="border"
          variant="warning"
        />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="container mt-1">
      <h2>Playlist</h2>
      <div className="card-deck">
        {playlists?.length > 0 ? (
          playlists.map((playlist) => (
            <Card
              key={playlist.id}
              className="m-3 text-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src={playlist.url}
                alt={playlist.title}
                height={150}
              />
              <Card.Body>
                <Card.Title>{playlist.title}</Card.Title>
                <Card.Text>{playlist.description}</Card.Text>
                <Button
                  onClick={() => viewPlaylist(playlist)}
                  variant="primary"
                >
                  View
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div>Playlists not found</div>
        )}
      </div>
    </div>
  );
};

export default Playlist;
