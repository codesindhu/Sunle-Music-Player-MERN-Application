import React, { useContext, useEffect, useRef, useState } from 'react';
import '../assets/scss/AddMusic.scss';
import { Add, Image, MusicNoteTwoTone } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { ThemeContext } from "../../api/Theme";
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import musicDB from "../../db/music";

function AddMusic() {
    const useStyle = useContext(ThemeContext);
    const fileRef = useRef();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedMusic, setSelectedMusic] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const history = useHistory(); // Initialize useHistory

    const selectImage = () => {
        fileRef.current.click();
    }

    useEffect(() => {
        fileRef.current.onchange = (e) => {
            setSelectedImage(e.target.files[0].name);
        }
    }, []);

    let id = musicDB.length ? musicDB[musicDB.length - 1].id + 1 : 0;

    const handleMusicSelection = (e) => {
        setSelectedMusic(e.target.files[0].name);
    }

    const handleAddMusic = () => {
        const newMusic = {
            id: id,
            name: document.getElementById("name").value,
            author_name: document.getElementById("artist").value,
            img: selectedImage,
            lang: document.getElementById("language").value,
            timesPlayed: 0,
            musicName: selectedMusic,
            attribution: {
                song: document.getElementById("name").value,
                musicBy: "Your Music Source",
                download: null,
                stream: null
            }
        };
        musicDB.push(newMusic); // Update musicDB directly
        setSuccessMessage('Music added successfully.'); // Set success message
        setTimeout(() => {
            history.push('/home'); // Redirect to home page after 2 seconds
        }, 2000);
    }

    return (
        <form style={useStyle.component} className={"AddMusic"}>
            <div className="add-music-sub-container">
                <div className="d1">
                    <Button onClick={selectImage} style={{ backgroundColor: useStyle.subTheme, width: "200px", height: "200px" }} variant={"contained"} >
                        <Image titleAccess={"Select a music cover"} style={{ color: "#f0f0f0", width: "150px", height: "150px" }} />
                    </Button>
                    <input ref={fileRef} accept="image/*" type="file" hidden id={"music-img"} />
                    <p>{selectedImage}</p>
                    <Button onClick={selectImage} style={{ backgroundColor: useStyle.subTheme, width: "200px", height: "200px" }} variant={"contained"} >
                        <MusicNoteTwoTone titleAccess={"Select a music"} style={{ color: "#f0f0f0", width: "150px", height: "150px" }} />
                    </Button>
                    <input id="music-file" accept="audio/*" hidden type="file" onChange={handleMusicSelection} />
                    <select id="language">
                        <option value="0">Select Language</option>
                        <option value="1">Hindi</option>
                        <option value="2">English</option>
                        <option value="3">Telugu</option>
                    </select>
                </div>
                <div className="d2">
                    <div>
                        <input type="text" value={"ID: " + id} disabled />
                        <input type="text" placeholder={"Music Name"} id={"name"} />
                        <input type="text" placeholder={"Artist Name"} id={"artist"} />
                        <Button style={{ backgroundColor: useStyle.theme }} variant={"contained"} endIcon={<Add />} onClick={handleAddMusic}>
                            Add
                        </Button>
                    </div>
                    {successMessage && <p>{successMessage}</p>} {/* Display success message */}
                    <div className={"preview"}>
                        <h3>Preview</h3>
                        <p>Music Cover: {selectedImage}</p>
                        <p>Music Name: {selectedMusic}</p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddMusic;
