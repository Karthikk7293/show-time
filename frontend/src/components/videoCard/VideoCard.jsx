import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { useAlert } from 'react-alert'


import './videoCard.css'
import CommentCard from '../comments/CommentCard'
import { addComment, getChannelDetails, likeAndDislikeContents,subcribeChannel } from '../../Redux/User/Actions/contentActions';
import { LIKE_CONTENT_RESET } from '../../Redux/User/Constants/contentContansts';
import { saveVideo } from '../../Redux/User/Actions/userActions';
import { LOADER_GIF_IMAGE } from '../../assets/icons';
import { CLEAR_USER_ERRORS } from '../../Redux/User/Constants/userConstants';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
function VideoCard({ content }) {
    const [like, setLike] = useState(null);
    const[subcribed,setSbscribed] = useState(false)
    const dispatch = useDispatch();
    const [userComment, setUserComment] = useState(null)
    const { like: likes, isUpdate, content: video, error, loading: load, message } = useSelector((state) => state.content)
    const { userDetails } = useSelector((state) => state.user)
    const { comment, success, loading } = useSelector((state) => state.singleContent)
    const { channel, error: channelError, loading: channelLoading,subscribe } = useSelector((state) => state.channelDetails)


    const alert = useAlert()
    if (video) {
        content = video
    }
    useEffect(() => {

        if (likes) {
            setLike(!like)
            alert.success(likes)
        }
        if (isUpdate) {
            dispatch({ type: LIKE_CONTENT_RESET })
        }
        if (success) {
            setUserComment("")
        }
        if (content) {

            if (content.likes.includes(userDetails?._id) && userDetails) {
                setLike(true)
            }
            dispatch(getChannelDetails(content.owner))
        }
        if(subscribe){
            alert.success(subscribe)
            
        }
       
        if (error || channelError) {
            alert.error(error)
            dispatch({type:CLEAR_USER_ERRORS})
        }
       
    }, [isUpdate,
        dispatch,
        like,
        content,
        success,
        userDetails,
        error, alert, likes, video, message,subscribe])

    const likeHandler = (e) => {
        e.preventDefault()
        dispatch(likeAndDislikeContents(content._id))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userComment) {
            dispatch(addComment(content._id, userComment))
        } else {
            alert.error("Please enter somthing")
        }
    }

    const saveHandler = (e) => {
        e.preventDefault()
        dispatch(saveVideo(content._id))
    }

    const [expanded, setExpanded] = useState(false);
    const [hide, setHide] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
        setHide(!hide);
    };
    const subcribeHandler = (e)=>{
        e.preventDefault()
        dispatch(subcribeChannel(content.owner))
    }
   
    return (
        <div>
            <div className="video-content">
                <video width="100%" poster={content && content.thumbnail.url} controls>
                    {content && <source src={content.content.url} />}
                    Your browser does not support the video tag.

                </video>
            </div>
            <div className="video-body ">
                <div className="icons ms-2 text-end d-flex justify-content-between">
                    <div className="d-flex">

                        <div className='d-flex '> <i className='text-primary text-uppercase'>views :</i><p className="mx-1">{content && content.likes.length}</p></div>
                        <div className='d-flex mx-2'> <i className='text-primary text-uppercase'>likes :</i><p className="mx-1">{content && content.likes.length}</p></div>
                    </div>
                    <div className='' >{loading && <i><img width={'20'} src={LOADER_GIF_IMAGE} alt="" /></i>}  <i className={like ? "like-button" : ""} onClick={likeHandler}><FavoriteRoundedIcon /></i> <i onClick={saveHandler}><BookRoundedIcon /></i></div>

                </div>
                <div className="video-title d-flex justify-content-between ">
                    <p className="text-white">{content && content.title}</p>

                </div>
                <hr />
                <div className="video-title d-flex justify-content-between ">
                    <div className="channel-avatar d-flex mx-1">
                        <Avatar alt="Name" src={channel?.avatar} />
                        <h4 className='my-auto mx-1 text-white'>{channel?.channel}</h4>
                    </div>
                    <div className="subscibe-btns">
                        { subcribed   ? <input type="submit" value='SUBSCRIBED' className='border-0 px-3 py-2 shadow' onClick={subcribeHandler} /> : <input type="submit" value='SUBSCRIBE' className='border-0 px-3 py-2 shadow' onClick={subcribeHandler} /> }
                        
                    </div>
                </div>
                <hr />
                <pre className='text-white text-wrap'>{content && content.description.split(" ").map((text) => {
                    let value = text.match(/#[\w]+/gm)
                    if (value) return <pre className='text-primary fw-500' style={{ cursor: "pointer" }} ><br /> {"\n" + value[0] + "\n"}</pre>
                    else return text + " "
                })}</pre>

                <div style={{cursor:"pointer"}} className="video-descriptions mx-2 text-muted">show more
                    {/* <p className='text-white '>Release date : {content && content.movie.release_date}</p> */}
                    {/* <p>Popularity : {content && content.movie.popularity}</p> */}
                </div>
                <hr />
                
            </div>

            <div className="comments ">
                <Container fluid>
                    <Row className=''>
                        <Col className='my-2' lg={11}>
                            <div className="user-comment">
                                <form action="" onSubmit={handleSubmit} className='d-flex justify-content-between'>
                                    <input type="text" value={userComment} onChange={((e) => setUserComment(e.target.value))} placeholder='please enter your comments...' className='w-100 mx-2 py-1 px-2 ' />
                                    <input type="submit" value="add comment" className='px-3 border-0  btn text-success rounded-0' />
                                </form>
                            </div>
                        </Col>
                        <Col className=' my-1' lg={12}>
                            <div className=' ' >

                                    {hide ? <p style={{cursor:"pointer"}}  onClick={handleExpandClick} className='m-0 text-muted'>show less</p> : <p style={{cursor:"pointer"}} onClick={handleExpandClick} className='m-0 text-muted'>show more</p>}
                                   
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                            
                                    { content?.comments.map((comment,index) => (
                                        <div key={index}>
                                            <CommentCard comment={comment} />
                                            
                                        </div>
                                    ))}

                                </Collapse>

                            </div>

                        </Col>
                        <div className="text-center">
                            {loading && <img width={"100"} src='https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_small.gif' alt='' />}
                        </div>


                    </Row>
                </Container>

            </div>

        </div>
    )
}

export default VideoCard