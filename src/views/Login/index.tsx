import styles from "./login.module.scss"
import './login.less'
import { useState } from "react"
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from "react-router-dom"
const App: React.FC = () => {
  let navigateTo = useNavigate();

  const [loginForm, setloginForm] = useState({
    username: undefined,
    password: undefined,
    remember: undefined,
  })

  const usernameChange = (e: any) => {
    setloginForm({
      ...loginForm,
      username: e.target.value
    })
  }
  const passwordChange = (e: any) => {
    setloginForm({
      ...loginForm,
      password: e.target.value
    })
  }

  const onLogin = async (values: any) => {
    console.log('Success:', values);
    localStorage.setItem("lege-react-management-token", '1111');
    message.success('登陆成功！')
    navigateTo('/page1')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.loginPage}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input onChange={usernameChange} />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password onChange={passwordChange} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default App;
