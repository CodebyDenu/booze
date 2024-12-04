"use client";
import { AppContext } from "@/context/AppContext";
import Header from "@/layout/Header";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const { token, backendUrl, userData, setUserData, loadUserProfileData } =
    useContext(AppContext);
  // Function to update user profile data using API
  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("mobile", userData.mobile);
      formData.append("line1", JSON.stringify(userData.address.line1));
      formData.append("line2", JSON.stringify(userData.address.line2));

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token === undefined || token === null) {
      router.push("/login");
    } else {
      router.push("/profile");
    }
  }, [token]);

  return (
    <>
      <Header theme="dark" />
      <div className="container-fluid vh-100 d-flex align-items-center">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-4 bg-white shadow-lg rounded-3 p-25">
            <div className="row d-flex justify-content-center">
              <img
                src="/assets/images/profile-icon.png"
                className="img-fluid w-50 col-12"
              />
              <div className="d-flex justify-content-center flex-column">
                <p className="text-body lead text-center mt-10">
                  Your Name: {userData.name}
                </p>
                <div className="col-12 d-flex justify-content-center">
                  <button className="theme-btn style-two col-10">
                    Shop
                    <i className="far fa-arrow-alt-right" />
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-center mt-10">
                  <button
                    className="theme-btn style-two col-10"
                    onClick={() => setVisible(true)}
                  >
                    Personal Information
                    <i className="far fa-arrow-alt-right" />
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-center mt-10">
                  <button
                    className="theme-btn style-two col-10"
                    onClick={() => setVisible(false)}
                  >
                    My Orders
                    <i className="far fa-arrow-alt-right" />
                  </button>
                </div>
                <p className="text-danger lead mt-10 text-center">
                  <i className="fas fa-sign-out"></i> Log Out
                </p>
              </div>
            </div>
          </div>

          {visible ? (
            <div className="col-12 col-lg-8 d-flex justify-content-center mt-5 mt-lg-0">
              <div className="header bg-white shadow-lg rounded-3 p-25 col-12">
                <p className="h2 fw-semibold text-center">
                  Personal Information 
                </p>
                <p className="lead text-center">Bite Into Booze</p>
                <form onSubmit={updateUserProfileData}>
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <p className="text-body">Full Name</p>
                      {isEdit ? (
                        <input
                          value={userData.name}
                          className="form-control mt-1"
                          type="text"
                          placeholder="Full Name"
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                        />
                      ) : (
                        <input
                          value={userData.name}
                          className="form-control mt-1"
                          type="text"
                          placeholder="Full Name"
                          readOnly
                          required
                        />
                      )}
                    </div>
                    <div className="col-12 col-lg-6">
                      <p className="text-body">Email</p>
                      {isEdit ? (
                        <input
                          readOnly
                          className="form-control mt-1"
                          type="text"
                          placeholder="Email Address"
                          required
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        <input
                          value={userData.email}
                          readOnly
                          className="form-control mt-1"
                          type="text"
                          placeholder="Email Address"
                          required
                        />
                      )}
                    </div>
                    <div className="col-12 col-lg-12">
                      <p className="text-body">Mobile Number</p>
                      {isEdit ? (
                        <input
                          className="form-control mt-1"
                          type="number"
                          placeholder="Mobile Number"
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              mobile: e.target.value,
                            }))
                          }
                          required
                        />
                      ) : (
                        <input
                          value={userData.mobile}
                          className="form-control mt-1"
                          type="number"
                          placeholder="Mobile Number"
                          readOnly
                          required
                        />
                      )}
                    </div>
                    <div className="col-12 col-lg-6">
                      <p className="text-body">Address Line 01</p>
                      {isEdit ? (
                        <input
                          className="form-control mt-1"
                          type="text"
                          placeholder="Address Line 01"
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              address: { line1: e.target.value },
                            }))
                          }
                          required
                        />
                      ) : (
                        <input
                          value={userData.address}
                          className="form-control mt-1"
                          type="text"
                          placeholder="Address Line 01"
                          readOnly
                          required
                        />
                      )}
                    </div>
                    <div className="col-12 col-lg-6">
                      <p className="text-body">Address Line 02</p>
                      {isEdit ? (
                        <input
                          className="form-control mt-1"
                          type="text"
                          placeholder="Address Line 02"
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              address: { line2: e.target.value },
                            }))
                          }
                          required
                        />
                      ) : (
                        <input
                          value={userData.address}
                          className="form-control mt-1"
                          type="text"
                          placeholder="Address Line 02"
                          readOnly
                          required
                        />
                      )}
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <div className="col-12 col-lg-10 mt-10">
                        <button
                          className="theme-btn style-two col-12"
                          type="submit"
                          onClick={() => setIsEdit(true)}
                        >
                          Update Your Profile
                          <i className="far fa-arrow-alt-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="col-12 col-lg-8 d-flex justify-content-center mt-5 mt-lg-0">
              <div className="header bg-white shadow-lg rounded-3 p-25 col-12">
                <p className="h2 fw-semibold text-center">My Orders</p>
                <div className="row">
                  <div className="col-12 col-lg-6 shadow-sm rounded-3 p-10"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
