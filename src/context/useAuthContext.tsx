import {
  useState,
  useContext,
  createContext,
  FunctionComponent,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useHistory } from "react-router-dom";
import { AuthApiData, AuthApiDataSuccess } from "../interface/AuthApiData";
import { User } from "../interface/User";
import loginWithCookies from "../helpers/APICalls/loginWithCookies";
import logoutAPI from "../helpers/APICalls/logout";

interface IAuthContext {
  loggedInUser: User | null | undefined;
  updateLoginContext: (data: AuthApiDataSuccess) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  loggedInUser: undefined,
  updateLoginContext: () => null,
  logout: () => null,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}): JSX.Element => {
  const [loggedInUser, setLoggedInUser] = useState<User | null | undefined>();
  const history = useHistory();

  const updateLoginContext = useCallback((data: AuthApiDataSuccess) => {
    setLoggedInUser(data.user);
  }, []);

  const logout = useCallback(async () => {
    await logoutAPI()
      .then(() => {
        history.push("/");
        setLoggedInUser(null);
      })
      .catch((error) => console.error(error));
  }, [history]);

  useEffect(() => {
    const checkLoginWithCookies = async () => {
      await loginWithCookies().then((data: AuthApiData) => {
        if (data.success) {
          updateLoginContext(data.success);
        } else {
          setLoggedInUser(null);
          history.push("/");
        }
      });
    };
    checkLoginWithCookies();
  }, [updateLoginContext, history]);

  return (
    <AuthContext.Provider value={{ loggedInUser, updateLoginContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
