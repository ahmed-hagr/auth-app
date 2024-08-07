import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../../store/slices/authSlice"; 

const useLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (values, setSubmitting) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: values.email,  
        password: values.password
      });

      const { token } = response.data;
      Cookies.set("token", token, { expires: 1 });
      dispatch(loginSuccess({ token, user: values.email }));
      router.push("/");
    } catch (error) {
      console.error(error);
      dispatch(loginFailure({ error: error.toString() }));
    }

    setSubmitting(false);
  };

  return handleLogin;
};

export default useLogin;
