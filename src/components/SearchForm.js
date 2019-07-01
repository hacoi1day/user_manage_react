import React, { Component } from 'react'
import EditUser from './EditUser';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {},
        };
    }
    hienThiNut = () => {
        if(this.props.hienThiForm === true) {
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketnoi()}>Đóng lại</div>
            );
        } else {
            return (
                <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketnoi()}>Thêm mới</div>
            );
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value,
        });
        this.props.getTextSearchProp(this.state.tempValue);
    }

    getUserInfo = (info) => {
        this.setState({
            userObj: info,
        });
        this.props.getUserEditInfoApp(info);
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditUser 
                    changeEditUserStatus={() => this.props.changeEditUserStatus()}
                    userEditObject={this.props.userEditObject}
                    getUserInfo={(info) => this.getUserInfo(info)}
                />;
        }
    }


    render() {
        return (
            <div>
                <div className="col-12">
                    {this.isShowEditForm()}
                </div>
                <div className="col-12">
                    <div className="btn-group">
                        <div className="form-group">
                            <input type="text" onChange={(event) => this.isChange(event)} style={{width: '730px'}} className="form-control" name="tukhoa" id="tukhoa" placeholder="Nhập tên cần tìm" />
                        </div>
                        <div className="btn btn-primary" style={{height: '38px'}} onClick={(dl) => this.props.getTextSearchProp(this.state.tempValue)}>Tìm kiếm</div>
                    </div>
                    
                    {this.hienThiNut()}
                    
                </div>
                <div className="col-12">
                    <hr />
                </div>
            </div>
        )
    }
}
