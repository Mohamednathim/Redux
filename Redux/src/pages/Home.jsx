import React, { useEffect } from "react";
// import { courses } from "../data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedCourse } from "../redux/slice/course/selectedCourseSlice";
import Spinner from "react-bootstrap/Spinner";
import { FETCH_COURSES_REQUEST } from "../redux/actions/courseActions";

const Home = () => {
  const navigate = useNavigate();
  const courses = useSelector((state) => state.courses.data);
  const isLoading = useSelector((state) => state.courses.isLoading);
  const error = useSelector((state) => state.courses.error);
  const dispatch = useDispatch();

  const viewCourses = (course) => {
    dispatch(setSelectedCourse(course));
    navigate("/course");
  };

  useEffect(() => {
    dispatch(FETCH_COURSES_REQUEST());
  }, []);

  if (isLoading) {
    return (
      <div style={{ height: 500 }} className="d-flex justify-content-center">
        <Spinner
          className="align-self-center"
          style={{ height: 100, width: 100 }}
          animation="border"
          variant="success"
        />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className="mt-1">
      <h2>Courses</h2>
      <div className="card-deck">
        {courses?.length > 0 ? (
          courses.map((course) => (
            <Card
              key={course.id}
              className="m-3 text-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                variant="top"
                src={course.url}
                alt={course.title}
                height={150}
              />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button onClick={() => viewCourses(course)} variant="primary">
                  Open
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div>Courses not found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
