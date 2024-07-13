 
import React, {useEffect, useState} from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { dashboardData } from '../../constants/sampleData';
import { fileFormat, transformImage } from '../../lib/features';
import { Avatar, Box, Stack } from '@mui/material';
import moment from 'moment';
import Table from '../../components/shared/Table'
import RenderAttachment from"../../components/shared/RenderAttachment"

const columns = [
  {
      field: "id",
      headerName: "ID",
      headerClassName: "table-header",
      width: 200,
},
{
  field: "attachments",
  headerName: "Attachments",
  headerClassName: "table-header",
  width: 200,
  renderCell: (params) =>{  // we are extracting url from params and then showing the avatar
  const {attachments} = params.row;
  return attachments.length > 0 ? attachments.map((i) => {
    const url = i.url;
    const file = fileFormat(url);
    return ( 
     <Box>
      <a href={url}
      download
      target='_blank'
      style = {{
        color: "black",
      }}
      >
        {RenderAttachment(file, url)}
      </a>
    </Box>
    );
  }):  "No attachments"
    
},
},


{
  field: "content",
  headerName: "Content",
  headerClassName: "table-header",
  width: 300,
},
{
  field: "sender",
  headerName: "Sent By",
  headerClassName: "table-header",
  width: 200,
  renderCell: (params) => ( 
  //   <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ width: '100%' }}>
  //     <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
  //     <span>{params.row.sender.name}</span>
  // </Stack>
  <Box display="flex" alignItems="center" justifyContent="center" sx={{ height: '100%', width: '100%' }}>
  <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} sx={{ marginRight: 1 }} />
  <span>{params.row.sender.name}</span>
</Box>
  )
},
{
  field: "chat",
  headerName: "Chat",
  headerClassName: "table-header",
  width: 220,
},
{
  field: "groupChat",
  headerName: "Group Chat",
  headerClassName: "table-header",
  width: 220,
},
{
  field: "createdAt",
  headerName: "Time",
  headerClassName: "table-header",
  width: 250,
},

]


const MessageManagement = () => {

const [rows, setRows] = useState([]);

 useEffect(() => {
    setRows(
      dashboardData.messages.map((i) => (
        {
          ...i,
          id: i._id,
          sender:{
            name: i.sender.name,
            avatar: transformImage(i.sender.avatar, 50)
          },
          createdAt: moment(i.createdAt).format("MMMM Do YYYY, h:mm:ss")
        }
      ))
    )
  
 }, [])
 

  return (
   <AdminLayout>
     <Table heading={"All Messages"} columns={columns} rows={rows}

      rowHeight={150}
     />
   </AdminLayout>
  )
}

export default MessageManagement