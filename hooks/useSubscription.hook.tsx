import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {useState} from "react";
import useModal from "./useModal.hook";

export default function useSubscription() {
  const [loading, setLoading] = useState(false);
  // @ts-ignore
  const {openModal} = useModal();
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Trường bắt buộc')
    }),
    onSubmit: (values, formikBag) => {
      setLoading(true);
      axios.post("https://us-central1-cuckuku-fa48b.cloudfunctions.net/api/subscriptions", values)
        .then(response => {
          formikBag.resetForm();
          setLoading(false);
          openModal("Cảm ơn bạn đã đăng ký!");
        }).catch(err => {
          setLoading(false);
        })
    }
  });
  return { formik, loading }
}