import React, { useEffect, useState } from "react";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import { CloseButton, Form, Table } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { base_url } from "../../../constants/staticData";
import { packageInterface } from "../../../interface/Interface";
import './PackageManagement.scss'

export default function PackageManagment() {
  // this state for store popup status.
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  // this state for store Package Details
  const [packagesData, setPackagesData] = useState<packageInterface[]>([]);

  // this state for store boolean value for show edit popup
  const [editPopup, setEditPopup] = useState<boolean>(false);

  // this states for handle form data
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState<number>(0)
  const [orginalPrice, setOrginalPrice] = useState<number>(0)
  const [roomRating, setRoomRating] = useState<number>(0)
  const [day, setDay] = useState<number>(0)
  const [night, setNight] = useState<number>(0)
  const [foodTime, setFoodTime] = useState<number>(0)

  // this state for store Id which Blog want to edit
  const [editBlogId, setEditBlogId] = useState("");

  // this function using for close popup and clear all input field
  const handlePopupClose = () => {
    setIsOpenPopup(false);
  };

  const clearAllData =  () => {
   setHeading("");
    setDescription("");
     setImage("");
     setCity("");
     setState("");
     setPrice(0);
    setOrginalPrice(0);
     setRoomRating(0);
    setDay(0)
    setNight(0)
    setFoodTime(0)

  }

  const fetPackgeDetails = async () => {
    let res = await axios.get(`${base_url}/package`);
    console.log("res", res.data.packagesDetails);
    let responseData = res.data.packagesDetails;
    setPackagesData(responseData);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: any) => {
      const formData = {
        heading:heading,
        image: image,
        description:description,
        price: price,
        orginalPrice : orginalPrice,
        roomRating : roomRating,
        city: city,
        state: state,
        day : day,
        night : night,
        foodTime : foodTime,
      };

      try {
        let res = await axios.post(`${base_url}/package`, formData);
        if (res.status === 200) {
          setIsOpenPopup(false);
          fetPackgeDetails();
          clearAllData();
        } else {
          console.log("somting wrong");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
  };

  // this fuction using for edit Blog
  const handleEditPackge = (packageData: packageInterface) => {
    console.log("packageData",packageData);
    
    setHeading(packageData.heading);
    setDescription(packageData.description);
     setImage(packageData.image);
     setCity(packageData.city);
     setState(packageData.state);
     setPrice(parseInt(packageData.price));
    setOrginalPrice(parseInt(packageData.orginalPrice));
     setRoomRating(packageData.roomRating);
    setDay(packageData.day)
    setNight(packageData.night)
    setFoodTime(packageData.foodTime)
  };

  // this fuciton using for pass value into backend
  const handleEditSubmit = async (e: any) => {
    const EditedData = {
      heading:heading,
      image:base_url,
      description:description,
      price: price,
      orginalPrice : orginalPrice,
      roomRating : roomRating,
      city: city,
      state: state,
      day : day,
      night : night,
      foodTime : foodTime,
    };

    try {
      let res = await axios.put(`${base_url}/package`, EditedData, {
        params: { Id: editBlogId },
      });
      if (res.status === 200) {
        setEditPopup(false);
        fetPackgeDetails();
        clearAllData();
      } else {
        console.log("somting wrong");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }

  };

  // this fuciton using for delete a blog
  const handleDeletePackage = (Id: string) => {
    console.log(Id);
    
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
          let res = await axios.delete(`${base_url}/package`, { params: { Id } });
          console.log("delete",res);
          
          if (res.status === 200) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your Blog has been deleted.",
              icon: "success",
            });
            fetPackgeDetails();
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

  useEffect(()=>{
    fetPackgeDetails();
  },[])

  return (
    <div className="PackageManagement">
      {/* This is a component which is using for show navbar */}
      <AdminNavbar option={"package"} />
      <div>
        <div className="m-5 fw-bold fs-3 text-center">PackageManagment</div>
        <div className="text-end me-5 mb-3">
          <button
            className="btn btn-primary"
            onClick={() => {
              setEditPopup(false);
              setIsOpenPopup(!isOpenPopup);
            }}
          >
            Add Package
          </button>
        </div>
        {isOpenPopup && (
          <div className="add-popup">
            <div className="position-absolute z-3 top-0 bottom-0 m-5 w-75 border border-2 rounded p-3 bg-light overflow-auto">
            <div className="position-absolute z-3 top-0 end-0 m-4">
                  <CloseButton onClick={handlePopupClose} />
                </div>
                <form className="p-3">
                  <div className="d-flex my-3 flex-wrap align-items-center justify-content-between">
                  <div className="col-md-7 col-12">
                    <div>
                    <label htmlFor="name" className="form-label mt-2">
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
                  </div>
                  <div className="col-md-5 col-12">
                    <div className="row m-">
                    <label htmlFor="duration" className="form-label mt-2">
                      Heading
                    </label>
                    <div id="duration" className="d-flex">
                    <div  className="col-6 col-md-3 m-1">
                      <Form.Select aria-label="Default select example" onChange={(e)=>{setDay(parseInt(e.target.value))}}>
                        <option>Day</option>
                        <option value='1'>1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                      </Form.Select>

                    </div>
                    <div className="col-6 col-md-3 m-1">
                      <Form.Select aria-label="Default select example" onChange={(e)=>{setNight(parseInt(e.target.value))}}>
                        <option>Night</option>
                        <option value='1' >1</option>
                        <option value="2"  >2</option>
                        <option value="3"  >3</option>
                        <option value="4"  >4</option>
                        <option value="5"  >5</option>
                      </Form.Select>
</div>
                    </div>
                    </div>
                    {/* <input
                      type="file"
                      name="image"
                      id="imageInput"
                      accept="image/*"
                      onChange={handleImageUpload}
                    /> */}
                  </div>
                  </div>

                  <div className="package-acivities">

                  </div>
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                    <label className="ms-3" htmlFor="floatingTextarea2">
                      Description
                    </label>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="name" className="form-label">
                        Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={(e) => {
                          setPrice(parseInt(e.target.value));
                        }}
                        id="name"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="name" className="form-label">
                        Offer Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={orginalPrice}
                        onChange={(e) => {
                          setOrginalPrice(parseInt(e.target.value));
                        }}
                        id="name"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="name" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                        id="name"
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="name" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-wrap align-items-center justify-content-evenly my-3">
                    <div className="mx-1">
                      <Form.Select aria-label="Default select example" onChange={(e)=>{setRoomRating(parseInt(e.target.value))}} >
                        <option>Room Rating</option>
                        <option value='1'>1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                      </Form.Select>
                    </div>

                    <div className="mx-1">
                      <Form.Select aria-label="Default select example" onChange={(e)=>{setFoodTime(parseInt(e.target.value))}}>
                        <option>Food Time</option>
                        <option value='1'>1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                      </Form.Select>
                    </div>
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
        )}

        {editPopup && (
          <div className="d-flex align-items-center justify-content-center">
          <div className="position-absolute z-3 mt-5 w-75 border border-2 rounded p-3 bg-light">
            <div>
              <div className="text-end">
                <CloseButton onClick={()=>{setEditPopup(false); clearAllData();}} />
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
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                  <label className="ms-3" htmlFor="floatingTextarea2">
                    Description
                  </label>
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="name" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={price}
                      onChange={(e) => {
                        setPrice(parseInt(e.target.value));
                      }}
                      id="name"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="name" className="form-label">
                      Offer Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={orginalPrice}
                      onChange={(e) => {
                        setOrginalPrice(parseInt(e.target.value));
                      }}
                      id="name"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label htmlFor="name" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      id="name"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label htmlFor="name" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      id="name"
                    />
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-evenly my-3">
                  <div className="mx-1">
                    <Form.Select aria-label="Default select example" value={roomRating} onChange={(e)=>{setRoomRating(parseInt(e.target.value))}} >
                      <option>Room Rating</option>
                      <option value='1'>1</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                      <option value="4" >4</option>
                      <option value="5" >5</option>
                    </Form.Select>
                  </div>
                  <div className="mx-1">
                    <Form.Select aria-label="Default select example" value={day} onChange={(e)=>{setDay(parseInt(e.target.value))}}>
                      <option>Day</option>
                      <option value='1'>1</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                      <option value="4" >4</option>
                      <option value="5" >5</option>
                    </Form.Select>
                  </div>
                  <div className="mx-1">
                    <Form.Select aria-label="Default select example" value={night} onChange={(e)=>{setNight(parseInt(e.target.value))}}>
                      <option>Night</option>
                      <option value='1' >1</option>
                      <option value="2"  >2</option>
                      <option value="3"  >3</option>
                      <option value="4"  >4</option>
                      <option value="5"  >5</option>
                    </Form.Select>
                  </div>
                  <div className="mx-1">
                    <Form.Select aria-label="Default select example" value={foodTime} onChange={(e)=>{setFoodTime(parseInt(e.target.value))}}>
                      <option>Food Time</option>
                      <option value='1'>1</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                      <option value="4" >4</option>
                      <option value="5" >5</option>
                    </Form.Select>
                  </div>
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
        <div className="px-5 overflow-auto">
          <Table bordered className="text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Package Name</th>
                <th scope="col">Orginal Price</th>
                <th scope="col">Offer Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {packagesData.map((data: any, index: number)=>{
                return(
                  <tr>
                  <th scope="row">{index+1}</th>
                  <td>{data.heading}</td>
                  <td>{data.orginalPrice}</td>
                  <td>{data.price}</td>
                  <td>
                    <FaEdit onClick={()=>{setIsOpenPopup(false); setEditBlogId(data._id); setEditPopup(true); handleEditPackge(data)}} className="fs-4" />
                  </td>
                  <td>
                    <MdDeleteForever onClick={()=>{handleDeletePackage(data._id)}} className="fs-3 text-danger" />
                  </td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
