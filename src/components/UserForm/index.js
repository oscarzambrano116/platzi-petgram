import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import {
  FormContainer,
  Form,
  Title,
  Input,
  Button,
  Error
} from './styles'

export const UserForm = ({
  onSubmit = () => null,
  title = '',
  error = '',
  disabled = false
}) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input
          type='email'
          placeholder='email'
          disabled={disabled}
          {...email}
        />
        <Input
          type='password'
          placeholder='password'
          disabled={disabled}
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </FormContainer>
  )
}
