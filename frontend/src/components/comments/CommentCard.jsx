import React, { useEffect, useState } from 'react'
import './comments.css'
import Avatar from '../../components/icons/Avatar'
import { USER_AVATAR } from '../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Redux/User/Actions/adminAction';



function CommentCard({ content, comment }) {

    const [commentedUser, setCommentedUser] = useState(null)
    const { loading, allUsers } = useSelector((state) => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        if (allUsers) {
            
            setCommentedUser(allUsers.filter((user) => user._id === comment?.user))
        }
        dispatch(getAllUsers())
    }, [dispatch])
console.log(commentedUser);
    return (
        <div className={content ? `comment d-flex m-0 py-0 px-3` : "comment d-flex justify-content-between m-0 p-0"}>
            <div className="user-img me-2">
                <Avatar image={ commentedUser? commentedUser[0].avarar?.url : USER_AVATAR} />
            </div>
            <div className="comment-content ms-2 overflow-hidden text-start">
                <p className='m-0'>name</p>
                {!content ? <p className='text-truncate'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fugit, ratione ducimus, magni aut nisi, provident sint veritatis fuga consectetur nobis illo quae?
                    Porro sed asperiores excepturi rerum libero sapiente distinctio.</p> : <p>subscribed on : january 02 2021 </p>}
            </div>
        </div>
    )
}

export default CommentCard