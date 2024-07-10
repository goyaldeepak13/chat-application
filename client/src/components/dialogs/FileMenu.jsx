import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({anchorEl}) => {
  return (
    <Menu anchorEl={anchorEl} open = {false}>
        <div
        style={{
            width: "10rem",
        }}
        >
        Hello
        </div>
    </Menu>
  )
}

export default FileMenu