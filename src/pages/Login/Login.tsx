import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FormikHelpers } from "formik";
import Typography from "@mui/material/Typography";
import login from "../../helpers/APICalls/login";
import LoginForm from "./LoginForm/LoginForm";
import { useAuth } from "../../context/useAuthContext";
import { useSnackBar } from "../../context/useSnackbarContext";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";

export default function Login(): JSX.Element {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const history = useHistory();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>
  ) => {
    login(email, password).then((data: any) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
        history.push("/dashboard");
      } else {
        setSubmitting(false);
        updateSnackBarMessage("An unexpected error occurred. Please try again");
      }
    });
  };

  return (
    <Grid>
      <Header />
      <Grid
        container
        component="main"
        marginTop="3%"
        paddingLeft="28%"
        minHeight="30vh"
      >
        <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
          <Box width="100%" maxWidth={750} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography
                  variant="h4"
                  align="center"
                  fontWeight={800}
                  marginTop={"5%"}
                >
                  Welcome back!
                </Typography>
              </Grid>
            </Grid>
            <LoginForm handleSubmit={handleSubmit} />
          </Box>
          <Box p={1} alignSelf="center" />
        </Grid>
      </Grid>
    </Grid>
  );
}
