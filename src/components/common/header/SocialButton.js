import React from 'react'
import SocialLogin from 'react-social-login'

const Sample = ({ children, triggerLogin, ...props }) => (
  <div className='cursor-pointer menu-link' onClick={triggerLogin} {...props}>
    { children }
  </div>
)

export default SocialLogin(Sample)
