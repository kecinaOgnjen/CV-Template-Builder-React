import React from "react";
import {StoreService} from "../../services/store.service";
import "./style/OK-template.css";
export default class OKTemplate extends React.Component{
    constructor(props) {
        super(props);

        let userData = this.props.data ? this.props.data : StoreService.getStoreProperty('user');
        let nameArray = userData.fullName.split(' ');
        let firstName = nameArray[0];
        let lastName = nameArray[1];

        this.state = {
            firstName:firstName,
            lastName:lastName,

            address: userData && userData.cv_data && userData.cv_data.address ? userData.cv_data.address : '[address]',
            tel: userData && userData.cv_data && userData.cv_data.tel ? userData.cv_data.tel : '[tel]',
            linkedin: userData && userData.cv_data && userData.cv_data.linkedinURL ? userData.cv_data.linkedinURL : '',
            fb: userData && userData.cv_data && userData.cv_data.fbURL ? userData.cv_data.fbURL : '',
            twitter: userData && userData.cv_data && userData.cv_data.twitterURL ? userData.cv_data.twitterURL : '',
            github: userData && userData.cv_data && userData.cv_data.githubURL ? userData.cv_data.githubURL : '',
            ig: userData && userData.cv_data && userData.cv_data.instagramURL ? userData.cv_data.instagramURL : '',
            skype: userData && userData.cv_data && userData.cv_data.skypeURL ? userData.cv_data.skypeURL : '',
            experience: userData && userData.cv_data && userData.cv_data.experience ? userData.cv_data.experience : '',
            education: userData && userData.cv_data && userData.cv_data.education ? userData.cv_data.education : '',

        }
    }
    render() {
        const{experience} = this.state;
        const{education} = this.state;

        return(
            <div className="ok-container">
                <div className="ok-layout">
                    <div className="ok-header">
                        {this.state.firstName}
                        {this.state.lastName}
                    </div>
                    <div className="ok-body">
                        <div className="ok-body-left">
                            <h2 className="first-company-title">CAREER</h2>
                            <div className="ok-body-left-company">
                                <div className="ok-body-left-company-header">
                                    <h4>Present</h4>
                                    <h4 className="job-title">JOB TITLE</h4>
                                    <h4>{this.state.experience}</h4>
                                </div>
                                <div className="ok-body-left-company-body">

                                </div>
                            </div>
                        </div>
                        <div className="ok-body-right">
                            test
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}