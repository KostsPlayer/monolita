function ApiUrl() {
  const apiLoginUrl = "http://localhost:5123/auth/login";
  const apiLogoutUrl = "http://localhost:5123/auth/logout";

  return { apiLoginUrl, apiLogoutUrl };
}

export default ApiUrl;
