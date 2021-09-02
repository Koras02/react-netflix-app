/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {  useState } from 'react'
import { useSelector } from "react-redux";
import {selectUser} from "../../utills/UserSlice";
import avatar from "./img/avatar.jpg";
import Navbar from '../components/Navigation/Nav';
import "./styles/Dashbord.css"
import { useHistory } from 'react-router-dom';
 
// import { useAuth } from '../../context/AuthContext';

function Dashbord() {    
     const User = useSelector(selectUser);
     const [user, setUser] = useState({});

     const [error, setError] = useState("");
    //  const { logout } = useAuth();

     async function handleLogout() {
         setError('')
         
        try {
            // await logout()
            history.push('/Netflix-Api-frameWork');
        } catch {
            setError("로그아웃 실패")
        }
     }


     const history = useHistory();

    //  const getUserInfo = async(email) => {
    //      console.log(email)
    //      await axios(`https://boiling-bayou-07410.herokuapp.com/getCurrentUser/${email}`)
    //      .then(data => {
    //          setUser(data.data);
    //      })
    //      .catch(err => console.error(err));
    //  }

    //  const handleCanclePlan = async(id, email) => {
    //      await fetch(`https://boiling-bayou-07410.herokuapp.com/getCurrentUser/${id}`, {
    //          method: 'DELETE',
    //          headers: {'Content-Type':'application/json'}
    //      })
    //        .then(res => res.json())
    //        .then(data => {
    //            console.log(data);
    //            getUserInfo(email);
    //        })
    //        .catch(err => console.log(err));
    //  }

    //  useEffect(() => {
    //      getUserInfo(User?.email);
    //      return getUserInfo;
    //  }, []);

  
    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen__body">
                <h1>프로필 편집</h1>
                <div className="profileScreen__info">
                    <img src={avatar}  alt="netflix-avatar"/>
                    <div className="profileScreen__details">
                        <h2>{user.email || User?.email}</h2>
                        <div className="profileScreen__plans">
                            <h3 className=".selected__plan">현재구독: 
                                <span style={{ color: 'tomato'}}>
                                {(user.plan || User?.plan) ? `${user.plan || User?.plan}` : '구독 없음'}
                                </span>
                            </h3>
                            <h3>
                                최근 구독: {`${(user?.expireDate || User?.expireDate) ? new Date(user?.expireDate).toLocaleDateString(): '0/00/0000' }`}
                            </h3>
                                
                            {/* 베이직 구독 */}
                            <div className="package">
                                <h3>넷플릭스 베이직</h3>
                                <small>480p</small>
                            </div>
                            
                            <div className="profileScreenPlan__button">
                                {
                                    user.plan === 'basic' ?
                                    <button className="cancel_button">
                                        구독취소
                                    </button>
                                    :
                                    <button onClick={() => history.push('/payment/basic')}>구독하기</button>
                                }
                            </div>

                            {/* 스탠다드 구독 */}
                            <div className="package">
                                <h3>넷플릭스 스탠다드</h3>
                                <small>1080p</small>
                            </div>
                            
                            <div className="profileScreenPlan__button">
                                {
                                    user.plan === 'standard' ?
                                    <button  className="cancel_button">
                                        구독취소
                                    </button>
                                    :
                                    <button onClick={() => history.push('/payment/standard')}>구독하기</button>
                                }
                            </div>

                            {/* 프리미엄 구독 */}
                            <div className="profileScreen__plan">
                            <h4>
                                넷플릭스 프리미엄 
                            </h4>
                            <span>4K + HDR</span>
                            </div>
                             <div className="profileScreenPlan__button">
                                 {
                                     user.plan === '프리미엄' ?
                                      <button  className="cancel_button">
                                          구독 취소
                                      </button>
                                      :
                                      <button onClick={() => history.push('/payment/premium')}>구독하기</button>
                                 }
                             </div>   
                            <button 
                               className="profileScreen__signOut"
                               onClick={handleLogout}
                             >
                                 로그아웃
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashbord
