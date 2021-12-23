
import React from "react";
import { Link } from 'react-router-dom';
import { DropdownItem } from "reactstrap";
const FreeZone = ({fname}) => {
    return (
    <><div>
        <Link to='/'  className='btn btn-outline-primary' style={{width:'90%'}}>{fname}</Link>
     
    </div>
       <DropdownItem divider style={{borderColor:'white'}} />
       </>
    )
}
export default FreeZone