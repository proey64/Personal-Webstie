import React from "react";
import Responsive from "react-responsive";

const NotMobile = props => <Responsive {...props} minWidth={769} />;

export default NotMobile;
