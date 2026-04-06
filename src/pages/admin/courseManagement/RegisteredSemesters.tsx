import { Button, Table, type TableColumnsType } from "antd";

import { TAcademicSemester } from "../../../types";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement";

export type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

const RegisteredSemesters = () => {
  //   const [params, setParams] = useState<TQueryParam[] | undefined>([]);

  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllRegisteredSemestersQuery(undefined);

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name: `${academicSemester?.name} ${academicSemester?.year}`,
      startDate,
      endDate,
      status,
    }),
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  //   const onChange: TableProps<TTableData>["onChange"] = (
  //     _pagination,
  //     _filters,
  //     _sorter,
  //     extra,
  //   ) => {
  //     if (extra?.action === "filter") {
  //       const queryParams: TQueryParam[] = [];

  //       setParams(queryParams);
  //     }
  //   };

  return (
    <Table<TTableData>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      //   onChange={onChange}
    />
  );
};

export default RegisteredSemesters;
