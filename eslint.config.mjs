import globals from 'globals';
import pluginJs from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions:  { 
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            }
        }
    },
    pluginJs.configs.recommended,
    { files: ['js/**/*.js'],
        rules: {
            quotes: ['error', 'single'],
            indent: ['error', 4],
        }},
    {
        files: ['*.json'],
        rules: {
            semi: true,
            indent: 4,
        }
    }
];