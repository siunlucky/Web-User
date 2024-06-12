// components/Logo.js
import Image from 'next/image';
import logo from './Logo.png'; // Import gambar sebagai modul
import './logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Image src={logo} alt="Logo" width={150} className="logo-img" />
      <h1>Welcome To HomeVice!</h1>
    </div>
  );
};

export default Logo;
