import React, { useEffect, useState } from "react";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import { CloseButton, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { base_url } from "../../../constants/staticData";
import Swal from "sweetalert2";
import { blog } from "../../../interface/Interface";

export default function BlogManagment() {
  // this state for store popup status.
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  // this state for store Blog Details
  const [blogDeta, setBlogData] = useState<blog[]>([]);

  // // this state for store which data want to edit
  // const [editBlog, setEditBlog] = useState({});

  // this state for store boolean value for show edit popup
  const [editPopup, setEditPopup] = useState<boolean>(false);

  // // this state using for set error form uplad image
  // const [error, setError] = useState("");

  // this states for handle form data
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");

  const [dataUrl, setDataUrl] = useState("");

  // this state for store Id which Blog want to edit
  const [editBlogId, setEditBlogId] = useState("");

  // this function using for close popup and clear all input field
  const handlePopupClose = () => {
    setIsOpenPopup(false);
  };

  const fetchBlogData = async () => {
    let res = await axios.get(`${base_url}/blog`);
    console.log("res", res.data.blogs);
    let responseData = res.data.blogs;
    setBlogData(responseData);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          setDataUrl(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: any) => {
    if (heading !== "" && content !== "" && dataUrl !== "") {
      const formData = {
        dataUrl,
        heading,
        content,
      };

      try {
        let res = await axios.post(`${base_url}/blog`, formData);
        if (res.status === 200) {
          setIsOpenPopup(false);
          fetchBlogData();
        } else {
          console.log("somting wrong");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      e.preventDefault();
    }
  };

  // this fuction using for edit Blog
  const handleEditBlog = (blog: blog) => {
    setHeading(blog.heading);
    setContent(blog.content);
    setDataUrl(blog.image);
    setEditBlogId(blog._id);
    setEditPopup(true);
  };

  // this fuciton using for pass value into backend
  const handleEditSubmit = async (e: any) => {
    if (heading !== "" && content !== "" && dataUrl !== "") {
      const EditedData = {
        dataUrl,
        heading,
        content,
      };

      try {
        let res = await axios.put(`${base_url}/blog`, EditedData, {
          params: { Id: editBlogId },
        });
        if (res.status === 200) {
          setEditPopup(false);
          fetchBlogData();
        } else {
          console.log("somting wrong");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      e.preventDefault();
    }
  };

  // this fuciton using for delete a blog
  const handleDeleteBolg = (Id: string) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result: any) => {
        if (result.isConfirmed) {
          let res = await axios.delete(`${base_url}/blog`, { params: { Id } });
          if (res.status === 200) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your Blog has been deleted.",
              icon: "success",
            });
            fetchBlogData();
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div>
      <AdminNavbar option={"blog"} />
      <div>
        <div className="m-5 fw-bold fs-3 text-center">Blog Management</div>
        <div className="text-end me-5 mb-3">
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsOpenPopup(!isOpenPopup);
              setEditPopup(false);
              setHeading("");
              setContent("");
              setDataUrl("");
            }}
          >
            Add Blog
          </button>
        </div>
        {isOpenPopup && (
          <div className="d-flex align-items-center justify-content-center">
            <div className="position-absolute z-3 mt-5 w-75 border border-2 rounded p-3 bg-light">
              <div>
                <div className="text-end">
                  <CloseButton onClick={handlePopupClose} />
                </div>
                <form className="p-3 row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="name" className="form-label">
                      Heading
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={heading}
                      onChange={(e) => {
                        setHeading(e.target.value);
                      }}
                      id="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="file"
                      name="image"
                      id="imageInput"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      value={content}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    ></textarea>
                    <label className="ms-3" htmlFor="floatingTextarea2">
                      Comments
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {editPopup && (
          <div className="d-flex align-items-center justify-content-center">
            <div className="position-absolute z-3 mt-5 w-75 border border-2 rounded p-3 bg-light">
              <div>
                <div className="text-end">
                  <CloseButton
                    onClick={() => {
                      setEditPopup(false);
                    }}
                  />
                </div>
                <form className="p-3 row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="name" className="form-label">
                      Heading
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={heading}
                      onChange={(e) => {
                        setHeading(e.target.value);
                      }}
                      id="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="file"
                      name="image"
                      id="imageInput"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      value={content}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    ></textarea>
                    <label className="ms-3" htmlFor="floatingTextarea2">
                      Comments
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleEditSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="px-5">
          <Table bordered className="text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Heading</th>
                <th scope="col">Content</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {blogDeta ? (
                <>
                  {blogDeta.map((blog, index) => {
                    const displayContent =
                      blog.content.length <= 10
                        ? blog.content
                        : `${blog.content.slice(0, 50)}...`;
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{blog.heading}</td>
                        <td>{displayContent}</td>
                        <td>
                          <FaEdit
                            onClick={() => {
                              handleEditBlog(blog);
                              setIsOpenPopup(false);
                            }}
                            className="fs-4"
                          />
                        </td>
                        <td>
                          <MdDeleteForever
                            onClick={() => {
                              handleDeleteBolg(blog._id);
                            }}
                            className="fs-3 text-danger"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <>
                  <div>Blog Data Not Found</div>
                </>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
