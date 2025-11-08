import { getComponents } from '../services/load.components.js';

document.addEventListener('DOMContentLoaded', () => {
    getComponents('customheader');
    getComponents('customfooter');
});
