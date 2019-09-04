/* eslint-disable no-param-reassign */

const pinFunction = (element, binding) => {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
};
export default pinFunction;


// export default { // Hooks para manejar directive.
//   bind: (element, binding) => {
//     pinFunction(element, binding);
//   },
//   updated: (element, binding) => {
//     pinFunction(element, binding);
//   },
// };
