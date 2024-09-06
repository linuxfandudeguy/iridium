#!/usr/bin/env node

const { execSync } = require('child_process');

const command = process.argv[2] || 'dev';

switch (command) {
    case 'start':
        execSync('npm run start', { stdio: 'inherit' });
        break;
    case 'build':
        execSync('npm run build', { stdio: 'inherit' });
        break;
    case 'dev':
        execSync('npm run dev', { stdio: 'inherit' });
        break;
    default:
        console.log(`Unknown command: ${command}`);
        console.log('Usage: iridium <command>');
        console.log('Commands:');
        console.log('  start    Start the server');
        console.log('  build    Build the project');
        console.log('  dev      Build the project and start the server');
}
