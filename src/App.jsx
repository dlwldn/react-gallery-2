import React, {useState, useEffect, useRef} from 'react';
// import './App.css';
import styled from 'styled-components';

import { photos } from './photos';


const Container = styled.div`
width: 100%;
display: flex;
box-sizing: border-box;
padding: 5%;
`

const DevideDiv = styled.div`
width: 20%;
padding-right: 10px;
height: 100vh;

&:nth-child(5) {
  padding-right: 0;
}

@media screen and (max-width: 1200px) {
  width: 25%;
}

@media screen and (max-width: 800px) {
  width: 50%;
}

@media screen and (max-width: 400px) {
  width: 100%;
}
`

const Images = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

function App() {
  const wrapRef = useRef();

  const [size, setSize] = useState(0);
  const [wideCount, setWideCount] = useState(5);


  useEffect(()=> {
    setSize(window.innerWidth);
  }, [])

  useEffect(()=> {
    // if(wrapRef.current) {
    //   wrapRef.current.addEventListener('resize', updateSize);
    // }

    // function updateSize() {
    //   setSize(wrapRef.current.offsetWidth)
    // }

    // return () => wrapRef.current.removeEventListener('resize', updateSize);
    // const width = wrapRef.current.offsetWidth;
    // if(width > 1200) {
    //   setWideCount(5)
    // } else if ( width <= 1200 && width > 800) {
    //   setWideCount(4)
    // } else if ( width <= 800 && width > 400) {
    //   setWideCount(2)
    // } else if ( width <= 400 && width > 0) {
    //   setWideCount(1)
    // }

    window.addEventListener('resize', updateSize);

    function updateSize() {
      setSize(window.innerWidth);
    }
    return () => window.removeEventListener('resize', updateSize);
  }, [window.innerWidth])


    if(size <= 1200 && size > 800) {
      return (
        <Container ref={wrapRef}>
            {Array(4).fill("").map((_, index1)=> {
              return (
                <DevideDiv key={index1}>
                  {photos.filter((_, index2)=> {
                    return (index2 % 4) === index1
                  }).map((item, index3)=> {
                    return (
                      <Images key={item + index3} src={item.src} alt=""/>
                    )
                  })}
                </DevideDiv>
              )    
            })}
        </Container>
      );
    } else if (size <= 800 && size > 400) {
      return (
        <Container ref={wrapRef}>
            {Array(2).fill("").map((_, index1)=> {
              return (
                <DevideDiv key={index1}>
                  {photos.filter((_, index2)=> {
                    return (index2 % 2) === index1
                  }).map((item, index3)=> {
                    return (
                      <Images key={item + index3} src={item.src} alt=""/>
                    )
                  })}
                </DevideDiv>
              )    
            })}
        </Container>
      )
    } else if (size <= 400 && size > 0) {
      return (
        <Container ref={wrapRef}>
            <DevideDiv>
              {photos.map((item, index)=> {
                return (
                  <Images  key={item + index} src={item.src} alt=""/>
                )
              })}
            </DevideDiv>
        </Container>
      )
    }
    
    else {
      return (
        <Container ref={wrapRef}>
            {Array(5).fill("").map((_, index1)=> {
              return (
                <DevideDiv key={index1}>
                  {photos.filter((_, index2)=> {
                    return (index2 % 5) === index1
                  }).map((item, index3)=> {
                    return (
                      <Images key={item + index3} src={item.src} alt=""/>
                    )
                  })}
                </DevideDiv>
              )    
            })}
        </Container>
      );
    }
}

export default App;
