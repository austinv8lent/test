import React, { Fragment } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrumb = ({ crumbs = [] }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">
          <FaHome /> Home
        </Link>
        {crumbs.map(({ id, name, link }) => (
          <Fragment key={id}>
            <span className="mx-2"> / </span>
            {link ? <Link to={link}>{name}</Link> : <span>{name}</span>}
          </Fragment>
        ))}
      </li>
    </ol>
  </nav>
);

export default Breadcrumb;
