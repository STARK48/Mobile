const posts = [
    {
        id:'1',
        title:'untraveled road',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
        userId:'2',
        userName:'Linkin Park',
        userImgProfile:require('../assets/team_2.jpg'),
        userCategory:'Hotel',
        userCategoryIcon:'home-outline',
        likes:[],
        likeCount:'15',        
        comments:[
            {
            id:'457',
            userId:'154',
            userName:'Jordin Sparks',
            userImgProfile:require('../assets/team_4.jpg'),
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
            createdAt:''
        },
        {
            id:'459',
            userId:'154',
            userName:'Chris Brown',
            userImgProfile:require('../assets/team_1.jpg'),
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
            createdAt:''
        },
        {
            id:'458',
            userId:'154',
            userName:'Nail Horan',
            userImgProfile:require('../assets/team_3.jpg'),
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
            createdAt:''
        },
    ],
        commentCount:'4',
        postImage:'',
        createdAt:''

    },
    {
        id:'2',
        title:'In the end',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
        userId:'1',
        userName:'Sia',
        userImgProfile:require('../assets/team_1.jpg'),
        userCategory:'Motel',
        userCategoryIcon:'bed-outline',
        likes:[],
        likeCount:'78',        
        comments:[
            {
                id:'445',
                userId:'154',
                userName:'Jordin Sparks',
                userImgProfile:require('../assets/team_4.jpg'),
                body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
                createdAt:''
            }
        ],
        commentCount:'12',
        postImage:require('../assets/gts.jpg'),
        createdAt:''

    },
    {
        id:'2',
        title:'See you again',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
        userId:'1',
        userName:'Wiz khalifa',
        userImgProfile:require('../assets/team_3.jpg'),
        userCategory:'Navigator',
        userCategoryIcon:'earth-outline',
        likes:[],
        likeCount:'44',        
        comments:[],
        commentCount:'3',
        postImage:require('../assets/lanonana.jpg'),
        createdAt:''

    },
    {
        id:'4',
        title:'Never Say Never',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
        userId:'4',
        userName:'Justin Beiber',
        userImgProfile:require('../assets/team_4.jpg'),
        userCategory:'Hotel',
        userCategoryIcon:'home-outline',
        likes:[],
        likeCount:'16',        
        comments:[],
        commentCount:'4',
        postImage:'',
        createdAt:''

    },
    {
        id:'5',
        title:'I won\'t give Up',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.',
        userId:'8',
        userName:'Jason Mraz',
        userImgProfile:require('../assets/team_2.jpg'),
        userCategory:'Guide',
        userCategoryIcon:'person-outline',
        likes:[],
        likeCount:'89',        
        comments:[],
        commentCount:'5',
        postImage:require('../assets/lanonana.jpg'),
        createdAt:''

    },
]

export default posts