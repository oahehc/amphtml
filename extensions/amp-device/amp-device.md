---
$category: presentation
formats:
  - websites
teaser:
  text: add device type as class base on user agent
---

<!--
Copyright 2019 The AMP HTML Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

# `amp-device`

<table>
  <tr>
    <td width="40%"><strong>Description</strong></td>
    <td>Can be used to display different content on desktop, tablet and mobile device.</td>
  </tr>
  <tr>
    <td width="40%"><strong>Availability</strong></td>
    <td><a href="https://www.ampproject.org/docs/reference/experimental.html">Experimental</a></td>
  </tr>
  <tr>
    <td width="40%"><strong>Required Script</strong></td>
    <td><code>&lt;script async custom-element="amp-device" src="https://cdn.ampproject.org/v0/amp-device-0.1.js">&lt;/script></code></td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout">Supported Layouts</a></strong></td>
    <td>container</td>
  </tr>
  <tr>
    <td width="40%"><strong>Examples</strong></td>
    <td><a href="https://github.com/ampproject/amphtml/blob/master/examples/amp-device.amp.html">amp-device.amp.html</a></td>
  </tr>
</table>

## Behavior

The `amp-device` component add device(desktop|tablet|mobile) as class name, so developer can use CSS to control what we want to display in each device.

## Attributes

<table>
  <tr>
    <td width="40%"><strong>layout [required]</strong></td>
    <td>The value must be `container`.</td>
  </tr>
</table>

## Validation

See [amp-device rules](https://github.com/ampproject/amphtml/blob/master/extensions/amp-device/validator-amp-device.protoascii) in the AMP validator specification.
