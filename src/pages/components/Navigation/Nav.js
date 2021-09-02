/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import NetflixIcon from '../../../assets/Netflix.png'
import routeList from '../../../Routes/routeList';
import routeSearch from '../../../Routes/routeSearch';
import styled from 'styled-components';
import './Nav.css'
import $ from "jquery";
 
 
import { ImMenu } from 'react-icons/im';
 
import logo from './Logo/images/users/2.png';
 

const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  height: 4rem;
  align-items: center;
  background:#000;
  padding: 0 3rem;
  z-index:999;
  background-color:
  @media (max-width: 800px) {
    justify-content: space-between;
  }
  `;
  
  const CollapsableMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
  
  transition: transform .2s ease, opacity .4s ease;
  @media (max-width: 800px) {
    padding: 1.8rem;
    //  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'flex')}; 
    flex-direction: column;
    position: absolute;
    left:10%;
    transform-origin: top;
    transform: ${({ isCollapsed }) => isCollapsed && 'translateX(-100%)'};
    opacity: ${({ isCollapsed }) => isCollapsed && '0'};
    background:#000;
    min-height: 1200px;
    z-index: 9;
    left: 0;
    top: 3.9rem;
  }
  `;
  
  const MenuList = styled.ul`
  padding: 0;
  margin-left:2rem;
  margin-top:0.5rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  `;
  
  const MenuItem = styled(NavLink)`
  margin-left: 3rem;
  margin-right:0.9rem;
  color: #fff;
  opacity: 0.6;
  text-decoration:none;
  font-size:1.2rem;
  font-weight: bold;
  margin-top:20px;
  line-height:1rem;
  
  
  :active,
  :focus,
  :hover {
    opacity: 1;
  }

 
  @media screen and (max-width : 1600px) {
    font:bold 14px/24px arail;
    padding: 0.1rem 2px;
    margin:0rem 1.9rem 0rem 1.8rem;
    
  }

  @media screen and (max-width: 1400px) {
    padding 1rem 2px;
    font-size:0.9rem 2px;
    margin-left:10px;
  }

  @media screen and (max-width: 890px) {
    padding 1.4rem 2px;
    font-size:1.4rem;
    margin-left:70px;
  }

 

 
`;


const MenuItem2 = styled(NavLink)`
  margin-left: 3.9rem;
 
  color: #fff;
  opacity: 0.6;
  text-decoration:none;
  
  :active,
  :focus,
  :hover {
    opacity: 1;
  }

  display:none;
 

  @media screen and (max-width: 820px) {
    padding 1.9rem 2px;
    font-size:2rem;
    margin-left:30px;
    display:block;
  }
 
`;

const BrandLogo = styled(Link)`
  color: #ffd500;
  font-weight: 600;
`;

const StyledMenuBtn = styled.button`
  background: none;
  
  background-image: ${NetflixIcon};
  width: 4.8rem;
  height: 4.8rem;
  border: none;
  filter: invert(100%);
  display: none;
  @media (max-width: 800px) {
    display: inline-block;
  }
`;

 

 
function Navbar(props)  {
  
  /*  loading 스크롤 모음   */ 
  const [isCollapsed, setCollapse] = useState('true');
  const [scrollNav, setScrollNav] = useState(false);
  const [loading, setLoading] = useState(0);
    
 /* search 쿼리 모음 */
 const [openSearch, setOpenSearch] = useState(true);
 const [searchQuery, setSearchQuery] = useState();
 const history = useHistory();


//  /* 검색아이콘 클릭시 검색창 뜨게 만들기 */
// eslint-disable-next-line no-unused-vars
const [searchActive, setSearchActive] = useState(false);


const [show,handleShow] = useState(true);
 

  // search 했을때 값 변경 
  var handleChangeSearch = (value) => {
    setSearchQuery(value);
    // 검색할때 해당 id의 값을 더해서 검색결과를 보여줌 
    history.push("/search?query=" + value);

  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset !== 0) {
        $("nav").css({ "line-height": "0.3" });
      } else {
        $("nav").css({ "line-height": "0.5" });
      }
    };
    // JQuery라이브러리를 사용함 
    if (window.innerWidth > 0) {
      $(".search,.search-input").hover(
        () => {
          $(".search-input").css({width: "14rem", padding: "0rem"});
          $(".search-input").focus();
        },
        () => {
           if(!Boolean($(".search-input").val())) {
             $(".search-input").css({width: "14rem", padding: "0rem"});
           }
        }
      );
    } else {
      $(".search").click(() => {
        setOpenSearch((openSearch) => !openSearch);
      });
    }
  },[]);

     useEffect(() => {
       if(openSearch) {
         $(".search-input").focus();
         $(".search-input").css({ width: "14rem", padding: "0rem" });
       } else {
    
       }
     }, [openSearch]);
   

  
  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
     setLoading(1);
    
     setTimeout(setLoading(0), 0);

  },[]);


  const handleCollapse = () => {
    setCollapse(!isCollapsed);
  };


  return (
      <StyledNav scrollName={scrollNav}>
       {loading ? <>Now Loading...</> : <>
        <BrandLogo to="/trending">
        <img src={NetflixIcon} alt="Menu Icon"  className="menu-icon"/>
        </BrandLogo>
          <StyledMenuBtn onClick={handleCollapse}>
           <ImMenu  className="Menu-Icon" size="35"/>
        </StyledMenuBtn>
        <CollapsableMenu isCollapsed={isCollapsed}>
          <MenuList>
            {routeSearch.map(item2 => (
            
                <MenuItem2 
                  exact={item2.path === '/'}
                  onClick={handleCollapse}
                  key={item2.name}
                  to={item2.path}
                  >
                  {item2.name}
                </MenuItem2>
              
            ))}
            {routeList.map(item => (
            
              <MenuItem
              exact={item.path === '/'}
              onClick={handleCollapse}
              key={item.name}
              to={item.path}
              >
                {item.name}
              </MenuItem>
              
            ))}
          </MenuList>
  
        </CollapsableMenu>
               <div className="nav__contents">
                     <img onClick={() => history.push("/DashBoard")} className="nav__avatar" src={logo} alt="" />
                 </div>
             
           
                 <div>
            </div>
        
        </>}
      </StyledNav>
  );
}
  

export default Navbar;







