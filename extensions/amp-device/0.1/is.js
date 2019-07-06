/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * reference from is.js: https://github.com/arasatasaygin/is.js
 */

/**
 * Function to identify is device mobile
 * @param {string} ua
 * @param {string} pf
 * @return {boolean}
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
 * @param {string} ua
 * @return {boolean}
 */
function isIphone(ua) {
  return !isIpad(ua) && /iphone/.test(ua);
}

/**
 * Function to identify is device ipod
 * @param {string} ua
 * @return {boolean}
 */
function isIpod(ua) {
  return /ipod/.test(ua);
}

/**
 * Function to identify is device Android phone
 * @param {string} ua
 * @return {boolean}
 */
function isAndroidPhone(ua) {
  return /android/.test(ua) && /mobile/.test(ua);
}

/**
 * Function to identify is device blackberry
 * @param {string} ua
 * @return {boolean}
 */
function isBlackberry(ua) {
  return /blackberry/.test(ua) || /bb10/.test(ua);
}

/**
 * Function to identify is device Windows phone
 * @param {string} ua
 * @param {string} pf
 * @return {boolean}
 */
function isWindowsPhone(ua, pf) {
  return /win/.test(pf) && /phone/.test(ua);
}

/**
 * Function to identify is device tablet
 * @param {string} ua
 * @param {string} pf
 * @return {boolean}
 */
function isTablet(ua, pf) {
  return isIpad(ua) || isAndroidTablet(ua) || isWindowsTablet(ua, pf);
}

/**
 * Function to identify is device ipad
 * @param {string} ua
 * @return {boolean}
 */
function isIpad(ua) {
  return /ipad/.test(ua);
}

/**
 * Function to identify is device Android tablet
 * @param {string} ua
 * @return {boolean}
 */
function isAndroidTablet(ua) {
  return /android/.test(ua) && !/mobile/.test(ua);
}

/**
 * Function to identify is device Windows tablet
 * @param {string} ua
 * @param {string} pf
 * @return {boolean}
 */
function isWindowsTablet(ua, pf) {
  return /win/.test(pf) && !isWindowsPhone(ua, pf) && /touch/.test(ua);
}

/**
 * Function to identify device base on userAgent and platform
 * @param {string} userAgent
 * @param {string} platform
 * @return {string} desktop | tablet | mobile
 */
function getDevice(userAgent, platform) {
  const ua = userAgent.toLowerCase();
  const pf = platform.toLowerCase();

  if (isMobile(ua, pf)) {
    return 'mobile';
  }
  if (isTablet(ua, pf)) {
    return 'tablet';
  }

  return 'desktop';
}
export default getDevice;
