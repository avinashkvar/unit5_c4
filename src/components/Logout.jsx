import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggelAuth } from "../Redux/isAuth/action";


export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
  //  const dispatch = useDispatch()
  //  const navigate = useNavigate()

  //  dispatch(toggelAuth(true))
  //  navigate("/")
  return <>
    
  </>;
};
