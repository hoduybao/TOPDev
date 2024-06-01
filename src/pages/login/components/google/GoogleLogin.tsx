import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginCustom = () => {
  return (
    // <GoogleLogin
    //   onSuccess={(credentialResponse) => {
    //     console.log('Login Success', credentialResponse);

    //     const decoded = jwtDecode(credentialResponse.credential || '');
    //     console.log(decoded);
    //   }}
    //   onError={() => {
    //     console.log('Login Failed');
    //   }}
    // />
    <button onClick={login}>Login with Google</button>
  );
};

export default GoogleLoginCustom;
