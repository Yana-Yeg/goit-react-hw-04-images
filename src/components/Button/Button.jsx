import PropTypes from "prop-types";
import s from "./Button.module.css";
import Loader from "../Loader/Loader";

function Button({ handleClickLoadMore, isLoading }) {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <button
          onClick={handleClickLoadMore}
          type="button"
          className={s.button}
        >
          Load more
        </button>
      )}
    </>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
