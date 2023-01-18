import React from "react";
import { Box, ListItem, List, ListItemText, ListItemIcon, TextField, Stack, Button, FormGroup, Grid } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";

let nextNote=0

export default function Lists(){
    const [note, setNote] = useState('');
    const [list, setList] = useState([]);

return(
<Box sx={{width:'400px'}} >
    <List>
        <ListItem>
            <ListItemIcon>
                <KeyboardArrowRightIcon/>
            </ListItemIcon>
            <ListItemText primary='HTML is easy' />
        </ListItem>
        <ListItem>
        <ListItemIcon>
                <KeyboardArrowRightIcon/>
            </ListItemIcon>
            <ListItemText primary='Browser can execute only JavaScript' />
        </ListItem>
        <ListItem>
        <ListItemIcon>
                <KeyboardArrowRightIcon/>
            </ListItemIcon>
            <ListItemText primary='GET and POST are the most important methods of HTTP protocol' />
        </ListItem>
        <TextField fullWidth label='a new note' variant='outlined' size='small' value={note}  onChange={e => setNote(e.target.value)} required />
        <Button type='submit' variant='outlined' color='primary' onClick={() => {
        setNote(''); setList([...list,{ id: nextNote++, name: note }]);}} >
            Submit
        </Button> <br></br>
       
        <ListItemIcon>
        <dl>        
        {list.map(list => (
          <dt key={list.id}><KeyboardArrowRightIcon/>{list.name}</dt>
        ))}
           </dl>    
        </ListItemIcon>
        
    </List>
    <form action="/somewhere" >
    <FormGroup>
        
    <Stack direction="row" spacing={4} name='note' sx={{ m: 1 }}>
        
        
    </Stack>
    </FormGroup>
    </form>
    
    <Grid container>
        <Grid Item>
            <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid>
        <Grid Item>
            <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid Item>
            <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid Item>
            <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
    </Grid>
</Box>


)

}