import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            permission: ''
        };
    }

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true) {
            return (
                <div className="card border-primary mt-2" style={{maxWidth: '18rem'}}>
                    <div className="card-header text-center">Thêm mới</div>
                    <div className="card-body text-primary">
                        <form>
                            <div className="form-group">
                                <input type="text" onChange={(event) => this.isChange(event)} name="name" id="name" className="form-control form-control-sm" placeholder="tên user" />
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={(event) => this.isChange(event)} name="tel" id="tel" className="form-control form-control-sm" placeholder="điện thoại" />
                            </div>
                            <div className="form-group">
                                <select onChange={(event) => this.isChange(event)} className="form-control form-control-sm" name="permission" id="permission">
                                    <option value>Chọn quyền</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Modrator</option>
                                    <option value="3">Normal</option>
                                </select>
                            </div>
                            <button type="reset" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} className="btn btn-sm btn-block btn-primary">Thêm mới</button>
                        </form>
                    </div>
                </div>
            );
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        // package to item
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;
    }

    render() {
        return (
            <div>
                {this.kiemTraTrangThai()}
                
            </div>
        )
    }
}
