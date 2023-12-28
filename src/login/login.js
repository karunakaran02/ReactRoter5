import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'antd/lib/form/Form';
import { Button, Form, Input } from 'antd';
import { UserNameValue } from '../services/action';
import { UserContext } from '../UserContext/UserContext';

const Login = () => {

    let history = useHistory();
    const [form] = useForm();
    const dispatch = useDispatch();
    const stateValue = useSelector((state) => state);
    const state = { username: 'rahul', password: 'rahul123' };
    const { setHasToken } = useContext(UserContext);

    const userValue = () => {
        dispatch(UserNameValue(form.getFieldValue()))
        // dispatch(PasswordValue(form.getFieldValue().password))
        // dispatch(UserNameValue(form.getFieldValue().username))
    }

    const dashboard = () => {
        localStorage.setItem('isToken', false);
        const token = JSON.parse(localStorage.getItem('isToken'));
        setHasToken(token);
        history.push("/dashboard");
    }

    const login = () => {
        if (stateValue.username === state.username && stateValue.password === state.password) {
            localStorage.setItem('isToken', true);
            const token = JSON.parse(localStorage.getItem('isToken'));
            setHasToken(token);
            history.push("/user");
        }
        else {
            alert('Please Enter a Valid Input');
        }
    }

    return (
        <div className='wrapper'>
            <Form
                form={form}
                name="basic"
                onValuesChange={(values) => userValue(values)}
            >
                <h1 className='login'>LOGIN </h1>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <div className='buttonWrapper'>
                    <Button className='button' type="primary" onClick={() => login()}>
                        Login
                    </Button>
                </div>
                <p className='forgotPassword' onClick={() => dashboard()}>Forgot Password ?</p>
            </Form>
        </div>
    );
};

export default Login;