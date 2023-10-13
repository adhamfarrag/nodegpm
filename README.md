<div align="center">
<h3>NodeGPM</h3>
 <span>Unified management for global Node.js packages</span>

<span>🚧 Project is under development 🚧 </span>

  <p align="center">
  <a target="_blank" href="https://www.npmjs.com/package/nodegpm" align="center">
    <img src="https://img.shields.io/npm/v/nodegpm?color=eee&label=NodeGPM&logo=npm" alt="npm-badge" />
    </a>
  </p>
</div>

<br>

### What does NodeGPM do?

NodeGPM (Node Global Package Manager) is designed to simplify the management of global Node.js packages across different package managers like npm, yarn, pnpm, and bun. It provides a set of utility functions to perform tasks such as installing, removing, detecting globally installed packages, detecting available package managers, most used one, and more soon.

It uses command line tools for each package manager (npm, yarn, pnpm, and bun) to perform the tasks to make development easier, faster and more reliable.

> Note: Bun doesn't offer needed commands to search for globally installed packages, so it's not supported yet.

<br>
<br>

### Installation

```sh
npm install nodegpm

yarn add nodegpm

pnpm add nodegpm

bun add nodegpm
```

<br>

### Usage

Here are the vailable functions:

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

<br>

### Acknowledgement

NodeGPM is inspired by [nypm](https://github.com/unjs/nypm) by [unjs](https://github.com/unjs) team. 💚

<br>

### Contributing

Thanks for your interest 💚 <br>
If you have any idea, feel free to [open a discussion](https://github.com/adhamfarrag/nodegpm/discussions/new?category=ideas) first and let's talk about it!

<br>

### License

[MIT](https://github.com/adhamfarrag/nodegpm/blob/main/LICENSE) License © 2023.