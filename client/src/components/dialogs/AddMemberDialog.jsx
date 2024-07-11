import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import UserItem from "../shared/UserItem"
import { sampleUsers } from '../../constants/sampleData'

const AddMemberDialog = ({addMember, isLoadingAddMember, chatId}) => {
 
    const [members, setMembers] = useState(sampleUsers)
    const [selectedMembers, SetSelectedMembers] = useState([])
  
    const selectMemberHandler = (id) => { 
  
      SetSelectedMembers((prev) =>prev.includes(id)
      ?prev.filter((currentElement) => currentElement !== id)
      : [...prev, id])
    };
    
 

const addMemberSubmitHandler = () => {
    closeHandler()
}
const closeHandler = () => {
    SetSelectedMembers([]);
    setMembers([]);
};

  return (
     <Dialog open onClose={closeHandler}>
<Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
    <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

    <Stack spacing={"1rem"}> 

{
   members.length > 0? ( members.map(i => (
        <UserItem key={i._id} user={i} handler={selectMemberHandler} 
            isAdded = {selectedMembers.includes(i._id)}
        />
    ))) : <Typography textAlign={"center"}>No friends</Typography>
}
    </Stack>

<Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
    <Button onClick={closeHandler} color='error'>Cancel</Button>
    <Button 
    onClick ={addMemberSubmitHandler} 
    variant='contained'
     disabled ={isLoadingAddMember}
     >Submit Changes</Button>

</Stack>

</Stack>


     </Dialog>
  )
}

export default AddMemberDialog