import React, { Component } from 'react';

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission,

        };
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    saveButton = () => {
        this.props.changeEditUserStatus();
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserInfo(info);
    }

    render() {
        return (
            <div className="card border-waring mt-2">
                <div className="card-header text-center">Sửa thông tin người dùng</div>
                <div className="card-body text-primary">
                    <div className="form-group">
                        <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} name="name" id="name" className="form-control form-control-sm" placeholder="tên user" />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} name="tel" id="tel" className="form-control form-control-sm" placeholder="điện thoại" />
                    </div>
                    <div className="form-group">
                        <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="form-control form-control-sm" name="permission" id="permission">
                            <option value>Chọn quyền</option>
                            <option value="1">Admin</option>
                            <option value="2">Modrator</option>
                            <option value="3">Normal</option>
                        </select>
                    </div>
                    <button onClick={() => this.saveButton()} className="btn btn-sm btn-block btn-success">Lưu</button>
                </div>
            </div>
        )
    }
}
