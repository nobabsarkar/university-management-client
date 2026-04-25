import { Button, Col, Row } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { useAddFacultyOfProgrammingMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicFaculty = () => {
  const [facultyOfProgramming] = useAddFacultyOfProgrammingMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await facultyOfProgramming(data);
    if (res?.data?.success) {
      toast(res?.data?.message);
    }
  };

  return (
    <Row>
      <Col>
        <PHForm onSubmit={onSubmit}>
          <Row>
            <Col>
              <PHInput type="text" name="name" label="Faculty Of Programming" />
              <Button htmlType="submit">Submit</Button>
            </Col>
          </Row>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateAcademicFaculty;
