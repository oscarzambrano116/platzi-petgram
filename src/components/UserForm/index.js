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

  return (
    <FormContainer>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
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
