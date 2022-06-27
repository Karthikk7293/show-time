import React, { useEffect, useState } from 'react'
import './comments.css'
import Avatar from '../../components/icons/Avatar'
import { USER_AVATAR } from '../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Redux/User/Actions/adminAction';
import moment from 'moment';


function CommentCard({ content, comment }) {

    const [commentedUser, setCommentedUser] = useState(null)
    const { loading, allUsers } = useSelector((state) => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        if (allUsers && comment) {
            const [user] = allUsers.filter((user) => user._id === comment.user)
            setCommentedUser(user)
        }
        dispatch(getAllUsers())
    }, [dispatch, comment])

    return (
        <div className={content ? `comment d-flex m-0 py-0 ` : "comment   m-0 p-0 "}>
            <div className="user-img  d-flex " style={{fontFamily:"sans-serif"}}>
                {commentedUser && <Avatar className="border-0" image={commentedUser ? commentedUser?.avatar?.url : USER_AVATAR} />}
                <div className="comment-content w-100  d-flex justify-content-between text-white" style={{ fontSize: "13px", fontWeight: "2px" }}>
                    <p className='mx-2 my-auto'>{commentedUser && commentedUser?.name}</p>
                    <span className='text-success' style={{ fontSize: "8px" }}>{comment && moment(comment.createdAt).format("lll")}</span>
                </div>
            </div>
            <div className='text-white'>
                {comment && <p  className='text-truncate mt-2 mx-2 p-0 '>{comment?.comment}</p>}
            </div>
            <hr className='bg-info m-0 p-0' />
        </div>
    )
}

export default CommentCard