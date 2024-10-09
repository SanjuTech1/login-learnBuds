import React, { useState } from "react";

const ProfilePictureUpload = ({ onChange }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
        onChange(reader.result); // Call the passed function to update parent state
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4 flex flex-col items-center">
      <label htmlFor="profile-pic-upload" className="cursor-pointer">
        <div
          className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: profilePicture ? "transparent" : "#d9d9db",
          }}
        >
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="text-gray-500">Upload DP</span>
          )}
        </div>
        <input
          id="profile-pic-upload"
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ProfilePictureUpload;
