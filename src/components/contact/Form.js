import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'
import FormSocial from './FormSocial'
import FormSuccess from './FormSuccess'
import Refresh from '../../icons/Refresh'

const Wrapper = styled.div`
  padding: 2.5em 1.5em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    padding: 2.5em 3em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1.5em;
  }
`

const Header = styled.div`
  margin: 0 0 2em 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    margin: 0 0 4em 0;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1.5em;
  }
`

const Title = styled.h1`
  line-height: 1.15;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 1.866em;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    line-height: 1.15;
    font-size: 2.488em;
    grid-column: span 2;
  }
`

const FormContainer = styled(motion.form)`
  margin: 0 0 2em 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    grid-column: 5 / span 8;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.75em;
    max-width: 750px;
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.large}) {
    grid-column: 7 / span 6;
  }
`

const Submit = styled.button`
  transition: 0.3s background, 0.3s color;
  background: ${(props) => props.theme.colors.primary};
  padding: 0.5em 2em;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.reverseText};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.accent};
    color: white;
  }
  @media (hover: none) {
    background: ${(props) => props.theme.colors.primary} !important;
    color: ${(props) => props.theme.colors.reverseText} !important;
  }
`

const Reset = styled(motion.button)`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  position: absolute;
  top: 0.75em;
  right: 0.75em;
  z-index: 3;
  border-radius: 3px;
  svg {
    opacity: 1;
    transition: transform 0.5s, opacity 0.5s;
    fill: ${(props) => props.theme.colors.text};
  }
  &:hover {
    svg {
      opacity: 1;
      transform: rotate(360deg);
    }
  }
`

const Form = (props) => {
  const initialState = {
    name: '',
    email: '',
    message: '',
  }

  const [{ name, email, message }, setInputs] = useState(initialState)

  const [success, setSuccess] = useState(false)

  const clearState = () => {
    setInputs({ ...initialState })
  }

  function handleSuccess() {
    setSuccess(true)
    setTimeout(clearState(), 250)
  }

  const handleInputChange = (event) => {
    event.persist()
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  const handleSubmit = (event) => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', name, email, message }),
    })
      .then(handleSuccess)
      .catch((error) => alert(error))
    event.preventDefault()
  }

  const duration = 0.25

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0 },
    },
  }

  return (
    <Wrapper>
      <Header>
        <Title>Get In Contact</Title>
      </Header>
      <FormSocial />
      <AnimatePresence initial={false}>
        {success === false && (
          <FormContainer
            variants={variants}
            animate="enter"
            exit="exit"
            initial="initial"
            key="container"
            name="contact-form"
            data-netlify="true"
            data-netlify-honeypot="bot"
            role="form"
            onSubmit={handleSubmit}
          >
            <FormInput
              name="name"
              type="text"
              placeholder="Name"
              handleChange={handleInputChange}
              required
              value={name}
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              handleChange={handleInputChange}
              required
              value={email}
            />
            <FormTextArea
              name="message"
              placeholder="Your message"
              handleChange={handleInputChange}
              required
              value={message}
            />
            <input
              hidden
              name="bot"
              onChange={handleInputChange}
              autoComplete="nope"
            />
            <Submit type="submit">Send</Submit>
          </FormContainer>
        )}
        {success === true && (
          <FormSuccess
            variants={variants}
            animate="enter"
            exit="exit"
            key="success"
          >
            <Reset
              onClick={() => setSuccess(false)}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.25, delay: 0.75 }}
            >
              <Refresh />
            </Reset>
          </FormSuccess>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Form
