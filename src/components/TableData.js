import React, { Component } from 'react';
import './../App.css';
import TableDataRow from './TableDataRow';

export default class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    deleteButton = (idUser) => {
        // console.log(idUser);
        this.props.deleteButton(idUser);
    }

    mappingDataUser = () => this.props.dataUserProp.map((value, key) => (
        <TableDataRow 
            key={key}
            data={value}
            clickEditFun={(user) => this.props.editFun(value)}
            changeEditUserStatus={() => this.props.changeEditUserStatus()}
            deleteButton={(idUser) => this.deleteButton(idUser)}
        />
    ));

    // this.prop.editFun()
    
    render() {
        return (
            <div>
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        )
    }
}
