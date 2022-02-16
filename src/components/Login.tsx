import React, { useEffect, useState } from "react";
import { Button, Form, FormLayout, TextField } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import { UserPromise } from "../interfaces/loginInterfaces";
// import { UserNameInterface, UserPasswordInterface } from "../interfaces/loginInterfaces";

const Login = () => {
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA`;

  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const fetchData = async (): Promise<UserPromise | undefined> => {
    try {
      const response = await fetch(
        `https://fbapi.sellernext.com/user/login?username=${userName}&password=${password}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await response.json();
      localStorage.setItem("Token", data.data.token);
      data.success === true && navigate("/panel/dashboard");
      // setSuccess(true);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(userName, password);
    fetchData();
    setUserName("");
    setPassword("");
  };

  return (
    <div className="form__container">
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            type="text"
            value={userName}
            label="Username"
            autoComplete="false"
            onChange={(value) => setUserName(value)}
          />
          <TextField
            type="password"
            value={password}
            label="Password"
            autoComplete="false"
            onChange={(value) => setPassword(value)}
          />
          <Button submit>Submit</Button>
        </FormLayout>
      </Form>
      {/* {success === false && <p>Invalid Credentials</p>} */}
    </div>
  );
};

export default Login;
