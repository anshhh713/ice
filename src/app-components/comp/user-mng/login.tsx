import './login.css';

type props = {
    oc: () => void
}
const Login = ({oc} : props) => {
    return (
        <>
            <button className='login-btn' onClick={oc}>
                Login
            </button>
        </>
    )
}
export default Login;