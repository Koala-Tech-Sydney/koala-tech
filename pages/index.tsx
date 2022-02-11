import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function Home() {
  return (
    <main>
      <Alert severity="error" sx={{ margin: "1rem" }}>
        <AlertTitle>WARNING</AlertTitle>
        You computer has been infected with virus —{" "}
        <strong>
          Nah just kidding, this site is still at its very early stage and under
          heavy development, hopefully will bring people another great source of
          learn programming :p
        </strong>
      </Alert>
    </main>
  );
}
