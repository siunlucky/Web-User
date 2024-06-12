import Logo from "../logo/page";
import './style.css';

export default function SignUp() {
    return (
    <main className="main-container">
        <Logo />
        <div className='signup-form-container'>
            <form method='POST'>
                <div className="form-group">
                    <div className='label-input'><label htmlFor="name">Name</label></div>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                    <div className='label-input'><label htmlFor="phone">Phone Number</label></div>
                    <input type="text" id="phone" name="phone" />
                </div>
                <div className="form-group">
                    <div className='label-input'><label htmlFor="email">Email address</label></div>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <div className='label-input'><label htmlFor="password">Password</label></div>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Sign up</button>
            </form>
      </div>
    </main>
    );
}