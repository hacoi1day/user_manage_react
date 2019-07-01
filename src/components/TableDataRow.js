import React, { Component } from 'react'

export default class TableDataRow extends Component {

    printPermission = (per) => {
        per = parseInt(per);
        if(per === 1) {
            return 'admin'
        } else if(per === 2) {
            return 'dev'
        } else if(per === 3) {
            return 'tester'
        } else {
            return '';
        }
    }

    editClick = () => {
        this.props.clickEditFun();
        this.props.changeEditUserStatus();
    }

    deleteButton = (idUser) => {
        // console.log(idUser);
        this.props.deleteButton(idUser);
    }

    render() {
        // props.clickEditFun()
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.tel}</td>
                <td>{this.printPermission(this.props.data.permission)}</td>
                <td>
                <div className="btn-group">
                    <button onClick={() => this.editClick()} className="btn btn-warning button"><i className="fas fa-pencil-alt" /> Sửa</button>
                    <button onClick={(idUser) => this.deleteButton(this.props.data.id)} className="btn btn-danger button"><i className="fas fa-trash" /> Xóa</button>
                </div>
                </td>
            </tr>
        )
    }
}
