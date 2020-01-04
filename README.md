# react-native-splited-progress-bar

![Screenshot_20200104-111024](https://user-images.githubusercontent.com/36489841/71762392-e30dae80-2ee3-11ea-8e45-0a3c09924980.png)

## Installation

`$ npm install react-native-splited-progress-bar --save`

## Usage

```js

import {CircleProgressBar, ProgressBar} from 'react-native-splited-progress-bar';

<CircleProgressBar
    percentage={24}
/>
<ProgressBar
    percentage={24}
/>
```

### `CircleProgressBar`

| Prop                   | Description                                                     | Default                |
| ---------------------- | --------------------------------------------------------------- | ---------------------- |
| **`percentage`**       | number of percentage                                            | `0`                    |
| **`size`**             | size of progress bar to show in app                             | `100`                  |
| **`splited`**          | splited progressbar or not                                      | `true`                 |
| **`compeletedColor`**  | Color of the circle.                                            | `#39bc65`              |
| **`inCompeletedColor`**| Color of the inCompeleted area.                                 | `#C1C1C1`              |
| **`innerComponent`**   | The component to show in progresbar                             | `Component`            |
| **`isRtl`**            | for Rtl application                                             | `false`                |


### `ProgressBar`

| Prop                   | Description                                                     | Default                |
| ---------------------- | --------------------------------------------------------------- | ---------------------- |
| **`percentage`**       | number of percentage                                            | `0`                    |
| **`size`**             | size of progress bar to show in app                             | `100`                  |
| **`splited`**          | splited progressbar or not                                      | `false`                 |
| **`compeletedColor`**  | Color of the circle.                                            | `#39bc65`              |
| **`inCompeletedColor`**| Color of the inCompeleted area.                                 | `#C1C1C1`              |
| **`isRtl`**            | for Rtl application                                             | `false`                |
