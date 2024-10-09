import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./InputField";
import Button from "./Button";
import Checkbox from "./Checkbox";
import GenderSelect from "./GenderSelect";
import ProfilePictureUpload from "./ProfilePictureUpload";
import DateOfBirthInput from "./DateOfBirthInput";
import FormContainer from "./FormContainer";

const LoginPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleContinue = () => {
    navigate("/cards");
  };

  return (
    <FormContainer>
      <h2 className="text-2xl font-bold mb-4 text-darkGray">
        Enter user details
      </h2>

      <ProfilePictureUpload onChange={(picture) => console.log(picture)} />

      <div className="relative mb-4">
        <Input
          type="text"
          className="pl-12 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="relative mb-4">
        <Input
          type="text"
          className="pl-12 pr-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-primary"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="relative mb-4">
        <Input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      {/* Date of Birth Input */}
      <DateOfBirthInput dob={dob} onChange={(e) => setDob(e.target.value)} />

      {/* Gender Selection */}
      <GenderSelect
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />

      <div className="flex items-center mb-4">
        <Checkbox label="Accept and Continue" />
      </div>

      <Button type="submit" onClick={handleContinue}>
        Continue
      </Button>
    </FormContainer>
  );
};

export default LoginPage;
