import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


import UserDashboardLayout from '../components/layouts/UserDashboardLayout'
import SelectMovieSubScreen from '../components/selectMovie/SelectMovieSubScreen';
import './pages.css'
import SelectedMovie from '../components/selectMovie/SelectedMovie';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const currencies = [

    {
        value: 'language=en-US',
        label: 'ENGLISH',
    },
    {
        value: 'language=hi&region=IN',
        label: 'HINDI',
    },
    {
        value: 'language=ml&region=IN',
        label: 'MALAYALAM',
    },
    {
        value: 'language=ta&region=IN',
        label: 'TAMIL',
    },
    {
        value: 'language=te&region=IN',
        label: 'TELUGU',
    },
    {
        value: 'language=ka&region=IN',
        label: 'KANADA',
    },
    {
        value: 'JPY',
        label: 'PANJABI',
    },
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};



function SelectMovieScreen() {

    const [value, setValue] = useState(0);

    const [language, setLanguage] = useState("");
    const { movieDetails, movie } = useSelector((state) => state.movie)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value)
    };
    return (
            <Row>
                <Col className='select-movie-main' lg={11}>
                    <div className="select-movie-categories-list d-flex text-white" style={{ overflowX: "scroll" }}>
                        <Box sx={{ width: '100%' }}>
                            <Box className='mx-auto' sx={{ maxWidth: { xs: 320, sm: 480, md: 700, lg: 860 } }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                    className='my-3 mx-5'

                                >
                                    <Tab label="UP COMMING" className='bg-white text-primary  rounded mx-2' />
                                    <Tab label="TRENDING" className='bg-white text-primary rounded mx-2' />
                                    <Tab label="TOP RATED" className='bg-white text-primary rounded mx-2' />
                                    <Tab label="LATEST" className='bg-white text-primary rounded mx-2' />
                                    <Tab label="POPULAR" className='bg-white text-primary rounded mx-2' />
                                    <Tab label="NOW PLAYING" className='bg-white text-primary rounded mx-2' />
                                </Tabs>
                                <div className="select-movie-button d-flex justify-content-between">
                                    <div className='my-auto'>
                                        <Link to={'/content/upload/video'}> <button className='border-0   bg-danger text-white shadow-3 px-4 py-2 mx-4'>back </button></Link>
                                        {movie && <SelectedMovie movieDtails={movieDetails} />}
                                    </div>
                                    <div className=' mx-5 '>
                                        <TextField
                                            id="standard-select-currency"
                                            select
                                            label=" language"
                                            onChange={handleChangeLanguage}
                                            helperText="Please select your language"
                                            variant="standard"
                                            className=' standard-select-currency '

                                        >
                                            {currencies.map((option) => (
                                                <MenuItem className='' key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>

                                </div>
                            </Box>

                            <TabPanel value={value} index={0}>
                                <SelectMovieSubScreen category={"upcoming"} language={language ? language : ""} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <SelectMovieSubScreen category={"trending"} language={language ? language : ""} />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <SelectMovieSubScreen category={"top_rated"} language={language ? language : ""} />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <SelectMovieSubScreen category={"latest"} language={language ? language : ""} />
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <SelectMovieSubScreen category={"popular"} language={language ? language : ""} />
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <SelectMovieSubScreen category={"now_playing"} language={language ? language : ""} />
                            </TabPanel>

                        </Box>
                    </div>

                </Col>

            </Row>
    )
}

export default SelectMovieScreen