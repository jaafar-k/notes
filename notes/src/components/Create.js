import React from "react";
import { useState } from 'react'
import Typography from "@mui/material/Typography";
import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup, TextField, InputAdornment, Box, MenuItem } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


export default function Create (){
  let [Country, setCountry] = useState('');
  const handleChange = (event) => {
    setCountry(event.target.value);}
    console.log({Country})
return( 
    <div> 
        <Typography variant="h1" align="center">
Mui example
</Typography>;
<Stack direction="row" alignItems="center" spacing={10}>
        <Button variant='contained' color="success" >Text</Button>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
        <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
     
    
    <ButtonGroup 
    variant="contained" 
    color="primary"
    aria-label='aligment button group'
    >
        <Button  onClick={() => alert('left clicked')}>left </Button>
        <Button  onClick={() => alert('center clicked')}> center </Button>
        <Button  onClick={() => alert('right clicked')}> right </Button>
    </ButtonGroup>
    </Stack><br></br>
    <Stack direction='row'>
        <ToggleButtonGroup
          aria-label='text formatting'>
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underline'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack><br></br>
      <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
          <TextField label='Name' />
          <TextField label='user' helperText="don't share the name" />
          <TextField label='Password' type='password' />
          <TextField label='Read only' InputProps={{readOnly: true}} />
        </Stack >
        <Stack spacing={4} direction='row'>
        <TextField label='Amount ' InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}} />
        <TextField label='Weight ' InputProps={{startAdornment:<InputAdornment position='end'>kg</InputAdornment>}} />

        </Stack>
        < Box width='250px'>
          <TextField label='Select Country' select value={Country} onChange={handleChange} fullWidth>
            <MenuItem value='LEB'>Lebanon</MenuItem>
            <MenuItem value='USA'>America</MenuItem>
            <MenuItem value='IRN'>Iran</MenuItem>
          </TextField>

        </Box>
      </Stack>

     </div>
     )
}
