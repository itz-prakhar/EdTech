import React, { useState, useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import Loader from "../../Common/Loader"
import {updatePicture} from "../../../services/operation/settingApiCall"


const ImageUpload = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const {token } = useSelector((state)=>state.auth)
  const {loading} = useSelector((state)=>state.user)
  const [imageUpload, setImageUpload] = useState(null);
  const inputValue = useRef(null);

  const handleSelectFile = () => {
    inputValue.current.click();
  };
  const handleInputFileChange = (e) => {
    setImageUpload(e.target.files[0]);
  };
  const handleFileUpload = () => {
    if (!imageUpload) {
      alert("No file Selected");
      return;
    }
    else{
      fetchPicture();
    }
  };
  // uploading picture to backend
  const fetchPicture =()=>{
    const formData = new FormData();
    formData.append("displayPicture",imageUpload)
    // formData.append("token",token)
    dispatch(updatePicture(formData,token))

  }
  return (
    <div className="flex items-start sm:items-center gap-5 flex-col sm:flex-row">
    <div className="">
    {loading?(<Loader />):(   <img
        src={user.image}
        className="w-[6rem] aspect-square object-cover rounded-full"
        alt="Profile Picture"
      ></img>)}
 
    </div>

      <div className="flex flex-col gap-5 justify-start">
        <p>Change Profile Picture</p>
        <div className="flex gap-5 items-start xl:items-center flex-col  xl:flex-row ">
          <input
            type="file"
            ref={inputValue}
            onChange={handleInputFileChange}
            className="hidden"
          />
          <div className="flex gap-5 items-center">
          <button
            onClick={handleSelectFile}
            className="bg-yellow-50 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-200 "
          >
            Select
          </button>
          <button
            onClick={handleFileUpload}
            className="bg-gray-500  px-4 py-2 rounded-md font-medium hover:bg-gray-600 "
          >
            Upload
          </button>
          </div>
          <div>
          {
            imageUpload && <p className="flex text-sm text-richblack-200 ">Selected File : <span className="text-richblack-100"> {imageUpload.name}</span></p>
          }
        </div></div>
      </div>
    </div>
  );
};

export default ImageUpload;

// import React, { useRef, useState } from 'react';

// function ImageUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const fileInputRef = useRef(null);

//   // Handle file selection through the hidden file input
//   const handleFileSelect = () => {
//     fileInputRef.current.click();
//   };

//   // Handle file change event
//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   // Handle the file upload process
//   const handleUpload = () => {
//     if (!selectedFile) {
//       alert("No file selected");
//       return;
//     }

//     // Create a FormData object and append the selected file
//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     // Replace 'YOUR_UPLOAD_ENDPOINT' with your actual upload URL
//     fetch('YOUR_UPLOAD_ENDPOINT', {
//       method: 'POST',
//       body: formData,
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Upload failed');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('File uploaded successfully:', data);
//         alert('File uploaded successfully');
//       })
//       .catch(error => {
//         console.error('Error uploading file:', error);
//         alert('Error uploading file');
//       });
//   };

//   return (
//     <div className="file-upload p-4      rounded-lg text-center">
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleFileChange}
//         className="hidden"
//       />
//       <button
//         onClick={handleFileSelect}
//         className="bg-richblack-800 text-white py-2 px-4 rounded-lg hover:bg-richblack-700"
//       >
//         Select File
//       </button>
//       <button
//         onClick={handleUpload}
//         className="ml-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
//       >
//         Upload File
//       </button>
//       {/* {selectedFile && (
//         <div className="mt-4">
//           <p>Selected File: {selectedFile.name}</p>
//         </div>
//       )} */}
//     </div>
//   );
// }

// export default ImageUpload;
