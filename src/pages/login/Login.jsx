import React, { Component } from 'react'
import logo from './image/logo.png'
import { Form, Icon, Input, Button} from 'antd';
import "./login.less"
const Item = Form.Item
export default class Login extends Component{
    render(){
        return(
            <div className = "login">
                <header className = "login_header">
                    <img src= {logo} alt="logo"/>
                    <h1>React项目: 后台管理系统</h1>
                </header>
                <section className = "login_content">
                    <h2>用户登陆</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />
                        </Item>
                        <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 陆
                        </Button>
                        </Form.Item>
                    </Form>
                </section>
              
            </div>
        )
    }
}