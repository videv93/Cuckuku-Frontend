import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {useState} from "react";
import useModal from "./useModal.hook";
import {useIntl} from "react-intl";

export default function useSubscription() {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();
  // @ts-ignore
  const {openModal} = useModal();
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(intl.formatMessage({id: 'field_required'}))
    }),
    onSubmit: (values, formikBag) => {
      setLoading(true);
      axios.post("https://us-central1-cuckuku-fa48b.cloudfunctions.net/api/subscriptions", values)
        .then(response => {
          formikBag.resetForm();
          setLoading(false);
          openModal(intl.formatMessage({id: 'thanks_for_subscribe'}));
        }).catch(err => {
          setLoading(false);
        })
    }
  });
  return { formik, loading }
}