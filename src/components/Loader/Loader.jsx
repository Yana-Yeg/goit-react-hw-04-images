import { Grid } from "react-loader-spinner";
import s from "./Loader.module.css";

function Loader() {
  return (
    <div className={s.wrapper}>
      <Grid color="violet" height={80} width={80} justifyContent="center" />
    </div>
  );
}

export default Loader;
