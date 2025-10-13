import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footer }) => {
  return (
    <footer className="footer">
      <p>
        {footer.contactText}{" "}
        <a href={`mailto:${footer.email}`} rel="noopener noreferrer">
          {footer.email}
        </a>
      </p>
      <small>{footer.rights}</small>
    </footer>
  );
};

Footer.propTypes = {
  footer: PropTypes.shape({
    contactText: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    rights: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
