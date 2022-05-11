import React, { useEffect, useState} from 'react';
import moment from 'moment'
import IdleTimer from 'react-idle-timer'
import { IdleTimeOutModal } from './IdleTimeOutModal'
import { useDispatch } from 'react-redux';
import { Logout ,signIn } from '../../Pages/SignIn/store/signInSlice';


const IdleTimeOutHandler = (props)=>{
    const[showModal,setShowModal]=useState(false)
    const dispatch = useDispatch();
    // const[isLogout,setLogout]=useState(false)
    const emailStatus = useSelector((state)=>state.persistedReducer.signInReducer.userStatus)
    let timer=undefined;
    const events= ['click','load','keydown']
    const eventHandler =(eventType)=>{
        
        // console.log(eventType)
        if(emailStatus == false){
            localStorage.setItem('lastInteractionTime',moment() )
            if(timer){
                props.onActive();
                startTimer();
            }
        }
        
    };
    
    useEffect(()=>{
        addEvents();
        
        return (()=>{
            
            removeEvents();
            clearTimeout(timer);
        })
    },[])
    
    const startTimer=()=>{
        
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            
            let lastInteractionTime=localStorage.getItem('lastInteractionTime')
            const diff = moment.duration(moment().diff(moment(lastInteractionTime)));
            let timeOutInterval=props.timeOutInterval?props.timeOutInterval:6000;
            if(emailStatus){
                clearTimeout(timer)
            }else{
                if(diff._milliseconds<timeOutInterval){
                    startTimer();
                    props.onActive();
                }else{
                    props.onIdle();
                    setShowModal(true)
                }
            }
            
        },props.timeOutInterval?props.timeOutInterval:6000)
        
        
        
        
        
    }
    const addEvents=()=>{
        
        events.forEach(eventName=>{
            window.addEventListener(eventName,eventHandler)
        })
        
        startTimer();
    }
    
    const removeEvents=()=>{
        events.forEach(eventName=>{
            window.removeEventListener(eventName,eventHandler)
        })
    };
    
    const handleContinueSession = ()=>{
        setShowModal(false)
        dispatch(signIn({user : 'true'}))
        
    }
    const handleLogout = ()=>{
        removeEvents();
        clearTimeout(timer);
        dispatch(Logout())
        props.onLogout();
        setShowModal(false)
        
    }
    
    return(
        <div>
        <IdleTimer>
        <IdleTimeOutModal 
        showModal={showModal} 
        handleContinue={handleContinueSession}
        handleLogout={handleLogout}
        />
        </IdleTimer>
        </div>
        )
        
    }
    
    export default IdleTimeOutHandler;
