/* rafce */
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../helpers/AuthContext";

const CreatePost = () => {
  // const { authState } = useContext(AuthContext);

  const navigate = useNavigate();

  const initialValues = {
    title: "",
    postText: "",
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, [navigate]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    postText: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8800/posts", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((res) => {
        navigate("/");
      });
  };

  return (
    <div className="createPostPage">
      <h1 style={{ textAlign: "center", color: "gray" }}>Create A Post</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Title...)"
          />
          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. Post...)"
          />
          <button type="submit"> Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;
