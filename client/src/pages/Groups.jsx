import React, { memo, useEffect, useState } from 'react'
import {Box, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography} from '@mui/material'
import {Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackSpaceIcon, Menu as MenuIcon} from "@mui/icons-material"
import { matBlack } from '../constants/color';
import {useNavigate, useSearchParams} from "react-router-dom"
import {Link} from "../components/styles/StyledComponent"
import AvatarCard from "../components/shared/AvatarCard"
import {SampleChats} from "../constants/sampleData"

const Groups = () => {

  const chatId = useSearchParams()[0].get("group");
  console.log(chatId)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [groupName, setGroupName] = useState("")
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("")
  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  }
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false)
  }
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };
  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue)
  }
  useEffect(() => {
     setGroupName(`Group Name ${chatId}`)
     setGroupNameUpdatedValue(`Group Name ${chatId}`)

     return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
     }
  }, [chatId])
  
  const IconBtns =
   <> 
<Box
 sx={{
    display: {
      xs: "block",
      sm: "none",
      position: "fixed",
      right: "1rem",
      top: "1rem"
    },
  }}
>
   <IconButton onClick={handleMobile}> 
 
<MenuIcon />
 </IconButton>
</Box>

    <Tooltip title = "back">
    <IconButton
    sx={{
      position: "absolute",
      top: "2rem",
      left: "2rem",
      bgcolor: matBlack,
      color: "white",
      ":hover": {
        bgcolor: "rgba(0,0,0,0.7)"
      }
    }}
    onClick={navigateBack}
    >
      <KeyboardBackSpaceIcon/>
    </IconButton>
    </Tooltip>
  </>;

  const GroupName = <Stack
  direction={"row"}
  alignItems={"center"}
  justifyContent={"center"}
  spacing={"1rem"}
  padding={"3rem"}
  >
{isEdit ? (
<>
<TextField value={groupNameUpdatedValue} 
  onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
/>
<IconButton onClick={updateGroupName} > <DoneIcon/> </IconButton>
</>
) : <>
  <Typography variant='h4'>
{groupName}
  </Typography>
  <IconButton onClick={() => setIsEdit(true)}><EditIcon/></IconButton>
</>
}
  </Stack>
  return (
   <Grid container height={"100vh"}>
    <Grid
    item
    sx = {{
      display: {
        xs: "none",
        sm: "block",
      },
    }}
    sm={4} 
    bgcolor={'bisque'}
    >
<GroupList myGroups={SampleChats} chatId={chatId}  />
    </Grid>
    <Grid item xs = {12} sm = {8} sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      padding: "1rem 3rem",
    }}>
    { IconBtns}
    {groupName&& GroupName}
    </Grid>
    <Drawer
    sx={{
      display: {
        xs: "block",
        sm: "none",
      },
    }}
     open = {isMobileMenuOpen} onClick={handleMobileClose}>
   <GroupList w='50vw' myGroups={SampleChats} chatId={chatId}  />
    </Drawer>
   </Grid>
  )
}

const GroupList = ({w="100%", myGroups=[], chatId}) =>(
  <Stack width={w}>
    {
      myGroups.length > 0 ? (
        myGroups.map((group) => (<GroupListItem group={group} chatId={chatId} key={group._id} />))
      ): (
        <Typography textAlign={"center"} padding={"1rem"}>
          No Groups
        </Typography>
      )
    }
  </Stack>
);
const GroupListItem = memo(({group, chatId}) => {
const {name, avatar, _id} = group;
return(
 <Link
  to={`?group=${_id}`} 
onClick={(e) => {
  if(chatId === _id)e.preventDefault();
}}
>
<Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
  <AvatarCard avatar={avatar}/>
  <Typography>{name}</Typography>
</Stack>
</Link>
)
})
export default Groups








 