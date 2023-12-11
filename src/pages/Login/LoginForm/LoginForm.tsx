import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import { CircularProgress } from "@mui/material";

const ColorButton = styled(Button)(() => ({
  color: "#fff",
  width: 170,
  height: 54,
  fontWeight: 700,
  fontSize: "16px",
  textTransform: "capitalize",
  backgroundColor: "#f04040",
  border: "2px solid #f04040",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#f04040",
    borderColor: "#f04040",
  },
}));

interface Props {
  handleSubmit: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Email is not valid"),
        password: Yup.string()
          .required("Password is required")
          .max(100, "Password is too long")
          .min(6, "Password too short"),
      })}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Box width={"70%"} marginTop={"5%"}>
            <InputLabel> Email Address </InputLabel>
            <TextField
              id="email"
              placeholder="Your email address"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{}}
              name="email"
              autoComplete="email"
              autoFocus
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
              variant="outlined"
              color="error"
            />
          </Box>
          <Box width={"70%"} marginTop={"5%"}>
            <InputLabel> Password</InputLabel>
            <TextField
              id="password"
              placeholder="Your password"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <Typography color="#3a8dff" paddingRight={"5%"}>
                    Forgot?
                  </Typography>
                ),
              }}
              type="password"
              autoComplete="current-password"
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              onChange={handleChange}
              variant="outlined"
              color="error"
            />
          </Box>
          <Box textAlign="center" marginTop={"4%"}>
            <ColorButton type="submit" size="large" variant="contained">
              {isSubmitting ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                "Login"
              )}
            </ColorButton>
          </Box>
          <div style={{ height: 95 }} />
        </form>
      )}
    </Formik>
  );
}
