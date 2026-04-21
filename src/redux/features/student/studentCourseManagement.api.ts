/* eslint-disable @typescript-eslint/no-explicit-any */
import { TQueryParam, TResponseRedux } from "../../../types";
import { TOfferedCourse } from "../../../types/studentCourse.type";
import { baseApi } from "../../api/baseApi";

const studentCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOfferedCourses: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item?.name, item?.value as string);
          });
        }

        return {
          url: "/offered-course/my-offered-courses",
          method: "GET",
          params: params,
        };
      },

      transformResponse: (response: TResponseRedux<TOfferedCourse>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),

    getAllEnrolledCourses: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/enrolled-courses/my-enrolled-courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["offeredCourse"],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    enrolCourse: builder.mutation({
      query: (data) => ({
        url: "/enrolled-courses/create-enrolled-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["offeredCourse"],
    }),

    // addStudent: builder.mutation({
    //   query: (data) => ({
    //     url: "/users/create-student",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useGetAllOfferedCoursesQuery,
  useEnrolCourseMutation,
  useGetAllEnrolledCoursesQuery,
} = studentCourseApi;
