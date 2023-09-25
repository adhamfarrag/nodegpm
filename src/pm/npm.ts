import { execa } from 'execa';

const isInstalled = async () => {
    try {
        const { stdout: npmVersion } = await execa('npm', ['--version']);
        return true;
    } catch (error) {
        return false;
    }
}

const npm = {
    isInstalled
}

export default npm;