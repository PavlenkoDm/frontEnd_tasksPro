import React from 'react';
import PropTypes from 'prop-types';

import sprite from 'assets/images/sprite.svg';

import { SvgStyled } from './svgIcon.styled';

const SvgIcon = ({
  svgName,
  size = '14px',
  variant,
  stroke = 'none',
  fill = 'none',
  isActive,
  ...rest
}) => {
  return (
    <SvgStyled
      width={size}
      height={size}
      stroke={stroke}
      fill={fill}
      variant={variant}
      isActive={isActive}
      {...rest}
    >
      <use href={sprite + `#${svgName}`} />
    </SvgStyled>
  );
};

SvgIcon.propTypes = {
  svgName: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
  fill: PropTypes.string,
  isActive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default SvgIcon;
