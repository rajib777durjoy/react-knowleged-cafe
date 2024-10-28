
// {
//     "id": 1,
//     "cover_title": "Connection Across Borders",
//     "timeing-duration": "Instant",
//     "description": "Social media enables people to connect with friends and family across geographical distances in real-time."
// }

const Post = ({item}) => {
   
    const {id,cover_title,timeing_duration,description}=item
    return (
        <div>
            <li>{id}</li>
             {
              
             }
            <div className="flex justify-between w-[100%]">
              <img src="" alt="" />
              <button>Bookmark</button>
            </div>
            <li>{cover_title}</li>
        </div>
    );
};

export default Post;