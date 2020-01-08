import React from 'react'
import styled from '@emotion/styled'

const Input = styled.input`
  width: 100%;
  transition: border 0.3s;
  border-bottom: 1px solid ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.text};
  padding: 0 0 0.25em;
  font-size: 1em;
  margin: 0 0 1.25em 0;
  &:focus {
    border-color: ${props => props.theme.colors.accent};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 50000s ease-in-out 0s,
      color 5000s ease-in-out 0s;
  }
`
const Label = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const FormInput = ({
  name,
  placeholder,
  value,
  handleChange,
  type,
  required,
}) => (
  <>
    <Label htmlFor={name}>{placeholder}</Label>
    <Input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      type={type}
      required={required}
    />
  </>
)

export default FormInput
