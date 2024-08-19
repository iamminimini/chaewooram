const mediaSizes = {
  mobile: 767, // 태블릿 최저해상도는 768px(아이패드) >> 767px 기준
  tablet: 1023, // PC 최저해상도가 1024px >> 1023px으로 기준
};

const media = {
  mobile: `@media only screen and (max-device-width: ${mediaSizes.mobile}px)`,
  tablet: `@media only screen and (max-width: ${mediaSizes.tablet}px)`,
};

export { media, mediaSizes };
