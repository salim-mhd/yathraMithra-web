import React from 'react'
import './Button.scss'


// Define interface for props
interface ButtonProps {
  text: string; // Assuming 'text' is the prop you want to pass
  icon: any;
}

// Functional component with TypeScript
const Button: React.FC<ButtonProps> = ({ text , icon }) => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className='Button'><div>{text}</div> {icon ? <div className='ms-2 fs-5'>{icon}</div> : <></>}</div>
    </div>
  );
}

export default Button;

