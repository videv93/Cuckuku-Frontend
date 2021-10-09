import { useFormik } from 'formik';
import * as Yup from 'yup';
import storage from "../utils/firebase";
import { ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import useModal from "./useModal.hook";
import {useState} from "react";

const useAboutUs = () => {
  // @ts-ignore
  const { openModal } = useModal();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      message: '',
      attachments: []
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
    onSubmit: (values, formikBag) => {
      let tasks = [];
      for (var i = 0; i < values.attachments.length; i++) {
        const file = values.attachments[i];
        const fileRef = ref(storage, `/files/${values.fullName}/${file.name}`);
        tasks.push(uploadBytes(fileRef, file));
      }
      setLoading(true);
      Promise.all(tasks).then(snapshots => {
        const attachments = snapshots.map(snapshot => snapshot.ref.fullPath);
        const contact = {
          ...values,
          attachments
        }
        axios.post("https://us-central1-cuckuku-fa48b.cloudfunctions.net/api/contacts", contact).then(response => {
          formikBag.resetForm();
          setLoading(false);
          openModal("Cảm ơn bạn đã liên hệ với chúng tôi!");
        }).catch(err => {
          console.log(err);
        })
      })
    },
  });


  return { formik, loading }
}

export default useAboutUs
