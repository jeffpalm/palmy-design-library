import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonBase = styled.button`
  background: ${(props) => {
    if (props.disabled) {
      switch (props.variant) {
        case 'filled':
          return props.theme.color.grey[500];
        default:
          return 'none';
      }
    }
    switch (props.variant) {
      case 'outlined':
        return 'none';
      case 'filled':
        return props.theme.color.primary.main;
      default:
        return 'none';
    }
  }};
  border: ${(props) => {
    if (props.disabled) return `1px solid ${props.theme.color.grey[400]}`;

    switch (props.variant) {
      default:
        return `1px solid ${props.theme.color.primary.main}`;
    }
  }};
  color: ${(props) => {
    if (props.disabled) return props.theme.color.grey[400];

    switch (props.variant) {
      case 'filled':
        return props.theme.color.text.primary;
      default:
        return props.theme.color.primary.main;
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case 'xs':
      case 'sm':
        return props.theme.spacing(0.5);
      case 'lg':
        return props.theme.spacing(0.75);
      case 'xl':
        return props.theme.spacing(1);
      default:
        return props.theme.spacing(0.5);
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case 'xs':
        return '0.75rem';
      case 'sm':
        return '0.9rem';
      case 'lg':
        return '1.25rem';
      case 'xl':
        return '1.5rem';
      default:
        return '1rem';
    }
  }};
  border-radius: ${(props) => props.theme.shape.borderRadius};
  transition: background 100ms ease-in-out, color 100ms ease-in-out,
    transform 100ms ease-in-out;
  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background: ${(props) => {
    if (props.disabled) {
      switch (props.variant) {
        case 'filled':
          return props.theme.color.grey[500];
        default:
          return 'none';
      }
    }
    switch (props.variant) {
      case 'filled':
        return 'none';
      default:
        return props.theme.color.primary.main;
    }
  }};
    color: ${(props) => {
    if (props.disabled) return props.theme.color.grey[400];
    switch (props.variant) {
      case 'filled':
        return props.theme.color.primary.main;
      default:
        return props.theme.color.text.primary;
    }
  }};
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: ${(props) => (props.fullWidth ? 'none' : 'scale(1.1)')};
  }
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`;

/**
 * Styled abstraction of default button element
 */

export const Button = ({ label, ...props }) => {
  return <ButtonBase data-testid='button' {...props}>{label}</ButtonBase>;
};

Button.propTypes = {
  /**
   * Text to display in the button
   */
  label: PropTypes.string.isRequired,
  /**
   * Preset variants for the button
   */
  variant: PropTypes.oneOf(['outlined', 'filled']),
  /**
   * Size presets
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
   * Button will take up full width of the container
   */
  fullWidth: PropTypes.bool,
  /**
   * Toggle button interactivity
   */
  disabled: PropTypes.bool,
  /**
   * Function to fire when button clicked
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: 'Default',
  variant: 'outlined',
  size: 'md',
  fullWidth: false,
  disabled: false
};
