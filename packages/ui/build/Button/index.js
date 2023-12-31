import { jsx } from 'react/jsx-runtime';
import styles from './styles.module.scss.js';

const Button = ({ onClick, children }) => {
    return (jsx("button", { className: styles.button, onClick: onClick, children: children }));
};

export { Button as default };
