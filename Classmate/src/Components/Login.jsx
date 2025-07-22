import Particles from './Particles';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import Footer from './Footer';

const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='w-screen h-screen relative overflow-hidden text-white bg-black  '>
      
      {/* Particle Background */}
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <Particles
          particleColors={['black', '#ffffff']}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Login Card */}
      <div className='w-full h-full flex items-center justify-center'>
        <div className='bg-[#121212] p-10 rounded-2xl shadow-lg w-[90%] max-w-[400px]'>
          <div className='flex flex-col items-center mb-6'>
            <img
              className='w-[120px] h-auto'
              src="https://www.hrxbrand.com/img/footerlogo.f432dd37.png"
              alt="HRX Logo"
            />
            <h1 className='text-2xl font-bold mt-4'>Keep Going</h1>
            <p className='text-center text-sm mt-2 text-gray-300'>
              India's Biggest Fitness Community
            </p>
          </div>

          {/* Form */}
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
              label="Username"
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
              label="Password"
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Flex justify="space-between" align="center">
                <a className='text-blue-400 hover:underline' href="#">Forgot password</a>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Log in
              </Button>
              <p className='text-center mt-3'>
                or <a className='text-blue-400 hover:underline' href="#">Register now!</a>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
