const OauthPage = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
}

export default OauthPage;