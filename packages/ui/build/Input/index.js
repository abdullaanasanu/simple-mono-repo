import { jsx } from 'react/jsx-runtime';
import styles from './styles.module.scss.js';

const Input = ({ value, onChange, props }) => {
    return (jsx("input", { className: styles.input, type: "text", value: value, onChange: onChange, ...props }));
};

export { Input as default };
