import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FormBlog from "../components/formBlog";
import { AuthGetById, AuthHandleUserData } from "../services/authService";

const EditBlogPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    AuthGetById(id)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.error(error.response.data.message);
      });
  }, [id]);

  const handleUpdatedData = (e) => {
    e.preventDefault();
    AuthHandleUserData(id, data)
      .then((res) => {
        toast.success(res.data);
        navigate("/my-blogs");
      })
      .catch((error) => {
        console.error("Error Updating Blog", error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <FormBlog
      data={data}
      setData={setData}
      buttonName="Update Blog"
      handleSubmit={handleUpdatedData}
    />
  );
};

export default EditBlogPost;
