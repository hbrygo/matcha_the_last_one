import { render } from 'react-dom'
import { useState, createElement } from 'react'


// ca c'est un composant
function MyButton() {
    const [count, setCount] = useState(0);

    return createElement(
        'button',
        { onClick: () => setCount(c => c + 1) },
        `Cliqué ${count} fois`
    );
}

// link react a ma page html mais mal fait -> Vite
document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root') || (() => {
        const d = document.createElement('div');
        d.id = 'root';
        document.body.appendChild(d);
        return d;
    })();

    render(createElement(MyButton), root);
});