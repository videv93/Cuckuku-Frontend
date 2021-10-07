import {useEffect, useState} from "react";
import {gql} from "graphql-request";
import client from "../utils/client";

export default function useCompany() {
  const [company, setCompany] = useState();
  useEffect(() => {
    const queryCompany = gql`
    query {
      company(where: {id: "ckufmb7egm0u70d84rg9rh0tk"}, locales: en) {
        address
        email
        facebook
        instagram
        logo {
          url
          id
        }
        phone
        skype
        twitter
      }    
    }
    `;
    client.request(queryCompany).then(data => {
      if (data) {
        setCompany(data.company)
      }
    });
  }, [])
  return {
    company
  }
}