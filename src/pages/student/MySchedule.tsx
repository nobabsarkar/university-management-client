/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";

const MySchedule = () => {
  const { data } = useGetAllEnrolledCoursesQuery(undefined);
  console.log(data);

  return (
    <div>
      {data?.data?.map((item: any) => {
        return (
          <div>
            <div>Title: {item?.course.title}</div>
            <div>Section: {item?.offeredCourse.section}</div>
            <div>
              Days:{" "}
              {item?.offeredCourse.days.map((item: any) => (
                <span> {item} </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MySchedule;
