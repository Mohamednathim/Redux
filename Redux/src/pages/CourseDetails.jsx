import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { courses } from "../data";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CourseDetails = () => {
  const course = useSelector((state) => state.selectedCourse);
  const navigate = useNavigate();
  return (
    <div>
      <h2>Course Details Page</h2>
      <div className="container d-flex justify-content-center mt-2">
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
            <Button onClick={() => navigate("/")} variant="primary">
              Home
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetails;
