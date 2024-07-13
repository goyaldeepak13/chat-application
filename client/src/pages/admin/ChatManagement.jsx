import React, { useState , useEffect} from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { dashboardData } from '../../constants/sampleData'
import { Avatar, Stack } from '@mui/material'
import {transformImage}from "../../lib/features"
import AvatarCard from "../../components/shared/AvatarCard"

const columns = [
  {
      field: "id",
      headerName: "ID",
      headerClassName: "table-header",
      width: 100,
},
{
  field: "avatar",
  headerName: "Avatar",
  headerClassName: "table-header",
  width: 150,
  renderCell: (params) => ( // we are extracting url from params and then showing the avatar        
    <AvatarCard avatar = {params.row.avatar}/>
  )
},
{
  field: "name", 
  headerName: "Name",
  headerClassName: "table-header",
  width: 300,
},
{
  field: "totalMembers",
  headerName: "Total Members",
  headerClassName: "table-header",
  width: 120,
},
// {
//   field: "members",
//   headerName: "Members",
//   headerClassName: "table-header",
//   width: 200,
//   renderCell: (params) => <AvatarCard max={100} avatar={params.row.members}/>
// },

{
  field: "members",
  headerName: "Members",
  headerClassName: "table-header",
  width: 200,
  renderCell: (params) => <AvatarCard avatar={params.row.members.map(member => member.avatar)} />,
},
{
  field: "totalMessages",
  headerName: "Total Messages",
  headerClassName: "table-header",
  width: 120,
},
{
field: "creator",
headerName: "Created By",
headerClassName: "table-header",
width: 200,
renderCell: (params) => (
  <Stack direction= "row" alignItems= "center" spacing={"1rem"} > 
  <AvatarCard avatar={[params.row.creator.avatar]} />
  <span>{params.row.creator.name}</span>

  </Stack>

)
},

// {
//   field: "creator",
//   headerName: "Created By",
//   headerClassName: "table-header",
//   width: 200,
//   renderCell: (params) => (
//     <Stack direction="row" alignItems="center" spacing="1rem">
//       <AvatarCard avatar={[params.row.creator.avatar]} />
//       <span>{params.row.creator.name}</span>
//     </Stack>
//   ),
// },

]
const ChatManagement = () => {
  const [rows,setRows] = useState([])


  useEffect(() => {
    setRows(
      dashboardData.chats.map((chat) => ({
        ...chat,
        id: chat._id,
        avatar: chat.avatar.map((img) => transformImage(img, 50)),
        members: chat.members.map((member) => ({
          ...member,
          avatar: transformImage(member.avatar, 50)
        })),
        creator: {
          name: chat.creator.name,
          avatar: transformImage(chat.creator.avatar, 50),
        },
      }))
    );
  }, []);

// useEffect(() => { 
//   setRows(
//     dashboardData.chats.map((i) => ({
//       ...i,
//       id: i._id,
//       avatar: i.avatar.map((i) => transformImage(i, 50)),
//       members: i.members.map((i) => transformImage(i.avatar, 50)),
//       creator: {
//         name: i.creator.name,
//         avatar: transformImage(i.creator.avatar, 50)
     
//       }

//     }

//     ))
//   )
// },[]);
 

  return (
    <AdminLayout>
       <Table heading={"All chats"} columns={columns} rows={rows}/>
    </AdminLayout>
  )
}


export default ChatManagement








 