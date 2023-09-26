<div align="center">
<h3>🌎 NGPM</h3>
 <span>Node global package tool for managing global packages</span>

<span>🚧 Project heavy development 🚧 </span>

  <p align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode" target="_blank">
      <img src="https://img.shields.io/visual-studio-marketplace/v/Nuxtr.nuxtr-vscode.svg?color=eee&label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" />
    </a>
  </p>

</div>


### What does NGPM do?

NGPM (Node Global Package Manager) is a library designed to simplify the management of global Node.js packages across different package managers like npm, yarn, pnpm, and bun. It provides a set of utility functions to perform tasks such as installing, removing, detecting globally installed packages, detecting available package managers, most used one, and more.

It uses command line tools for each package manager (npm, yarn, pnpm, and bun) to perform the tasks to make development easier, faster and more reliable.


### Installation

```bash
npm install ngpm

yarn add ngpm

pnpm add ngpm

bun add ngpm
```

### Usage

#### Detecting Global Package Managers

To detect which global package managers are installed, you can use the `detectGlobalPackageManagers` function:

```ts
const globalPackageManagers = await detectGlobalPackageManagers();
console.log('Installed global package managers:', globalPackageManagers);
```

#### Installing Packages Globally

You can use the `installGlobally` function to install packages globally using a specific package manager:

```ts
const pm = 'npm'; // Package manager (npm, yarn, pnpm, bun)
const packages = ['prettier', 'eslint'];
await installGlobally(pm, packages);
```

#### Removing Packages Globally

To remove globally installed packages, you can use the `removeGlobally` function:

```ts
const packagesToRemove = ['prettier', 'eslint'];
await removeGlobally(packagesToRemove);
```
