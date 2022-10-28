import React, { createContext, useState } from "react";
export const   UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [authentication, setAuthentication] = useState(false)
    return (
      <UserContext.Provider value={{ email, phoneNumber, password, authentication, setAuthentication, setPassword, setEmail, setPhoneNumber  }}>
        {children}
      </UserContext.Provider>
    );
  };