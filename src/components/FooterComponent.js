import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import{Card,CardBody,CardHeader }from 'reactstrap'
function Footer(props) {
    const [isActive, setIsActive] = useState(false);
    const [isActiveEA, setIsActiveEA] = useState(false);
    return (
        <div className="footer" style={{ backgroundColor: '#004b79', color: 'white', fontFamily: 'Open Sans' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-2 ">
                        <h5>About</h5>
                        <ul className="row list-unstyled">
                            <li><Link to='/Our'>Our Company</Link></li>
                            <li><Link to="/aboutus">News Letters</Link></li>
                            <li><Link to="/Contact Us">Contact Us</Link></li>

                        </ul>
                    </div>
                    <div className="col-12 col-md-2 ">
                        <h5>Contact Us</h5>
                        <address style={{color:'wheat'}}>
                            P.O. Box: 85570<br />
                            Dubai - U.A.E.<br />

                            <i className="fa fa-phone fa-lg"></i>: +971 4 3245630<br />
                            <i className="fa fa-fax fa-lg"></i>: +971 4 3245640<br />
                            <i className="fa fa-envelope fa-lg"></i>:<a href="mailto:confusion@food.net">
                            info@uaefreezones.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-md-8">
                    <Card>
                        <CardHeader style={{backgroundColor:'#7f181b'}}>Quick Links</CardHeader>
                        <CardBody>
                        <div className="row">
                           

                            <div className='col-12 col-md-4'>
                            <Link to='/Our'>   Dubai Expo 2020</Link>
                            <br/> 
                            </div>

                            <div className='col-12 col-md-4'>
                            <Link to='/Our'>  Advertisement Services</Link>
                            <br/>
                            </div>
                          
                            <div className='col-12 col-md-4'>
                            <Link to='/Our'>  Business Center Services</Link>
                            <br/>
                            </div>
                          
                            <div className='col-12 col-md-4'>
                            <Link to='/Our'>  UAE Online Directory </Link>
                            <br/>
                            </div>
                       
                            <div className='col-12 col-md-4'>
                            <Link to='/Our'>   UAE Emirates</Link>
                            <br/>
                            </div>
                         
                            <div className='col-12 col-md-4'>
                            <Link to='/Our'>   Investments in UAE</Link>
                            <br/>
                            </div>
                            
                            <div className="accordion col-12 col-md-4" >
                                <div className="accordion-item " style={{ backgroundColor: '#7f181b', }}>
                                    <div
                                        className="accordion-title"
                                        onClick={() => setIsActiveEA(!isActiveEA)}
                                        style={{ marginLeft: 5 }}
                                    >
                                        <span>UAE Emirates</span>
                                        <span>{isActiveEA ? ' -' : ' +'}</span>
                                    </div>
                                    {isActiveEA && <div className="accordion-content container" style={{backgroundColor:'white'}} >
                                        <div> <Link to='/Our'>Abudhabi</Link></div>
                                        <hr />
                                        <div> <Link to='/Our'>Dubai</Link></div>
                                        <hr />
                                        <div> <Link to='/Our'>Sharjah</Link></div>
                                        <hr />
                                        <div> <Link to='/Our'>Ajman</Link></div>
                                        <hr />
                                        <div> <Link to='/Our'>Umm Al Quwain</Link></div>
                                        <hr />
                                        <div> <Link to='/Our'>Fujairah</Link></div>
                                        <hr />
                                        <div>  <Link to='/Our'>Ras Al Khaima</Link></div>
                                    </div>}
                                </div>
                                <br/>
                            </div>
                            <div className="accordion col-12 col-md-4" >
                                <div className="accordion-item " style={{ backgroundColor: '#7f181b', }}>
                                    <div
                                        className="accordion-title"
                                        onClick={() => setIsActive(!isActive)}
                                        style={{ marginLeft: 5 }}
                                    >
                                        <span>UAE Corporate Services</span>
                                        <span>{isActive ? ' -' : ' +'}</span>
                                    </div>
                                    {isActive && <div className="accordion-content container" style={{backgroundColor:'white'}}>
                                        <div> <Link to='/Our'>Legal Structures for Businesses in the UAE</Link></div>
                                        <hr />
                                        <div> <Link to='/Our'>Redomicile Your Company to UAE</Link></div>
                                        <hr />
                                        <div> <Link to='/Our'>Business Setup in Dubai</Link></div>
                                        <hr />
                                        <div> <Link to='/Our'>Company Registration in the UAE</Link></div>
                                        <hr />
                                        <div> <Link to='/Our'>Starting a business in the UAE</Link></div>
                                        <hr />
                                        <div> <Link to='/Our'>Accounting-Taxation-Auditing in UAE</Link></div>
                                        <hr />
                                        <div>  <Link to='/Our'>Open Bank Account in Dubai</Link></div>
                                    </div>}
                                </div>
                                <br/>
                            </div>

                        </div>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                <br/>
                <div className="row" >
                <div className="col-12  align-self-center">
                        <div className="text-center">
                           <span >
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>  
                           </span>
                           <span style={{marginLeft:10}}>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>  
                          </span>
                          <span style={{marginLeft:10}}>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>  
                            </span> 
                          
                        </div>
                    </div>
                </div>
              <hr/>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2021 Nasreen Sayed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;