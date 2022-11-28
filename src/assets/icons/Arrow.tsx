import { FC, SVGAttributes } from 'react';

export const Arrow: FC<SVGAttributes<SVGPathElement>> = ({ ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.7119 10C7.87849 9.99974 8.03992 10.0579 8.16814 10.1644L11.9872 13.3608L15.8132 10.2738C15.8856 10.21 15.9701 10.1616 16.0616 10.1314C16.1532 10.1013 16.2498 10.0899 16.3459 10.0981C16.4419 10.1063 16.5353 10.1339 16.6204 10.1792C16.7055 10.2244 16.7806 10.2864 16.8412 10.3615C16.9018 10.4366 16.9465 10.5232 16.9728 10.616C16.9992 10.7089 17.0064 10.8061 16.9943 10.9018C16.9821 10.9976 16.9507 11.0898 16.902 11.1731C16.8534 11.2564 16.7883 11.329 16.7109 11.3865L12.4356 14.8379C12.3081 14.9427 12.1482 15 11.9833 15C11.8183 15 11.6585 14.9427 11.531 14.8379L7.25565 11.2703C7.14339 11.1756 7.06278 11.0487 7.02466 10.9067C6.98654 10.7647 6.99274 10.6145 7.04242 10.4762C7.09211 10.3378 7.1829 10.218 7.30258 10.1329C7.42227 10.0478 7.56511 10.0014 7.7119 10Z"
      fill="#FFFFFF"
      {...props}
    />
  </svg>
);
