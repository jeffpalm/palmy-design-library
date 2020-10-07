import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxBase = styled.label`
  display: inline-flex;
  cursor: pointer;
  position: relative;

  & > span {
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => {
    switch (props.color) {
      case 'primary':
        return props.theme.color.primary.main;
      case 'secondary':
        return props.theme.color.secondary.main;
      default:
        return props.theme.color.text.primary;
    }
  }};
    font-size: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '0.75rem';
      case 'lg':
        return '1.5rem';
      default:
        return '1rem';
    }
  }};
    padding: ${(props) => {
    switch (props.size) {
      case 'sm':
        return props.theme.spacing(0.3, 0.25);
      case 'lg':
        return props.theme.spacing(0.4, 0.25);
      default:
        return props.theme.spacing(0.5, 0.25);
    }
  }};
  }

  & > input {
    height: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '1rem';
      case 'lg':
        return '2rem';
      default:
        return '1.5rem';
    }
  }};
    width: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '1rem';
      case 'lg':
        return '2rem';
      default:
        return '1.5rem';
    }
  }};
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: ${(props) => {
    switch (props.color) {
      case 'primary':
        return `1px solid ${props.theme.color.primary.main}`;
      case 'secondary':
        return `1px solid ${props.theme.color.secondary.main}`;
      default:
        return `1px solid ${props.theme.color.text.primary}`;
    }
  }};
    border-radius: ${(props) => props.theme.shape.borderRadius};
    outline: none;
    transition-duration: 200ms;
    background: none;
    cursor: pointer;
  }

  & > input:checked {
    background-color: ${(props) => {
    switch (props.color) {
      case 'primary':
        return props.theme.color.primary.main;
      case 'secondary':
        return props.theme.color.secondary.main;
      default:
        return props.theme.color.text.primary;
    }
  }};
  }
  & > input:checked + span::before {
    content: '\u2714';
    display: block;
    text-align: center;
    color: ${(props) => {
    switch (props.color) {
      case 'primary':
      case 'secondary':
        return props.theme.color.text.primary;
      default:
        return props.theme.color.background.main;
    }
  }};
    position: absolute;
    left: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '0.5rem';
      case 'lg':
        return '0.7rem';
      default:
        return '0.6rem';
    }
  }};
    top: ${(props) => {
    switch (props.size) {
      case 'sm':
      case 'lg':
        return '0.1rem';
      default:
        return '0.2rem';
    }
  }};
  }
  & > input:active {
     border: ${(props) => {
    switch (props.color) {
      case 'primary':
        return `2px solid ${props.theme.color.primary.main}`;
      case 'secondary':
        return `2px solid ${props.theme.color.secondary.main}`;
      default:
        return `2px solid ${props.theme.color.background.main}`;
    }
  }};
  }
`;

/**
 * Styled abstraction of default input checkbox
 */

export const Checkbox = ({ label, checked, ...props }) => {
  return (
    <CheckboxBase data-testid='checkbox' {...props}>
      <input type='checkbox' checked={checked} />
      <span>{label}</span>
    </CheckboxBase>
  );
};

Checkbox.propTypes = {
  /**
   * Label to display next to checkbox
   */
  label: PropTypes.string,
  /**
   * Determines with Checkbox is checked or not
   */
  checked: PropTypes.bool.isRequired,
  /**
   * Color of component. Supports theme colors.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * Callback fired when the state is changed.
   *
   *Signature:
   *function(event: object) => void
   *event: The event source of the callback. You can pull out the new checked state by accessing event.target.checked (boolean).
   */
  onChange: PropTypes.func,
  /**
   * Changes size of checkbox
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Checkbox.defaultProps = {
  checked: false,
  color: 'default',
  size: 'sm'
};
