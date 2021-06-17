/* Copyright 2021 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Factors to rescale LiberationSans-Bold.ttf to have the same
// metrics as MyriadPro-Bold.otf.
const MyriadProBoldFactors = [
  1.36898, 1, 0.90838, 0.868, 0.868, 0.90838, 0.90838, 0.90838, 0.90838,
  0.90838, 0.90838, 0.91945, 0.90838, 0.90838, 0.90838, 0.90838, 0.90838,
  0.83637, 0.83637, 0.82391, 0.82391, 0.82391, 0.82391, 0.82391, 0.82391,
  0.91905, 0.96376, 0.96376, 0.97484, 0.90157, 0.80061, 0.80061, 0.80061,
  0.80061, 0.80061, 0.80061, 0.80061, 0.80061, 0.80061, 0.95417, 0.80061,
  0.80061, 0.75261, 0.95407, 0.87992, 0.97484, 0.99793, 0.86275, 0.8768, 0.8019,
  0.8768, 0.8768, 1, 0.8768, 0.95407, 1, 1, 1, 1, 0.97069, 0.95407, 1.0258,
  0.887, 1.0258, 1.0258, 1.0258, 1.0258, 1.0258, 1.0258, 1.0258, 1.0258, 1.0258,
  1.0258, 0.82976, 1.0258, 0.73901, 0.73901, 0.85022, 0.85022, 1, 0.83655,
  0.83655, 0.97153, 0.83655, 1, 0.83655, 0.84638, 1.0156, 1.0156, 0.95546,
  0.95546, 0.95546, 1, 0.95546, 0.95546, 0.92179, 0.936, 0.92179, 0.92179,
  0.92179, 0.92179, 0.92179, 0.92179, 0.92179, 0.92796, 0.97268, 0.92179,
  0.96034, 0.92179, 0.92179, 0.92179, 0.87107, 0.95638, 0.92361, 0.91709,
  0.92179, 0.82114, 0.82114, 0.82114, 1, 0.87107, 0.8096, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0.8096, 0.8096, 1, 0.8096, 1, 0.96318, 0.89713, 0.89713,
  0.89713, 0.89713, 1, 0.92436, 0.86958, 0.94438, 0.94438, 0.94438, 0.94438,
  0.94438, 0.94438, 0.94438, 0.94438, 0.94438, 0.93704, 0.93704, 0.83689,
  0.94438, 0.94438, 0.95353, 0.94083, 0.94083, 0.94083, 0.94083, 0.94083,
  0.91905, 0.89192, 0.90406, 0.90406, 0.90406, 0.90406, 0.90406, 0.9446, 0.9446,
  0.9446, 0.9446, 0.9446, 0.94938, 0.94938, 0.94938, 0.94938, 0.90088, 1,
  0.94938, 0.9031, 0.9031, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0.94938, 0.94836, 0.94836, 0.94938, 0.93884, 0.83181, 0.94938,
  1.08595, 0.94938, 0.94938, 1, 1, 1, 1, 1, 1, 1, 1.02058, 1.02058, 1.16661,
  0.78966, 0.94938, 0.97898, 1.18777, 1.01149, 0.96174, 1, 0.80687, 0.80687,
  0.94292, 0.94292, 0.90088, 1, 1.01149, 0.96544, 0.81093, 0.81093, 0.90088, 1,
  1, 0.81093, 0.81093, 0.81093, 0.81093, 0.90088, 0.99793, 0.87548, 1, 0.90088,
  1, 1, 0.78076, 0.93582, 1, 1, 0.91882, 0.99793, 1, 0.97571, 0.94219, 0.94219,
  0.84313, 0.97571, 0.89022, 0.9498, 1, 0.90088, 1, 0.9358, 1.08595, 1, 1,
  0.99793, 0.90088, 0.98621, 0.94938, 0.94938, 0.94938, 0.94938, 0.94938,
  0.94938, 0.94938, 0.94938, 0.99793, 1, 1, 0.94938, 1, 0.89903, 0.95933,
  0.94938, 0.98607, 1.0373, 1.02058, 1, 1.36145, 0.95933, 0.95933, 0.93969,
  0.80479, 1, 0.80479, 1.024, 1, 1, 1, 0.99793, 1, 1, 0.99793, 0.99793, 1, 1,
  0.9577, 0.92601, 0.9577, 0.9577, 1, 0.9577, 0.98225, 0.90088, 1, 1.02058,
  1.08595, 0.8361, 0.8361, 0.81079, 0.81079, 0.95933, 0.95933, 0.95933, 1, 1,
  0.90088, 1, 0.98621, 0.98621, 0.98621, 0.98621, 0.98621, 0.98621, 1.01591,
  0.98621, 1.05486, 1.30692, 1, 1, 1, 1, 1, 1, 0.98621, 1.0078, 1.0078, 1.0078,
  1.0078, 0.98621, 1.0474, 1.0474, 0.97455, 0.98275, 1, 0.97455, 0.98981,
  0.98981, 0.9314, 0.73977, 1, 0.73903, 1.02058, 1.08595, 1, 1, 1.02058, 1,
  1.16161, 1.033, 1, 0.9672, 0.54324, 1, 1, 1.02058, 1, 0.95617, 1.02058, 1, 1,
  0.95933, 0.95933, 0.8271, 0.95933, 1, 0.99793, 1, 1.08595, 0.95933, 0.91701,
  0.98894, 0.9446, 0.9446, 0.9446, 0.9446, 0.9446, 0.91964, 0.90088, 0.9446,
  0.9446, 0.9446, 0.86774, 0.86774, 0.9446, 0.9446, 0.99793, 1, 0.99642,
  0.99642, 1, 1.0213, 1.05686, 1, 0.9446, 0.9446, 0.9446, 0.97898, 0.97455,
  0.94292, 0.94292, 1.17173, 0.9897, 0.93582, 1.285, 1, 0.99394, 0.78367,
  1.02058, 1.08595, 0.80535, 0.96361, 0.97407, 0.72851, 0.72851, 0.83734, 0.918,
  0.908, 0.908, 0.93582, 1, 0.93582, 0.93582, 0.86209, 0.97646, 0.97646, 1.0732,
  0.97646, 1, 0.62295, 1, 0.9553, 0.90088, 1, 0.78036, 0.78036, 0.78036, 1,
  0.78036, 1, 1, 1.00872, 0.99793, 1, 1, 1, 0.86832, 1, 0.99793, 1.19137, 1, 1,
  0.99793, 0.76169, 1, 1.10208, 1.0128, 1.10208, 0.77452, 1, 1.05453, 0.97898,
  0.99793, 1, 0.99642, 0.90088, 1, 0.90989, 0.65, 1, 1, 1, 1, 0.99793, 0.95442,
  0.95442, 0.95442, 0.95442, 0.95442, 0.95442, 0.95442, 0.95442, 0.89903, 1,
  0.72706, 0.96694, 1, 1, 1, 1, 0.89713, 1.10208, 0.90088, 0.78076, 1, 1, 1, 1,
  0.96694, 1, 1, 1, 1, 1, 0.74854, 0.93582, 1, 1, 1, 1, 0.95442, 1, 0.95871,
  0.95871, 0.95871, 0.95871, 0.95442, 0.95442, 0.95298, 0.97579, 0.97579,
  0.97579, 0.97579, 0.97579, 0.9332, 1.05993, 0.94039, 0.94039, 0.94039,
  0.94039, 0.99793, 0.94039, 0.938, 0.938, 0.938, 0.938, 0.99793, 0.95776,
];

export { MyriadProBoldFactors };
