# Codeforces Problem Picker Extension

A Chrome extension that picks a random problem from the current [Codeforces](https://codeforces.com) problemset with one click.

## Installation

Clone the project

```bash
  git clone https://github.com/AdhamElRouby/Codeforces-Problem-Picker.git
```

Go to the project directory

```bash
  cd .\Codeforces-Problem-Picker
```

Open with VSCode

```bash
  code .
```

Install dependencies

```bash
  npm install
```

Build the extension

```bash
  npm run build
```

Load the extension in Chrome

1. Go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `dist` folder from this project

## Usage

1. Visit the [Codeforces Problemset](https://codeforces.com/problemset) page and apply any filters or tags you like.
2. A `Pick One` button will automatically appear in the top-right corner above the problem list.
3. Click the button to open a random problem in a new tab — and enjoy solving!
