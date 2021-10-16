import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {useEffect, useState} from "react";
import useModal from "./useModal.hook";
import {useIntl} from "react-intl";

export default function useProduct({ slug }) {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState({likes: 0, comments: 0});
  const intl = useIntl();
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
        .required(intl.formatMessage({id: "field_required"})),
      email: Yup.string()
        .required(intl.formatMessage({id: "field_required"})),
      phone: Yup.string()
        .required(intl.formatMessage({id: "field_required"})),
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
        openModal(intl.formatMessage({id: 'thanks_for_review'}));
      }).catch(err => {
        setLoading(true);
        console.log(err);
      })
    }
  })
  return { formik, loading, summary }
}