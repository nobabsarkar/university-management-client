import { Table, TableColumnsType, TableProps } from "antd";
import { TQueryParam } from "../../../types";
import { useGetAllAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicDepartment = () => {
  const { data: departmentData, isFetching } =
    useGetAllAcademicDepartmentsQuery(undefined);

  const tableData = departmentData?.data?.map(
    ({ _id, name, academicFaculty }) => ({
      key: _id,
      name,
      fullName: academicFaculty?.name,
    }),
  );

  const columns: TableColumnsType = [
    {
      title: "Academic Department",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Academic Faculty",
      dataIndex: "fullName",
      showSorterTooltip: { target: "full-header" },
    },
  ];

  const onChange: TableProps["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra,
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item }),
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item }),
      );
    }
  };

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default AcademicDepartment;
