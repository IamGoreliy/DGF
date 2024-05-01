import { createCookies } from './custFetch';
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isTablet() {
  return /Android|iPad/i.test(navigator.userAgent) && !isMobileDevice();
}

function isPc () {
  return !isMobileDevice() && !isTablet();
}

async function deviceCheck () {
  let whatDeviceUse;
  if (isMobileDevice()) {
    whatDeviceUse = 'mobile';
  } else if (isTablet()) {
    whatDeviceUse = 'tablet';
  } else if (isPc()) {
    whatDeviceUse = 'pc';
  } else {
    whatDeviceUse = 'Unable to determine device type';
  }
  try {
    const infoSession = await createCookies(whatDeviceUse);
    if (!infoSession.status && infoSession.message === 'reload') {
      await deviceCheck();
    }
    if (infoSession.message !== 'reload') {
      throw new Error (infoSession.message);
    }
  } catch (e) {
    console.log(e.message);
  }
}

export default deviceCheck;