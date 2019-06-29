/**
 * reference from is.js
 * https://github.com/arasatasaygin/is.js
 */

/**
 * Function to identify is device mobile
 * @param {!string} ua
 * @param {!string} pf
 * @return {!boolean}
 */
function isMobile(ua, pf) {
  return (
    isIphone(ua) ||
    isIpod(ua) ||
    isAndroidPhone(ua) ||
    isBlackberry(ua) ||
    isWindowsPhone(ua, pf)
  );
}

/**
 * Function to identify is device iphone
 * @param {!string} ua
 * @return {!boolean}
 */
function isIphone(ua) {
  return !isIpad(ua) && /iphone/.test(ua);
}

/**
 * Function to identify is device ipod
 * @param {!string} ua
 * @return {!boolean}
 */
function isIpod(ua) {
  return /ipod/.test(ua);
}

/**
 * Function to identify is device Android phone
 * @param {!string} ua
 * @return {!boolean}
 */
function isAndroidPhone(ua) {
  return /android/.test(ua) && /mobile/.test(ua);
}

/**
 * Function to identify is device blackberry
 * @param {!string} ua
 * @return {!boolean}
 */
function isBlackberry(ua) {
  return /blackberry/.test(ua) || /bb10/.test(ua);
}

/**
 * Function to identify is device Windows phone
 * @param {!string} ua
 * @param {!string} pf
 * @return {!boolean}
 */
function isWindowsPhone(ua, pf) {
  return /win/.test(pf) && /phone/.test(ua);
}

/**
 * Function to identify is device tablet
 * @param {!string} ua
 * @param {!string} pf
 * @return {!boolean}
 */
function isTablet(ua, pf) {
  return isIpad(ua) || isAndroidTablet(ua) || isWindowsTablet(ua, pf);
}

/**
 * Function to identify is device ipad
 * @param {!string} ua
 * @return {!boolean}
 */
function isIpad(ua) {
  return /ipad/.test(ua);
}

/**
 * Function to identify is device Android tablet
 * @param {!string} ua
 * @return {!boolean}
 */
function isAndroidTablet(ua) {
  return /android/.test(ua) && !/mobile/.test(ua);
}

/**
 * Function to identify is device Windows tablet
 * @param {!string} ua
 * @param {!string} pf
 * @return {!boolean}
 */
function isWindowsTablet(ua, pf) {
  return /win/.test(pf) && !isWindowsPhone() && /touch/.test(ua);
}

/**
 * Function to identify device base on userAgent and platform
 * @param {!string} userAgent
 * @param {!string} platform
 * @return {!string} desktop | tablet | mobile
 */
function getDevice({userAgent, platform}) {
  const ua = userAgent.toLowerCase();
  const pf = platform.toLowerCase();

  if (isMobile(ua, pf)) return 'mobile';
  if (isTablet(ua, pf)) return 'tablet';

  return 'desktop';
}
export default getDevice;
