import { sampleBlogData, sampleSearchResults } from "../utils/sample-data";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import { useState } from "react";


const useAboutUs = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required('Trường bắt buộc'),
      email: Yup.string()
        .required('Trường bắt buộc'),
      phone: Yup.string()
        .required('Trường bắt buộc'),
      address: Yup.string(),
      message: Yup.string()
        .required('Trường bắt buộc'),
    }),
    onSubmit: values => {
    },
  });


  return { formik }
}

export default useAboutUs
