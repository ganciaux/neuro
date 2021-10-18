import * as React from 'react'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import { styled } from '@mui/system'

const MyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.dark,
}))

export default function ClientCard() {
  return (
    <>
      Client
      <MyButton variant="contained" color="secondary" startIcon={<EditIcon />}>
        Modifier
      </MyButton>
    </>
  )
}
