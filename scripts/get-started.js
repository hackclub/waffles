import { marked } from 'marked';
import markdown from '../docs/get-started.md?raw';

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('markdown-content').innerHTML = marked.parse(markdown);
});
