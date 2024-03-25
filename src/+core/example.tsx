// Warning: Unused import
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Warning: Unreachable code
const foo = () => {
    return 'foo';
    console.log('This line is unreachable');
  };

// Warning: Missing space before and after the arrow function
const add = (a: any,b: any)=>a+b;

// Warning: Missing space inside block
const flag = true;
if(flag){console.log('Inside block')}

// Warning: Missing space after comma
const example = [1,2,3];