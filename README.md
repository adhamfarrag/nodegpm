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


<br>
<br>

### What does NGPM do?

NGPM (Node Global Package Manager) is a library designed to simplify the management of global Node.js packages across different package managers like npm, yarn, pnpm, and bun. It provides a set of utility functions to perform tasks such as installing, removing, detecting globally installed packages, detecting available package managers, most used one, and more.

It uses command line tools for each package manager (npm, yarn, pnpm, and bun) to perform the tasks to make development easier, faster and more reliable.

<br>
<br>

### Installation

```bash
npm install ngpm

yarn add ngpm

pnpm add ngpm

bun add ngpm
```

<br>
<br>

### Usage

NGPM provides a set of utility functions to manage globally installed packages. Here are some of the key functionalities:

<br>

#### Detecting Global Package Managers

To detect which global package managers are installed, you can use the `detectGlobalPackageManagers` function:

```ts
const globalPackageManagers = await detectGlobalPackageManagers();
console.log('Installed global package managers:', globalPackageManagers);
```

<br>

#### Detecting Most Used Global Package Manager

To detect the most used global package manager, you can use the `mostUsedGlobalPackageManager` function:

```ts
const mostUsedPM = await mostUsedGlobalPackageManager();
console.log('Most used global package manager:', mostUsedPM);
```

<br>

#### Detecting Globally Installed Package(s)

To detect if a package is installed globally, you can use the `isGloballyInstalled` function:

```ts
const nuxi = await isInstalledGlobally('nuxi');
console.log('Is nuxi installed globally?', nuxi);

```

<br>

#### Installing Packages Globally

You can use the `installGlobally` function to install packages globally using a specific package manager:

```ts
const pm = 'npm'; // Package manager (npm, yarn, pnpm, bun)
const packages = ['prettier', 'eslint'];
await installGlobally(pm, packages);
```

<br>

#### Removing Packages Globally

To remove globally installed packages, you can use the `removeGlobally` function:

```ts
const packagesToRemove = ['prettier', 'eslint'];
await removeGlobally(packagesToRemove);
```
