'use client'

import { useEffect } from 'react'
import gsap from 'gsap';

function CursorColorSwitcher() {
    useEffect(() => {
        const cursor = document.querySelector('#rectangular');

        if (!cursor) return;

        const handleMouseMove = (details: MouseEvent) => {
            const rectangular = cursor.getBoundingClientRect(); 
            const cursorX = details.pageX - rectangular.left;
            if (cursorX < rectangular.width/2){
              const red = gsap.utils.mapRange(0, rectangular.width/2, 255, 0, cursorX);
              gsap.to(cursor, {
                backgroundColor: `rgb(${red},0, 0)`,
                ease: 'power4',
              });
            }else {
              const blue = gsap.utils.mapRange(rectangular.width/2, rectangular.width, 0, 255, cursorX);
              gsap.to(cursor, {
                backgroundColor: `rgb(0, 0, ${blue})`,
                ease: 'power4',
              });
            }
        };
        const handleMouseLeave = () => {
          gsap.to(cursor, {
            backgroundColor: 'white',
          });
        };
        cursor.addEventListener('mousemove',
          handleMouseMove);
        cursor.addEventListener('mouseleave', handleMouseLeave);

        return()=>{
          cursor.removeEventListener('mousemove', handleMouseMove);
          cursor.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, []);


  return null;
}

export default CursorColorSwitcher;
