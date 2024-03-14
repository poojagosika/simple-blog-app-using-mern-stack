import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormBlog from "../components/formBlog";
import { AuthNewBlog } from "../services/authService";

const NewBlogPost = () => {
  const [data, setData] = useState({ title: "", body: "", authorId: "" });
  const navigate = useNavigate();

  const handleNewblogpost = (e) => {
    e.preventDefault();

    AuthNewBlog(data.title, data.body, localStorage.getItem("userId"))
      .then((result) => {
        toast.success("New Blog Susccessfully Created");
        navigate("/my-blogs");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.warn(error.response.data.message);
      });
  };
  return (
    <FormBlog
      data={data}
      setData={setData}
      buttonName="Create Blog"
      handleSubmit={handleNewblogpost}
    />
  );
};

export default NewBlogPost;
