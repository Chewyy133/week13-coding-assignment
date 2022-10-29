export function LoginForm() {
    return (
        <div style={{marginTop: '10rem'}}>
            <h3>
                Log In
            </h3>
            <form>
            <input 
                placeholder="Username"
            /> <br/>
            <input
                placeholder="Password"
            /> <br/>
            <button>Submit</button>
            </form>
        
        </div>
    );
}

export default LoginForm;