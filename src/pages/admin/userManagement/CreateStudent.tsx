import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button } from "antd";

const studentDummyData = {
  password: "student123",
  student: {
    id: "2025010001",
    user: "67a8f0777a4c1300e18344c4",
    name: {
      firstName: "Student1",
      middleName: "",
      lastName: "good",
    },
    gender: "male",
    dateOfBirth: "2001-05-12",
    email: "student1@gmail.com",
    contactNo: "0170975830145",
    emergencyContactNo: "018XXXXXXXX",
    bloodGroup: "O+",
    presentAddress: "Dhaka, Bangladesh",
    permanentAddress: "Rajshahi, Bangladesh",
    guardian: {
      fatherName: "John Doe",
      fatherContactNo: "019XXXXXXXX",
      fatherOccupation: "Businessman",
      motherName: "Jane Doe",
      motherContactNo: "016XXXXXXXX",
      motherOccupation: "Teacher",
    },
    localGuardian: {
      name: "Uncle Sam",
      occupation: "Doctor",
      contactNo: "015XXXXXXXX",
      address: "Chittagong, Bangladesh",
    },
    admissionSemester: "695342247b40850db4b39ae5",
    isDeleted: false,
    academicDepartment: "6953416c7b40850db4b39add",
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    const formData = new FormData();

    formData.append("something", "Data of something");
    // console.log([...formData.entries()]);
    console.log(Object.fromEntries(formData));
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name" label="Name" />
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateStudent;
