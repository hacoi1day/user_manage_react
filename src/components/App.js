import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';

import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hienThiForm: false,
            data: [],
            searchText: '',
            editUserStatus: false,
            userEditObject: {},
        };
    }

    componentWillMount() {
        // kiểm tra xem có localStorage chưa
        console.log(localStorage.getItem('userData'));
        if(localStorage.getItem('userData') === null) {
            localStorage.setItem('userData', JSON.stringify(DataUser));
        } else {
            var temp = JSON.parse(localStorage.getItem('userData'));
            this.setState({
                data: temp,
            });
        }
    }
    

    getTextSearch = (dl) => {
        this.setState({
            searchText: dl,
        });
    }
    doiTrangThai = () => {
        this.setState({
            hienThiForm: !this.state.hienThiForm,
        });
    }
    getNewUserDate = (name, tel, permission) => {
        var item = {};
        item.id = uuidv1();
        item.name = name;
        item.tel = tel;
        item.permission = permission;
        var items = this.state.data;
        items.push(item);
        this.setState({
            data: items,
        });
        localStorage.setItem('userData', JSON.stringify(items));
    }
    changeEditUserStatus = () => {
        this.setState({
            editUserStatus: !this.state.editUserStatus,
        });
    }
    editUser = (user) => {
        this.setState({
            userEditObject: user,
        });
    }
    getUserEditInfoApp = (info) => {
        this.state.data.forEach((value, key) => {
            if(value.id === info.id) {
                value.name = info.name;
                value.tel = info.tel;
                value.permission = info.permission;
            }
        })
        localStorage.setItem('userData', JSON.stringify(this.state.data));
    }
    deleteButton = (idUser) => {
        // console.log(idUser);
        // hàm filter
        // var arr = [1, 2, 3];
        // var x = 2;
        // arr = arr.filter(item => item !== x);
        // console.log(arr);
        var tempData = this.state.data;
        tempData.forEach((value, key) => {
            if(value.id === idUser) {
                // console.log(key);
                tempData = tempData.filter(item => item.id !== idUser);
                this.setState({
                    data: tempData
                });
            }
        });
        // đẩy vào dữ liệu
        localStorage.setItem('userData', JSON.stringify(tempData));
    }

    render() {
        // localStorage.setItem('userData', JSON.stringify(this.state.data));
        // const data = localStorage.getItem('userData');
        // console.log(JSON.parse(data));
        // localStorage.removeItem('userData');
        var ketqua = [];
        this.state.data.forEach((item) => {
            var name = item.name.toLowerCase();
            if(name.indexOf(this.state.searchText) !== -1) {
                ketqua.push(item);
            }
        });
        return (
            <div>
                <Header/>
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <SearchForm 
                                ketnoi={() => this.doiTrangThai()}
                                hienThiForm={this.state.hienThiForm}
                                getTextSearchProp={(dl) => this.getTextSearch(dl)}
                                editUserStatus={this.state.editUserStatus}
                                changeEditUserStatus={() => this.changeEditUserStatus()}
                                userEditObject={this.state.userEditObject}
                                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                            />
                        </div>
                        <div className="row">
                            
                            <div className="col">
                                <TableData 
                                    dataUserProp={ketqua}
                                    editFun = {(user) => this.editUser(user)}
                                    changeEditUserStatus={() => this.changeEditUserStatus()}
                                    deleteButton={(idUser) => this.deleteButton(idUser)}
                                />
                            </div>
                            <div className="col-3">
                                <AddUser 
                                    hienThiForm={this.state.hienThiForm} 
                                    add={(name, tel, permission) => this.getNewUserDate(name, tel, permission)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
