import { marked } from 'marked';
import markdown from '../docs/get-started.md?raw';

document.getElementById('markdown-content').innerHTML = marked.parse(markdown);
