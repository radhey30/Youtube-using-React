import React from 'react'

export default function NavigationTab({ text , active}) {
  return (
    <div className={active ? "navigation-tab active" : "navigation-tab"} tabIndex={0}>
      {text}
    </div>
  )
}
