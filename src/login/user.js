import { useEffect, useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';
import { UserContext } from '../UserContext/UserContext';

export const Userpage = () => {
    const [data, setData] = useState([]);
    let history = useHistory();
    const { setHasToken } = useContext(UserContext)

    useEffect(() => {
        fetchFunction()
    }, [])

    // const location = useLocation();
    // console.log('location',location)

    // const [queryString, setQueryString] = useSearchParams();
    // queryString.get('')

    const fetchFunction = async () => {
        const datas = await fetch('https://reqres.in/api/users')
            .then((data) => data.json())
            .then((val) => val)
        setData(datas.data);

        // setQueryString({ food: 'rice', drink: 'soda' })
    }

    const navtouserdetail = (data) => {
        history.push(`/userDetail/${data.first_name}`)
        localStorage.setItem('isToken', true);
        const token = JSON.parse(localStorage.getItem('isToken'));
        setHasToken(token)
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'FirstName',
            dataIndex: 'first_name'
        },
        {
            title: 'LastName',
            dataIndex: 'last_name'
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            render: (value, data, index) => <div id='avatar' onClick={() => navtouserdetail(data)}>
                <div id='value'>{value}</div>
            </div>
        }
    ]

    const clearValue = () => {
        history.push('/');
        localStorage.setItem('isToken', false);
        const token = JSON.parse(localStorage.getItem('isToken'));
        setHasToken(token)
    }

    return (
        <div id='UserPage'>
            <Table columns={columns} dataSource={data} pagination={false} />
            <button id='logout' onClick={() => clearValue()}>Logout</button>
        </div>
    )
}
