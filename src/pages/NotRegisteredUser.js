import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const variables = {
                input: {
                  email,
                  password
                }
              }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'Error in register!'

            return (
              <UserForm
                error={errorMsg}
                onSubmit={onSubmit}
                title='Register'
                disabled={loading}
              />
            )
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const variables = {
                input: {
                  email,
                  password
                }
              }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'Error in login!'

            return (
              <UserForm
                onSubmit={onSubmit}
                title='Log In'
                error={errorMsg}
                disabled={loading}
              />
            )
          }
        }
      </LoginMutation>
    </>
  )
}
