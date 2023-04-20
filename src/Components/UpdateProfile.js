import React, { useState } from "react";
import "./Login.css";
import "./UpdateProfile.css";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import HeadDiv from "./Common/HeadDiv";
import Banner from "./Common/Banner";
import profileimg from "./Images/profileimg.png";
import userService from "./Service/User";
import { useEffect } from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'

const UpdateProfile = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [editDetails, setEditDetails] = useState(false);
  const [inputvalue, setInputValue] = useState({
    fullName: "",
    email: "",
    role: 1,
    status: 1
  });

  const [file, setFile] = useState();
  const [img, setImg] = useState("");
  const [crop, setCrop] = useState();
  const [output, setOutput] = useState();

  const { getCurrentUserDetails } = userService;
  const { updateCurrentUser } = userService;

  const cropImageNow = () => {
    const canvas = document.createElement('canvas');
    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
  
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';
  
    ctx.drawImage(
      img,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );
      
    // Converting to base64
    const base64Image = canvas.toDataURL('image/png');
    setOutput(base64Image);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    let response = await getCurrentUserDetails();
    setCurrentUser(response.result.userDetails);
    console.log(currentUser);
  };

  const edit = () => {
    setEditDetails(true);
  };



  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const onChangeFileHandler = (e) => {
    if (e.target.files) {
        setFile(e.target.files[0]);
        setImg(URL.createObjectURL(e.target.files[0]));
    }
      console.log(file);
  }
  

  const onSubmitHandler = async () => {
    // const FormData = require('form-data');
    const data = new FormData();
    data.append('fullName', inputvalue.fullName);
    data.append('email', inputvalue.email);
    data.append('profilePic', file);
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
    const updatedData = await updateCurrentUser(data,config);
        // {
        //       method: 'POST',
        //       body: file,
        //       headers: {
        //           'content-type': file.type,
        //           'content-length': `${file.size}`,
        //     }
        //   }
  
    console.log(updatedData);
    if(updatedData.success==true){
        fetchdata();
        setInputValue({
            fullName: "",
            email: "",
        })
    }
    setEditDetails(false);
  }


  return (
    <div>
      <Header />
      <HeadDiv text={"Update Profile"} />

      <div className="logindiv profilediv">
        <h3 className="loginhead">Update Profile</h3>
        {!editDetails ? (
          <div className="profilegrid">
            <div className="profileimg">
              {currentUser.profilePic?<img src={currentUser.profilePic} alt="Profile" /> : <img src={profileimg} alt="Profile" /> }
            </div>
            <div>
              <p>{currentUser.fullName}</p>
            </div>
            <div>
              <p>{currentUser.email}</p>
            </div>
            <button type="submit" onClick={() => edit()} className="editbtn">
              <i class="fa fa-edit"></i>
            </button>
          </div>
        ) : (
          <div className="profilegrid">
            <form>
                <div className="inputfile">
                    <input type="file" name="profilePic" accept="image/*" onChange={(e)=>onChangeFileHandler(e)} style={{border:0}} />
                    <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                        {img?<img src={img} alt="imagepreview" />:""}
                    </ReactCrop>
                    {/* {file && (
                        <div>
                          <ReactCrop src={file} onImageLoaded={setImg}
                              crop={crop} onChange={setCrop} />
                          <br />
                          <button onClick={cropImageNow}>Crop</button>
                          <br />
                          <br />
                        </div>
                    )}
                    <div>{output && <img src={output} />}</div> */}
                </div>
                
                <div>
                    <input
                    type="text"
                    name="fullName"
                    className="inputbox"
                    onChange={onChangeHandler}
                    value={inputvalue.fullName}
                    placeholder={currentUser.fullName}
                    />
                </div>
                <div>
                    <input
                    type="email"
                    name="email"
                    className="inputbox"
                    onChange={onChangeHandler}
                    value={inputvalue.email}
                    placeholder={currentUser.email}
                    />
                <button
                    type="button"
                    className="submitbtn"
                    onClick={() => onSubmitHandler()}
                >
                    Submit
                </button>
                </div>
            </form>
          </div>
        )}
      </div>

      <Banner />
      <Footer />
    </div>
  );
};

export default UpdateProfile;
