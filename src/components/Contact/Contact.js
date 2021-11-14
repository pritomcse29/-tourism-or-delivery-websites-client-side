import React from "react";
import Footer from "../Footer/Footer";
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <div>
                <h1 className="text-center">CONTACT INFO</h1>
                {/* <div class="container">
                    <h1>ADDRESS</h1>
                    <div class="row">
                        <div class="col-3 space-address">

                            <h4>For Dhaka District:</h4>
                            <h5>SarkarHealthCare Institute of Technology & Management (SarkarHealthCare)
                                BDBL Bhaban (3rd Floor - East), 12 Kawran Bazar, Dhaka -1215.
                                Contact Number: +8809612342486 Ext: 209-211 (from 9:30am – 5:00 pm)
                                Email address: info@SarkarHealthCare.org.bd</h5>
                        </div>
                        <div class="col-3 space-address">
                            <h4>For Chittagong District:</h4>
                            <h5>
                                SarkarHealthCare Institute of Technology & Management (SarkarHealthCare)
                                R.I Tower (4th Floor), 23/A M M Ali Road, Golpahar Circle (Beside Evergreen Health Center), Mehedibag, Chittagong.
                                Contact Number: +8809612342486 Ext: 220 (from 9:30am – 5:00 pm)
                                Email address: info@SarkarHealthCare.org.bd
                            </h5>
                        </div>

                        <div class="col-3 space-address">

                            <h4>For Dhaka District:</h4>
                            <h5>SarkarHealthCare Institute of Technology & Management (SarkarHealthCare)
                                BDBL Bhaban (3rd Floor - East), 12 Kawran Bazar, Dhaka -1215.
                                Contact Number: +8809612342486 Ext: 209-211 (from 9:30am – 5:00 pm)
                                Email address: info@SarkarHealthCare.org.bd</h5>
                        </div>
                        <div class="col-3 space-address">
                            <h4>For Chittagong District:</h4>
                            <h5>
                                SarkarHealthCare Institute of Technology & Management (SarkarHealthCare)
                                R.I Tower (4th Floor), 23/A M M Ali Road, Golpahar Circle (Beside Evergreen Health Center), Mehedibag, Chittagong.
                                Contact Number: +8809612342486 Ext: 220 (from 9:30am – 5:00 pm)
                                Email address: info@SarkarHealthCare.org.bd
                            </h5>
                        </div>

                        <div class="col-3 space-address">

                            <h4>For Dhaka District:</h4>
                            <h5>SarkarHealthCare Institute of Technology & Management (SarkarHealthCare)
                                BDBL Bhaban (3rd Floor - East), 12 Kawran Bazar, Dhaka -1215.
                                Contact Number: +8809612342486 Ext: 209-211 (from 9:30am – 5:00 pm)
                                Email address: info@SarkarHealthCare.org.bd</h5>
                        </div>
                        <div class="col-3 space-address">
                            <h4>For Chittagong District:</h4>
                            <h5>
                                SarkarHealthCare Institute of Technology & Management (SarkarHealthCare)
                                R.I Tower (4th Floor), 23/A M M Ali Road, Golpahar Circle (Beside Evergreen Health Center), Mehedibag, Chittagong.
                                Contact Number: +8809612342486 Ext: 220 (from 9:30am – 5:00 pm)
                                Email address: info@SarkarHealthCare.org.bd
                            </h5>
                        </div>

                        <div class="col-3 space-address">

                            <h4>For Dhaka District:</h4>
                            <h5>SarkarHealthCare Institute of Technology & Management (SarkarHealthCare)
                                BDBL Bhaban (3rd Floor - East), 12 Kawran Bazar, Dhaka -1215.
                                Contact Number: +8809612342486 Ext: 209-211 (from 9:30am – 5:00 pm)
                                Email address: info@SarkarHealthCare.org.bd</h5>
                        </div>
                        <div class="col-3 space-address">
                            <h4>For Chittagong District:</h4>
                            <h5>
                                SarkarHealthCare Institute of Technology & Management (SarkarHealthCare)
                                R.I Tower (4th Floor), 23/A M M Ali Road, Golpahar Circle (Beside Evergreen Health Center), Mehedibag, Chittagong.
                                Contact Number: +8809612342486 Ext: 220 (from 9:30am – 5:00 pm)
                                Email address: info@SarkarHealthCare.org.bd
                            </h5>
                        </div>

                    </div>
                </div>

                <div >
                    <h2 className="contact-style message-us">CONTACT(Phone/Email)</h2>
                    <h4>SarkarHealthCare, Cell: +8809612342486, Email: info@SarkarHealthCare.org.bd</h4>

                </div> */}

                <h1 className="text-center">For Message US</h1>

                <div className="style-message">
                    <div class="input-group mb-3 container">
                        <span class="input-group-text" id="basic-addon1">Full Name</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>




                    <div class="input-group mb-3 container">
                        <span class="input-group-text" id="basic-addon3">Email Adress</span>
                        <input type="email" class="form-control" placeholder="User Email" id="basic-url" aria-describedby="basic-addon3" />
                    </div>

                    <div class="input-group mb-3 container">
                        <span class="input-group-text" id="basic-addon3">Contact Number</span>
                        <input type="tel" class="form-control" placeholder="Contact Number" id="basic-url" aria-describedby="basic-addon3" />
                    </div>

                    <div class="input-group container">
                        <span class="input-group-text">With textarea</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <button className="message-us">Submit</button>
                </div>

            </div>

        </div>
    );
};

export default Contact;