import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { courses, playlists } from "../data";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCourse } from "../redux/slice/course/selectedCourseSlice";

const PlaylistDetails = () => {
  const playlist = useSelector((state) => state.selectedPlaylist);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewCourses = (course) => {
    dispatch(setSelectedCourse(course));
    navigate("/course");
  };
  return (
    <div>
      <h2>{playlist.title} Playlist</h2>
      <div className="container d-flex justify-content-center mt-2">
        {playlist.courses.map((course) => (
          <Card
            key={course.id}
            className="m-3 text-center"
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              src={course.url}
              alt={course.title}
              height={300}
            />
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Button onClick={() => viewCourses(course)} variant="primary">
                Playlist
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetails;
