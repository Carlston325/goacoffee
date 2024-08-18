import { useState, useEffect, useRef } from "react";
import axios from "axios";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";

function AccountPage(props) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const dateInputRef = useRef(null);
  const [dateInputDisplay, setDateInputDisplay] = useState("none");
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState(() => {
    return props.userId || localStorage.getItem("userId");
  });
  const [updated, setUpdated] = useState();
  const [updateUserDetails, setUpdateUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
  });

  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId);

      async function fetchUserData() {
        try {
          const response = await axios.get(
            `http://localhost:5000/user/${userId}`
          );
          // console.log("Fetched userData:", response.data);
          setUserData(response.data[0]);
        } catch (err) {
          console.error("Error fetching user data: ", err.message);
        }
      }

      fetchUserData();
    } else {
      setMessage("No user found");
    }
  }, [userId]);

  // change date
  const handleButtonClick = () => {
    // Focus and click the date input programmatically
    if (dateInputRef.current) {
      setDateInputDisplay("block");
      setTimeout(() => {
        dateInputRef.current.showPicker();
      }, 100);
    }
  };

  // change email & password
  const [updateEmail, setUpdateEmail] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [passwordErr, setPasswordErr] = useState();
  const [passwordStyle, setPasswordStyle] = useState();

  function handleUpdateEmail() {
    setUpdateEmail(!updateEmail);
  }
  function handleUpdatePassword() {
    setUpdatePassword(!updatePassword);
  }

  function handleDetailsChange(e) {
    // const { name, value } = e.target;
    setUpdateUserDetails({
      ...updateUserDetails,
      [e.target.name]: e.target.value,
    });
  }

  // AXIOS UPDATE USER in DB
  async function handleUpdate() {
    if (!updateUserDetails.password || !updateUserDetails.confirm_password) {
      setPasswordErr("Both password fields are required");
      setPasswordStyle(false);
    } else if (
      updateUserDetails.password !== updateUserDetails.confirm_password
    ) {
      setPasswordErr("password does not match");
      setPasswordStyle(false);
    } else {
      setPasswordErr("password is valid");
      setPasswordStyle(true);
      const updatedDetails = {
        firstName: updateUserDetails.firstName || userData?.name,
        lastName: updateUserDetails.lastName || userData?.surname,
        email: updateUserDetails.email || userData?.email,
        password: updateUserDetails.password || null, // Ensure password handling is secure
        date_of_birth: updateUserDetails.date_of_birth || userData?.birthday,
      };

      try {
        const response = await axios.put(
          `http://localhost:5000/update/${userId}`,
          updatedDetails
        );
        setUpdated("User updated successfully");
        console.log(response.data.success);
      } catch (err) {
        console.error(
          "Error updating user:",
          err.response?.data || err.message
        );
      }

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

  // AXIOS DELETE USER from DB
  async function handleDelete() {
    try {
      const response = await axios.delete(
        `http://localhost:5000/delete/${userId}`
      );
      setUpdated("User deleted successfully");
      console.log(response.data.success);
      navigate("/");
    } catch (err) {
      console.error("Error deleting user: ", err.message);
    }
  }

  return (
    <>
      {!userData ? (
        <main
          className="layout__Main-sc-78ulcb-0 epUgWD"
          style={{ minHeight: "400px" }}
        >
          <div>
            <h1>{message}</h1>
          </div>
        </main>
      ) : (
        <main
          className="layout__Main-sc-78ulcb-0 epUgWD"
          style={{ minHeight: "400px" }}
        >
          <div id="tabs" className="AccountBodystyles__Tabs-sc-jui1ng-0 iotYOW">
            <div className="tabButtonsWrapper">
              <a id="details" className="tabSelected" href="#/details">
                <div className="svgWrapper">
                  <svg width="40" height="50" viewBox="0 0 40 50">
                    <g fill="none" fillRule="evenodd">
                      <g fill="#b51144" stroke="#b51144">
                        <path
                          d="M18.35 24h.291c2.67-.046 4.83-.996 6.424-2.813 3.507-4.003 2.924-10.866 2.86-11.52-.227-4.917-2.523-7.269-4.418-8.366C22.094.48 20.445.037 18.605 0h-.155c-1.011 0-2.998.166-4.902 1.264-1.913 1.097-4.246 3.45-4.473 8.402-.064.655-.647 7.518 2.86 11.521 1.586 1.817 3.745 2.767 6.415 2.813zM11.507 9.897c0-.027.01-.055.01-.074.3-6.613 4.938-7.323 6.924-7.323h.109c2.46.055 6.642 1.07 6.925 7.323 0 .028 0 .056.009.074.009.064.647 6.337-2.25 9.639-1.149 1.31-2.68 1.955-4.693 1.973h-.091c-2.004-.018-3.544-.663-4.683-1.973-2.888-3.284-2.269-9.584-2.26-9.639zM37.997 38.232v-.03c0-.078-.009-.157-.009-.245-.055-1.948-.176-6.502-4.19-7.958l-.093-.03c-4.172-1.13-7.642-3.688-7.679-3.718-.564-.423-1.341-.275-1.739.325-.398.6-.26 1.426.305 1.85.158.117 3.84 2.842 8.447 4.101 2.155.817 2.396 3.266 2.46 5.509 0 .088 0 .167.01.246.009.885-.047 2.252-.194 3.039-1.5.905-7.374 4.033-16.31 4.033-8.9 0-14.812-3.138-16.32-4.043-.148-.787-.212-2.154-.194-3.04 0-.078.01-.157.01-.245.064-2.243.305-4.692 2.46-5.509 4.607-1.259 8.29-3.993 8.446-4.102.565-.422.704-1.249.306-1.849-.398-.6-1.175-.747-1.74-.325-.036.03-3.487 2.587-7.678 3.719-.037.01-.065.02-.093.03C.187 31.454.067 36.01.012 37.946c0 .089 0 .167-.01.246v.03c-.009.511-.018 3.137.472 4.455.093.256.26.472.481.62.278.197 6.93 4.702 18.059 4.702 11.129 0 17.781-4.515 18.058-4.702.213-.148.389-.364.481-.62.463-1.308.454-3.934.444-4.446z"
                          transform="translate(-692.000000, -1160.000000) translate(644.000000, 1161.000000) translate(49.000000, 0.000000)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="caption">Details</div>
              </a>
            </div>
            <div className="AccountBodystyles__TabWrapper-sc-jui1ng-1 cqWbWh">
              <div className="AccountDetailsstyles__Wrapper-sc-l675v-0 gLgTjz">
                <form>
                  <section className="cards">
                    <h4>Cards</h4>
                    <p>{userData.id}</p>
                  </section>
                  <section className="names">
                    <h4>Name</h4>
                    <input
                      type="text"
                      placeholder={
                        userId ? userData.name : "Enter your first name"
                      }
                      name="firstName"
                      onChange={handleDetailsChange}
                    />
                    <input
                      type="text"
                      placeholder={
                        userId ? userData.surname : "Enter your first name"
                      }
                      name="lastName"
                      onChange={handleDetailsChange}
                    />
                  </section>
                  <section className="dob">
                    <h4>Date of birth</h4>
                    <label htmlFor="date_of_birth">
                      {userData.birthday === null ||
                      userData.birthday === undefined
                        ? "dd/mm/yyy"
                        : userData.birthday}
                    </label>
                    <CalendarMonthIcon
                      className="datePicker"
                      onClick={handleButtonClick}
                    />

                    <input
                      id="date_of_birth"
                      type="date"
                      min="1904-08-07"
                      max="2024-08-07"
                      name="date_of_birth"
                      ref={dateInputRef}
                      style={{ display: dateInputDisplay }}
                      onChange={handleDetailsChange}
                    />
                  </section>
                  <section className="changeGroup">
                    <h4>Email</h4>
                    <div className="group">
                      {updateEmail ? (
                        <input
                          name="email"
                          className="form-control p-1 m-1"
                          onChange={handleDetailsChange}
                          type="email"
                          placeholder="Enter new email"
                        />
                      ) : (
                        <span className="truncate">
                          {userId ? userData.email : "Enter email"}
                        </span>
                      )}
                      <a title="Change Email" onClick={handleUpdateEmail}>
                        Change
                      </a>
                    </div>
                  </section>
                  <section className="changeGroup">
                    <h4>Password</h4>
                    <div className="group">
                      {updatePassword ? (
                        <>
                          <input
                            name="password"
                            className="form-control p-1 m-1 "
                            onChange={handleDetailsChange}
                            type="password"
                            placeholder="Enter new password"
                            required
                          />
                          <input
                            name="confirm_password"
                            className="form-control p-1 m-1 "
                            onChange={handleDetailsChange}
                            type="password"
                            placeholder="Confirm Password"
                            required
                          />
                        </>
                      ) : (
                        <span className="truncate">**********</span>
                      )}
                      <a
                        title="Change Password"
                        onClick={() => {
                          setPasswordErr(false);
                          handleUpdatePassword();
                        }}
                      >
                        Change
                      </a>
                    </div>
                  </section>
                  {passwordErr && (
                    <>
                      <div
                        className={
                          passwordStyle
                            ? "alert-success alert"
                            : "alert-danger alert"
                        }
                        role="alert"
                      >
                        {passwordErr}
                      </div>
                    </>
                  )}
                  {updated && (
                    <>
                      <div className="alert alert-success " role="alert">
                        {updated}
                      </div>
                    </>
                  )}
                  <div className="submitGroup">
                    <input
                      className="saveButton btnDark"
                      type="submit"
                      value="Save"
                      onClick={(e) => {
                        e.preventDefault();
                        handleUpdate();
                      }}
                    />
                  </div>
                </form>
                {/* <article className="popupCTA__StyledPopupCTA-sc-11sniy1-1 Czday hide">
                <div className="popupContainer" data-cy="popup">
                  <div className="popupContent" data-cy="popup__content">
                    <div className="popupCTA__Content-sc-11sniy1-0 iLOfxC">
                      <div>
                        <h3>Success!</h3>
                        <p>Your email has been changed.</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="Button__StyledButton-sc-1s4p1w0-0 fOMizr popupCTA__StyledButton-sc-11sniy1-2 bskstM"
                    type="button"
                    disabled=""
                  >
                    <span className="Button__LoadingMask-sc-1s4p1w0-1">OK</span>
                  </button>
                </div>
              </article> */}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default AccountPage;
