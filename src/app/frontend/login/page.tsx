export default function LoginPage() {
    return (
        <>
            <h1>Login</h1>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}
