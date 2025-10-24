#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Fix for twin.macro compatibility with Tailwind CSS v3.3.0+
 * twin.macro expects 'tailwindcss/stubs/defaultConfig.stub' but the file is 'defaultConfig.stub.js'
 * This creates a symlink to resolve the import issue
 */

const tailwindStubsDir = path.join(__dirname, '../node_modules/tailwindcss/stubs');
const defaultConfigStubPath = path.join(tailwindStubsDir, 'defaultConfig.stub.js');
const expectedPath = path.join(tailwindStubsDir, 'defaultConfig.stub');

// Ensure the stubs directory exists
if (!fs.existsSync(tailwindStubsDir)) {
  console.log('Creating tailwindcss/stubs directory...');
  fs.mkdirSync(tailwindStubsDir, { recursive: true });
}

// Check if the original file exists
if (!fs.existsSync(defaultConfigStubPath)) {
  console.error('❌ defaultConfig.stub.js not found in tailwindcss/stubs/');
  process.exit(1);
}

// Remove existing symlink/file if it exists
if (fs.existsSync(expectedPath)) {
  fs.unlinkSync(expectedPath);
}

// Clean up old config.full.js file if it exists (from previous fix)
const oldConfigFullPath = path.join(tailwindStubsDir, 'config.full.js');
if (fs.existsSync(oldConfigFullPath)) {
  console.log('Removing old config.full.js file...');
  fs.unlinkSync(oldConfigFullPath);
}

// Create symlink from defaultConfig.stub.js to defaultConfig.stub
console.log('Creating symlink: defaultConfig.stub -> defaultConfig.stub.js');
fs.symlinkSync('defaultConfig.stub.js', expectedPath);

console.log('✅ Fixed twin.macro compatibility issue');
