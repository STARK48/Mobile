import {gql} from '@apollo/client';

export const GET_ALL_POSTS = gql`{
    getPosts{
    id
    title
    body
    createdAt
    likeCount
    commentCount
    postBy{
      id
      userName      
      profileImg
      category{id categoryUserName categoryUserIcon}
    }
    
    comments{body commentBy{id userName profileImg}}
    
  }
  }`

  export const GET_ALL_PLACES = gql`{
    getPlaces{ 
      id
      placeName
      about
      coverImage
      category{categoryPlaceName categoryPlaceIcon}
      region{regionName}
      createdAt
      likeCount
  
      }
  }
  
  `

  export const GET_CATEGORY_PLACES = gql`{
    getCategoryPlace{
    id
    categoryPlaceName
    categoryPlaceIcon
    createdAt
    createdBy      
    
  }
  }`

export const GET_ALL_EVENTS = gql`{
  getEvents{ 
  id
  eventName
  about
 	 coverImage
    category{categoryEventName categoryEventIcon}
    eventDate
    place{placeName coverImage}
    postBy{userName profileImg category{categoryUserName categoryUserIcon}}
    likeCount
    createdAt
  
  }
}`
  