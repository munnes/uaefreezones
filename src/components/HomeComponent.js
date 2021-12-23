
import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardImgOverlay, CardHeader,
    Form, FormGroup, Input,Label,Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Brand from "./Brand";
const Home = () => {
    return (
        <>
            < div className="container" style={{ marginTop: 20, marginBottom: 20}}>
                <h1 style={{ color: '#004b79', fontWeight: 'bold' }}>Welcome to UAE Free Zones</h1>
                <p style={{ textAlign: 'justify',fontFamily: 'Open Sans' }}>An industry leader in business consultancy and company formation in the UAE for over a decade, UAE Freezones (an established online platform for Global Resources) has been designed for entrepreneurs that have a business idea but donâ€™t have the knowledge, resources or the experience to move their concept forward and kickstart their business in the UAE.</p>
                <p style={{ textAlign: 'justify' }}>UAE Freezones offers a bespoke advisory service that gives clear direction and guidance to savvy investors who want to set up their operations in the Emirates, whether onshore or offshore.</p>
                <p style={{ textAlign: 'justify' }}>Globalization has been rallying into unprecedented levels of sharing and interdependance that shape it towards the vision of one community.Global Resources has been among the strong agents in showing international playesrsthe way towards globalization via the UAE market and vice versa.</p>
            </div>

            <div className="container" >
                <div style={{ backgroundColor: '#0091cd', textAlign: 'center', height: '10vh', verticalAlign: 'center' }}>
                    <h1 style={{ color: 'white', fontWeight: 'bold' }}>Startup Business Packages in UAE</h1>
                </div>
                <div className='row' style={{ marginTop: 5 }}>
                    <div className="col-12 col-md-6" style={{ marginTop: 5 }}>
                        <Card>
                            < CardHeader style={{ color: '#0091cd', fontWeight: 'bold' }}>Onshore Companies</CardHeader>
                            <CardBody>
                                <CardText>
                                    <p>Packages with virtual office ,import export
                                        license ,consultancy or services iicense with UAE bank
                                        account & visa eligibility</p>
                                    <div style={{ marginBottom: 5 }}><Link to='/'> Dubai South</Link></div>
                                    <div style={{ marginBottom: 5 }}> <Link to='/' >International Free Zone Authority</Link></div>
                                    <div style={{ marginBottom: 5 }}> <Link to='/' >Sharjah Airport Free zone</Link></div>
                                    <div style={{ marginBottom: 5 }}> <Link to='/' >Sharjah Media City</Link></div>
                                    <div style={{ marginBottom: 5 }}>   <Link to='/'>RAKEZ</Link></div>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6" style={{ marginTop: 5 }}>
                        <Card>
                            < CardHeader style={{ color: '#0091cd', fontWeight: 'bold' }}>Offshore Companies</CardHeader>
                            <CardBody>
                                <CardText>
                                    <p>Form your offshore company online - Package include UAE company & UAE bank account..
                                        <Link to='/'> Read More</Link>
                                    </p>
                                    <div style={{ marginBottom: 5 }}><Link to='/'> JAFZA</Link></div>
                                    <div style={{ marginBottom: 5 }}> <Link to='/' >RAK ICC</Link></div>
                                    <div style={{ marginBottom: 5 }}> <Link to='/' >UAE Offshore FAQ</Link></div>
                                    <div style={{ marginBottom: 5 }}> <Link to='/' >SUAE Offshore Banking</Link></div>
                                    <div style={{ marginBottom: 5 }}>   <Link to='/'>Be our Offshore Agent</Link></div>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="container" >
                <div style={{ backgroundColor: '#ed1b2e', textAlign: 'center', height: '10vh', verticalAlign: 'center', marginTop: 15 }}>
                    <h1 style={{ color: 'white', fontWeight: 'bold' }}>Other Business Services in Dubai</h1>
                </div>
                <div className='row' style={{ marginTop: 5 }}>
                    <div className="col-12 col-md-6" style={{ marginTop: 5 }}>
                        <Card>
                            < CardHeader style={{ color: '#ed1b2e', fontWeight: 'bold' }}>Business Recommendations</CardHeader>
                            <CardImg width="100%" src="assets/images/business_applicationUAE.jpg" alt='business_applicationUAE' />
                            <CardBody>
                                <CardText>
                                    <p>It is possible to change a country of jurisdiction and to maintain the company's legal identity. Therefore,
                                        domiciliation means moving a company domicile from one jurisdiction to another</p>
                                    <Link to='/'> Read More</Link>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-12 col-md-6" style={{ marginTop: 5 }}>
                        <Card>
                            < CardHeader style={{ color: '#ed1b2e', fontWeight: 'bold' }}>VAT Registration </CardHeader>
                            <CardImg width="100%" src="assets/images/offshore_pic.jpg" alt='business_applicationUAE' />
                            <CardBody>
                                <CardText>
                                    <p>We can provide a complete range of services to address all
                                        elements of VAT implementation and ongoing compliance. </p>
                                    <Link to='/'> Read More</Link>
                                    <br /><br />
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="container" >
                <div style={{ backgroundColor: '#537b35', textAlign: 'center', height: '10vh', verticalAlign: 'center', marginTop: 15 }}>
                    <h1 style={{ color: 'white', fontWeight: 'bold' }}>Our Partners</h1>
                    </div>
                    <div className='row' style={{ marginTop: 5 }}>
                        <Brand bName="dubai-airport-freezone.jpg" />
                        <Brand bName="dubai-healthcare-city.jpg" />
                        <Brand bName="dubai-south.jpg" />
                        <Brand bName="dubai-world-trade-center.jpg" />
                        <Brand bName="fujairah-free-zone.jpg" />
                        <Brand bName="hamriyah-freezone-authority.jpg" />
                        <Brand bName="international-freezone-authority.jpg" />
                        <Brand bName="jebel-ali-free-zone.jpg" />
                        <Brand bName="kalifa-port-free-trade-zone.jpg" />
                        <Brand bName="meydan-logo-min.png" />
                        <Brand bName="rak-icc.jpg" />
                        <Brand bName="ras-al-khaimah-economic-zone.jpg" />
                        <Brand bName="sharjah-airport-international-free-zone authority.jpg" />
                        <Brand bName="sharjah-media-city.jpg" />
                        <Brand bName="uaq-free-trade-zone.jpg" />

                    </div>

                

            </div>
            <div className="container" style={{ marginTop: 20, }} >
                <div style={{ backgroundColor: '#ecb731',  verticalAlign: 'center', marginTop: 15,color:'white',fontFamily: 'Open Sans'  }} className="container">
                    <h1 style={{ color: 'white', fontWeight: 'bold',textAlign: 'center', color:'#7f181b' }}>Our Expertise</h1>
                    <p >UAE Free Zones Team have the expertise you need to complete the legal requirements for company formation,
                         the setting up of bank accounts, and the acquiring of residency visas.</p>
                         <p>We handle the full range of business set-up services</p>
                         <div className='row'>
                       <div className="col-12 col-md-4"> <Link to='/'> Establishing public shareholding companies</Link> </div> 
                       <div className="col-12 col-md-4">   <Link to='/'> Licensing partnerships and sole establishments </Link></div>
                       <div className="col-12 col-md-4">    <Link to='/'> Licensing branch and representative offices</Link></div>
                       <div className="col-12 col-md-4">   <Link to='/'> Obtaining professional, industrial, trade licenses</Link></div>
                       <div className="col-12 col-md-4">    <Link to='/'> Licensing off-shore companies</Link></div>
                       <div className="col-12 col-md-4">  <Link to='/'>  Trademark registration</Link></div>
                       <div className="col-12 col-md-4">  <Link to='/'>  UAE Will Writing</Link></div>
                         </div>
                         <br/>
                         <div className='row'>
                         <div className="col-12 col-md-6">
                             <h3 style={{color:'#7f181b'}}>G R G  Corporate Services Provider</h3>
                             <p style={{ textAlign: 'justify' }}>G R G Corporate Services Provider has always been eager to assist investors and businessmen in making a reality of their goal of 
                             experiencing the most talked about business freedom in the UAE Free zones.</p>
         
                         </div>
                         <div className="col-12 col-md-6">
                             <h3 style={{color:'#7f181b'}}>Subscribe</h3>
                             <Form >
                                            <FormGroup>
                                                <Label htmlFor="email">Enter your Email Address For Subscirbe Our Monthly Newsletters</Label>
                                                <Input type="email" id="email" name="email"
                                                     />
                                            </FormGroup>
                                            <Button type="submit" value="submit" style={{ backgroundColor: '#7f181b', marginTop: 10 }}>Subscirbe</Button>
                                            </Form>
                             </div>
                             </div>
                         <br/>

                </div>
               
            </div>
        </>

    )
}
export default Home