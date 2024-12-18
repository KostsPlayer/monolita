import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Token = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken =
      Cookies.get("monolitaToken") || localStorage.getItem("token");
    setToken(getToken);
  }, [Cookies]);

  return { token };
};

export default Token;
