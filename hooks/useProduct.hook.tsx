import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {useEffect, useState} from "react";
import useModal from "./useModal.hook";

export default function useProduct({ slug }) {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState({likes: 0, comments: 0});

  useEffect(() => {
    axios.get(`https://us-central1-cuckuku-fa48b.cloudfunctions.net/api/reviews`, {
      params: {
        slug
      }
    })
      .then(response => {
        // @ts-ignore
        return setSummary(response.data || {likes: 0, comments: 0});
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  // @ts-ignore
  const { openModal } = useModal();
  const formik = useFormik({
    initialValues: {
      slug: '',
      fullName: '',
      email: '',
      phone: '',
      liked: false,
      comment: ''
    },
    validationSchema: Yup.object({
      slug: Yup.string(),
      fullName: Yup.string()
        .required('Trường bắt buộc'),
      email: Yup.string()
        .required('Trường bắt buộc'),
      phone: Yup.string()
        .required('Trường bắt buộc'),
      liked: Yup.boolean(),
      comment: Yup.string(),
    }),
    onSubmit: (values, formikBag) => {
      let product = {
        ...values,
        slug
      }
      setLoading(true);
      axios.post("https://us-central1-cuckuku-fa48b.cloudfunctions.net/api/reviews", product).then(response => {
        formikBag.resetForm();
        setLoading(false);
        openModal("Cảm ơn bạn đã đánh giá!");
      }).catch(err => {
        setLoading(true);
        console.log(err);
      })
    }
  })
  return { formik, loading, summary }
}