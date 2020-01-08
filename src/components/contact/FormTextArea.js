import React from 'react'
import styled from '@emotion/styled'

const TextArea = styled.textarea`
  color: ${props => props.theme.colors.text};
  transition: border 0.3s;
  width: 100%;
  margin: 0 0 1em 0;
  height: 300px;
  line-height: 1.5;
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: 3px;
  padding: 0.5em;
  &:focus {
    border-color: ${props => props.theme.colors.accent};
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-column: 1 / -1;
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

const FormTextArea = ({ name, placeholder, value, handleChange, required }) => (
  <>
    <Label htmlFor={name}>{placeholder}</Label>
    <TextArea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      type="text"
      required={required}
    />
  </>
)

export default FormTextArea
