import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ isAuth, activateAuth }) => {
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
                      register({ variables }).then(activateAuth)
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
              <UserForm onSubmit={activateAuth} title='Log In' />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
