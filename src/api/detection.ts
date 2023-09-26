import pms from '../pm'

const npm = pms.npm.isInstalled()
const yarn = pms.yarn.isInstalled()
const pnpm = pms.pnpm.isInstalled()
const bun = pms.bun.isInstalled()

export async function  detectGlobalPackageManagers() {
    const globalPackageManagers = []

    if (await npm) {
        globalPackageManagers.push('npm')
    }

    if (await yarn) {
        globalPackageManagers.push('yarn')
    }

    if (await pnpm) {
        globalPackageManagers.push('pnpm')
    }

    if (await bun) {
        globalPackageManagers.push('bun')
    }

    return globalPackageManagers
}