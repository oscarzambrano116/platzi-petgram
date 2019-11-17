import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import {
  FormContainer,
  Form,
  Title,
  Input,
  Button
} from './styles'

export const UserForm = ({
  onSubmit = () => null,
  title = ''
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
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type='email'
          placeholder='email'
          {...email}
        />
        <Input
          type='password'
          placeholder='password'
          {...password}
        />
        <Button>{title}</Button>
      </Form>
    </FormContainer>
  )
}
