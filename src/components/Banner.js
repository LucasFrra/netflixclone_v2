import React, { useRef } from 'react';
import { useState , useEffect} from "react";
import { Link } from 'react-router-dom';
import "./Banner.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import requests from "../config/Requests";
import axios from "axios";
import QuickView from './QuickView';

function Banner() {
    const [movie, setMovie] = useState([]);
    const [popUp, setPopUp] = useState(false);

    function handleClickPopup(){
        popUp ? setPopUp(false) : setPopUp(true);
    }

    const renderAfterCalled = useRef(false);
    useEffect(() => {
        if(!renderAfterCalled.current){
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        };
        fetchData()
        
    }
    renderAfterCalled.current = true;
    }, []);
    console.log(movie)


    function truncateText(string,n){
        return string?.length > n ? string.substr(0,n - 1) + "..." : string;
    }
    
    const bannerStyle = {
        backgroundImage: `${movie.backdrop_path ? `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'` : '' }`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    };

    return (
        <header className='banner' style={bannerStyle}>
            <div className='banner__content'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_title}</h1>
                <p className='banner__description'>{truncateText(movie?.overview, 80)}</p>
                <div className='banner__buttons'>
                    {/*<Link to={`/video/${movie?.id}`}>*/}
                    <a href={`https://vadraz.com/nv15v6kejakmja1/home/vadraz&searchword=${movie?.title || movie?.name || movie?.original_title}`}>
                        <button className='banner__button banner__button--play'><PlayArrowIcon /> Lecture</button>
                    </a>
                    {/* </Link> */}
                    <button className='banner__button'onClick={handleClickPopup}><HelpOutlineIcon /> Plus d'infos</button>
                </div>
            </div>
            <QuickView bannerStyle={bannerStyle} movie={movie} popUp={handleClickPopup} popUpStatus={popUp} />
        </header>
    )
    }

export default Banner