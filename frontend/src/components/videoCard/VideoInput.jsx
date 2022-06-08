import axios from 'axios';
import React from 'react';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }
    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
        console.log(event.target.files[0]);


    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        const { selectedFile } = this.state;



        console.log(selectedFile);
        formData.append('inputFile', selectedFile);
         
        const config ={
            headers:{
               " Content-Type": "multipart/form-data"
            }
        }

        const {data} = await axios.post('/api/content/video',selectedFile,config)
    };

    render() {
        return (
            < div >
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Upload a file: <br /><br />
                        <input type="file" name="file" accept="video/mp4,video/x-m4v,video/*" onChange={this.onChangeHandler} />
                    </label>
                    <br /><br />
                    <button type="submit">
                        Upload
                    </button>
                </form >
            </div >
        );
    }
}