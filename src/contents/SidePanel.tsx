import { useState } from "react"
import cssText from "data-text:~style.css"

import type { PlasmoCSConfig } from "plasmo"
 
export const config: PlasmoCSConfig = {
  matches: ["https://tinder.com/*"],
  all_frames: true
}

export const getStyle = () => {
    const style = document.createElement("style")
    style.textContent = cssText
    return style
  }


function IndexSidePanel() {
  const [data, setData] = useState("")

    function returnsTrue70Percent() {
        return Math.random() < 0.7;
        }

    function isElementPresentWithClass(className) {
        return document.querySelector('.' + className) !== null;
    }

    const wait = async (time) => {
        setTimeout(3000)
    }

    const containsText = (element, text) => {
            if (element.nodeName === 'SPAN' && element.textContent.trim().toLowerCase() === text) {
                return true;
            }
            for (let i = 0; i < element.children.length; i++) {
                if (containsText(element.children[i], text)) {
                    return true;
                }
            }
            return false;
        };

    function delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    const checkPhotos = async () => {
        // Select all div elements
        const divs = document.querySelectorAll('div');
        
        // Filter divs that contain aria-label with "'s photos"
        const filteredDivs = Array.from(divs).filter(div => {
            const ariaLabel = div.getAttribute('aria-label');
            return ariaLabel && ariaLabel.includes("'s photos");
        });

        const photoDiv = filteredDivs[0] ; 

        const childElements = photoDiv.children;
    
        // Iterate through the child elements
        for (let i = 0; i < childElements.length; i++) {
            const child = childElements[i];
            console.log(child); // Perform any operation on the child element
            await delay(getRandomNumber(1000,2000))
            // Type assertion to HTMLElement
            if (child) {
                (child as HTMLElement).click();
            }
        } 

        
    }

    const swipe = async () => {
        // Select all button elements
        //await checkPhotos() ; 
        let text = '' ; 
        if(returnsTrue70Percent()){
            text = 'like' ; 
        }else{
            text='nope' ; 
        }

        const buttons = document.querySelectorAll('button');
        let element = null ; 
        // Iterate over each button
        buttons.forEach(button => {
            // Check if any descendant element contains the text "like"
            if (containsText(button, text)) {
                console.log(button);
                element = button ; 
            }
        });

        if (element) {
        element.click();
        console.log("Element clicked");
        } else {
        console.log("Element not found");
        }
    };

    const handleStartAutoswiping = async () => {
        //const className = 'Mah(--recs-card-height)--ml Ovy(s) Ovs(touch) Ovsby(n)';

        //if (isElementPresentWithClass(className)) {
        console.log('Element with class is present!');
        while(1){
            await swipe() ; 
        }
        //setInterval(await swipe, 3000);
        // } else {
        //     console.log('Element with class is not present.');
        // }
        
    };

    return (
        <div className="bg-white h-[20vh] w-1/8 fixed bottom-10 right-0 rounded-3xl flex flex-col justify-evenly p-4 m-8">
        <h2 className="text-red-500 text-7xl text-center">
            Tinder Autoswiper
        </h2>
        <button
            onClick={handleStartAutoswiping}
            className="bg-customPink text-white p-8 rounded-xl text-2xl hover:bg-customPink-100 m-4"
        >
            Start Autoswiping
        </button>
        </div>
    );
}

export default IndexSidePanel
