import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import BasicCard from '../components/BasicCard'
import { Typography } from '@mui/material'
import ClientCard from '../components/ClientCard'

const Clients = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        Patients
      </Typography>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <BasicCard>
          <ClientCard></ClientCard>
        </BasicCard>
        <BasicCard>Client2</BasicCard>
        <BasicCard>Client3</BasicCard>
        <BasicCard>Client4</BasicCard>
        <BasicCard>Client5</BasicCard>
        <BasicCard>Client6</BasicCard>
      </Grid>
    </>
  )
}

export default Clients
