import classNames from "classnames";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, size, label, ...props }) => {
  const classes = classNames(
    "flex shadow justify-center block border-2 rounded-full px-4 py-2 focus:outline-none",
    {
      "border-blue-600 focus:border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white":
        !primary,
      "text-white bg-blue-600 hover:bg-blue-700": primary,
    },
    {
      "text-xs": size === "small",
      "text-2xl": size === "large",
    }
  );

  return (
    <button type="button" className={classes} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: "medium",
  onClick: undefined,
};
