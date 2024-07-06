import { BACKEND_URL } from "@/utils/url";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export const GetUsersByName = (query) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (query) {
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
    }
  }, [query]);

  return { users, setUsers, loading };
};

export const GetAuthUser = () => {
  const [authUser, setAuthUser] = useState({});
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/auth/user`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      })
      .then((response) => {
        setAuthUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { authUser };
};
