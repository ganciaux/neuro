import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

export default function MyListItem({ link, label, children }) {
  return (
    <List>
      <ListItem button component="a" href={link}>
        <ListItemIcon>
          {React.cloneElement(children, {
            sx: { color: (theme) => theme.palette.primary.light },
          })}
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            sx: { color: (theme) => theme.palette.primary.light },
          }}
          primary={label}
        ></ListItemText>
      </ListItem>
    </List>
  )
}
