import { BACKEND_URL } from "@/utils/url";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export const GetUsersByName = (query) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/get-users-by-name?search=${query}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      })
      .then((res) => {
        setUsers(res?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [query]);

  return { users, setUsers, loading };
};
