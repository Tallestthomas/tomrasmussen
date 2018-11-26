import React from 'react';
import {
  Transition,
  config
} from 'react-spring';

const TransitionWrapper = ({ children }) => (
  <Transition
    items={children}
    keys={child => child}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
    config={config.slow}
    unique
  >
    {
      show => show && (props => (
        <div style={props}>{children}</div>
        ))
    }
  </Transition>
)

export default TransitionWrapper;
