import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";

const MySchedule = () => {
  const { data } = useGetAllEnrolledCoursesQuery(undefined);

  return (
    <div>
      {data?.data?.map((item) => {
        return (
          <div>
            <div>Title: {item?.course.title}</div>
            <div>Section: {item?.offeredCourse.section}</div>
            <div>
              Days:{" "}
              {item?.offeredCourse.days.map((item) => (
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
