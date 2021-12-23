

import React from "react";
import { Link } from 'react-router-dom';
import { DropdownItem } from "reactstrap";
const Brand = ({ bName }) => {
    const name = "assets/images/companies/" + bName
    return (
        <>  <div className="col-4 col-md-2" style={{ marginTop: 5 }}>
            <img src={name} height="100" width="100"
                alt="FreeZone" style={{ marginTop: 5 }} />
        </div>
        </>
    )
}
export default Brand