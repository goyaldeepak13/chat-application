export const SampleChats = [
    {
        avatar: ["https://hips.hearstapps.com/hmg-prod/images/index-avatar-1665421955.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*"],
        name: "Deepak Goyal",
        _id: "1",
        groupChat: false,
        members: ["1", "2"]
    },
    {
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s",],
        name: "Honey Mittal",
        _id: "2",
        groupChat: true,
        members: ["1", "2"]
    },


]

export const sampleUsers = [
    {
        avatar: "https://hips.hearstapps.com/hmg-prod/images/index-avatar-1665421955.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",

        name: "Deepak Goyal",
        _id: "1",
    },

    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s",

        name: "Honey Mittal",
        _id: "2",
    }
]


export const sampleNotifications = [
    {
        sender: {
            avatar: "https://hips.hearstapps.com/hmg-prod/images/index-avatar-1665421955.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",

            name: "Deepak Goyal",
        },
        _id: "1",
    },

    {
        sender: {
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s",

            name: "Honey Mittal",
        },
        _id: "2",
    }
]



export const sampleMessage = [
    {
        attachments: [

        ],
        content: "BJP hatao Desh bachao",
        _id: "dfgjhkhj",
        sender: {
            _id: "user._id",
            name: "deepak"
        },
        chat: "chatId",
        createdAt: "2024-07-09T11:22:57.225Z"
    },

    {
        attachments: [
            {
                public_id: "sdfghj2hj",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            },
        ],
        content: "",
        _id: "dfghjkjjhj",
        sender: {
            _id: "sdfghjk",
            name: "deepak2"
        },
        chat: "chatId",
        createdAt: "2024-07-09T11:22:57.225Z"
    }
]

 

export const dashboardData = {
    users: [
      {
        name: "deepansh",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        _id: "1",
        username: "deepakgoyal13",
        friends: 20,
        groups: 5,
      },
      {
        name: "dhruvDon",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        _id: "2",
        username: "dhruvDon11",
        friends: 20,
        groups: 5,
      },
    ],

    chats: [
        {
            name: "Goyal family",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupChat: false,
            members:[{_id: "1", avatar:"https://www.w3schools.com/howto/img_avatar.png"}, {_id: "2", avatar:"https://www.w3schools.com/howto/img_avatar.png"},],
            totalMembers: 2,
            totalMessages: 20,
            creator:{
                name: "deepak",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
             
          },

          {
            name: "buisness",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupChat: false,
            members:[{_id: "1", avatar:"https://www.w3schools.com/howto/img_avatar.png"}, {_id: "2", avatar:"https://www.w3schools.com/howto/img_avatar.png"},],
            totalMembers: 2,
            totalMessages: 20,
            creator:{
                name: "shikhar",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
             
          },

    ]
  };
  


  