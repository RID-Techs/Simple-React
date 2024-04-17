import { useEffect, useState } from "react"

export function Header(){
const [score, setScore] = useState(0)
const [makeVisible, setMakeVisible] = useState(false)
const [makeVisible_1, setMakeVisible_1] = useState(false)
const [makeVisible_2, setMakeVisible_2] = useState(false)
const [makeVisible_3, setMakeVisible_3] = useState(false)

const [getInp, setGetInp] = useState('');
function nice(name) {
    localStorage.setItem('name', name)
}

useEffect(() => {
    const storedName = localStorage.getItem('name')
    if(storedName){
        return setMakeVisible(true)
    }
}, [])

const sendInp = () => {
    const inpInfo = document.getElementById("name")
    const getInpInfo = inpInfo.value.trim()
    if(getInpInfo === ""){
        alert("Your name first !")
    } else{
        setGetInp(getInpInfo)
        setMakeVisible(true)
        nice(getInpInfo)  
    }
        
}

const User = localStorage.getItem('name')

const [resetAppear, setResetAppear] = useState(false)

const [found1, setFound1] = useState(null)
const [found2, setFound2] = useState(null)
const [found3, setFound3] = useState(null)
const [found4, setFound4] = useState(null)


const [disableOk, setDisableOk] = useState(false)
const [disableSorry, setDisableSorry] = useState(false)

const [disableYesButton, setDisableYesButton] = useState(false)
const [disableNoButton, setDisableNoButton] = useState(false)

const [disableReactTrue, setDisableReactTrue] = useState(false)
const [disableReactFalse, setDisableReactFalse] = useState(false)

const [disableNextTrue, setDisableNextTrue] = useState(false)
const [disableNextFalse, setDisableNextFalse] = useState(false)


const CodeOk = () => {
    setFound1(true)
    setMakeVisible_1(true)
    setScore(prev => prev + 5)
    setDisableSorry(true)
    const right = document.querySelector(".code-text-right")
    right.style.backgroundColor = "lightgreen"

    setTimeout(() => {
        setDisableOk(true)
    }, 1000)
}
const CodeSorry = () => {
    setFound1(false)
    setMakeVisible_1(true)
    setDisableOk(true)
    const wrong = document.querySelector(".code-text-wrong")
    wrong.style.backgroundColor = "lightcoral"
    wrong.style.filter = 'drop-shadow(1px 1px 1px mediumblue)'
}
const YesButton = () => {
    setFound2(true)
    setMakeVisible_2(true)
    setScore(prev => prev + 5)
    const right = document.querySelector(".right")
    right.style.backgroundColor = "lightgreen"
    setDisableNoButton(true)
    setTimeout(() => {
        setDisableYesButton(true)
    }, 1000)
}
const NoButton = () => {
    setFound2(false)
    setMakeVisible_2(true)
    setDisableYesButton(true)
    const wrong = document.querySelector(".sorry")
    wrong.style.backgroundColor = "lightcoral"
    wrong.style.filter = 'drop-shadow(1px 1px 1px mediumblue)'
}
const ReactTrue = () => {
    setFound3(true)
    setMakeVisible_3(true)
    setScore(prev => prev + 5)
    const right = document.querySelector(".right-2")
    right.style.backgroundColor = "lightgreen"
    setDisableReactFalse(true)
    setTimeout(() => {
        setDisableReactTrue(true)
    }, 1000)
}
const Reactfalse = () => {
    setFound3(false)
    setMakeVisible_3(true)
    setDisableReactTrue(true)
    const wrong = document.querySelector(".sorry-2")
    wrong.style.backgroundColor = "lightcoral"
    wrong.style.filter = 'drop-shadow(1px 1px 1px mediumblue)'
}
const NextTrue = () => {
    setFound4(true)
    setScore(prev => prev + 5)
    const right = document.querySelector(".right-3")
    right.style.backgroundColor = "lightgreen"
    setDisableNextFalse(true)
    setResetAppear(true)
    setTimeout(() => {
        setDisableNextTrue(true)
    }, 1000)
}
const Nextfalse = () => {
    setFound4(false)
    setDisableNextTrue(true)
    setResetAppear(true)
    const wrong = document.querySelector(".sorry-3")
    wrong.style.backgroundColor = "lightcoral"
    wrong.style.filter = 'drop-shadow(1px 1px 1px mediumblue)'
}

// localStorage.setItem('score', score)
// console.log("Your previous was",localStorage.getItem('score'))

const Reset = () => {
    const btns_holder = document.querySelector(".question-holder")
    const btns = btns_holder.querySelectorAll("button")
    setResetAppear(false)
    btns.forEach(each_btn => {
        each_btn.style.backgroundColor = ""
        each_btn.style.filter = ""
        setFound1(null)
        setFound2(null)
        setFound3(null)
        setFound4(null)
        setDisableOk(false)
        setDisableSorry(false)
        setDisableYesButton(false)
        setDisableNoButton(false)
        setDisableReactTrue(false)
        setDisableReactFalse(false)
        setDisableNextTrue(false)
        setDisableNextFalse(false)
        setScore(0)
        setMakeVisible_1(false)
        setMakeVisible_2(false)
        setMakeVisible_3(false)
    })

}



    return <>
    <div className="Header">
        <h1 style={{fontFamily: "cursive", textAlign: "center"}}>Make A Tour !</h1>
        <div className="input-holder">
            <input id="name" type="text" placeholder="Your name, please" autoComplete="null"/>
            <button id="subbut" type="button" onClick={sendInp}>Ok</button>
        </div>
        <div className="Header-children">
            <h2 style={{
                fontFamily: "monospace",
                fontStyle: "italic" }}
                    >
                    Let&apos;s Play a bit !
            </h2>
            <p>Score : {score < 5 ? "--" : score}</p>
            <p id="level" style={{
                fontFamily: "monospace",
                fontStyle: "italic",
                fontSize: "1.2rem"}}>

                    { 
                        score === 5 ? "🤩 Got your first 5 mks, nice !" :
                        score === 10 ? "💎 Can do better !" :
                        score === 15 ? "🎯🎖 You were close to hit the top !" :
                        score === 20 ? "🥇🏆 Congratulations, you made it !" :
                        `Let's see your level ${User || getInp}, Here we go !`
                    }
                </p>
        </div>
    </div>

    <div className="question-holder">
        { makeVisible === false ?
            <div style={{
                opacity: "0.3",
                cursor: "not-allowed"
            }} className="question-container">
                <h3>Which of these proposals is suitable for creating a class in React JS ?</h3>
                <div id="special" className="proposals">
                    <button onClick={CodeOk} disabled={true} className="code-text-right">{`<div className="hello"> Hello </div>`}</button>
                    <button onClick={CodeSorry} disabled={true} className="code-text-wrong">{`<div class="hello"> Hello </div>`}</button>
                </div>
                <div className="answer-holder">
                {found1 === true ? <p className="Answer-right">Correct</p> : 
                    found1 === false ?
                    <p className="Answer-wrong">Sorry</p> : null}
                </div>
        </div>
        :
        <div className="question-container">
            <h3>Which of these proposals is suitable for creating a class in React JS ?</h3>
            <div id="special" className="proposals">
                <button onClick={CodeOk} disabled={disableOk} className="code-text-right">{`<div className="hello"> Hello </div>`}</button>
                <button onClick={CodeSorry} disabled={disableSorry} className="code-text-wrong">{`<div class="hello"> Hello </div>`}</button>
            </div>
            <div className="answer-holder">
            {found1 === true ? <p className="Answer-right">Correct</p> : 
                found1 === false ?
                <p className="Answer-wrong">Sorry</p> : null}
            </div>
        </div>

        }

        <div className="divider-holder">
            <p className="divider"></p>
        </div>
    
        {
            makeVisible_1 === false ?
            <div style={{
                opacity: "0.3",
                cursor: "not-allowed"
            }} className="question-container">
            <h3>Can we reasign another value to a <em>const variable</em> ?</h3>
            <div className="proposals">
                <button onClick={NoButton} disabled={true} className="sorry">Yes</button>
                <button onClick={YesButton} disabled={true} className="right">No</button>
            </div>
            <div className="answer-holder">
            {found2 === true ? <p className="Answer-right">Correct</p> : 
                found2 === false ?
                <p className="Answer-wrong">Sorry</p> : null}
            </div>
        </div>
        : 
        <div className="question-container">
        <h3>Can we reasign another value to a <em>const variable</em> ?</h3>
        <div className="proposals">
            <button onClick={NoButton} disabled={disableNoButton} className="sorry">Yes</button>
            <button onClick={YesButton} disabled={disableYesButton} className="right">No</button>
        </div>
        <div className="answer-holder">
        {found2 === true ? <p className="Answer-right">Correct</p> : 
            found2 === false ?
            <p className="Answer-wrong">Sorry</p> : null}
        </div>
        </div>
        }

        <div className="divider-holder">
            <p className="divider"></p>
        </div>

        {
            makeVisible_2 === false ?

            <div style={{
                opacity: "0.3",
                cursor: "not-allowed"
            }} className="question-container">
            <h3>React JS is a____ ?</h3>
            <div className="proposals">
                <button onClick={ReactTrue} disabled={true} className="right-2">Framework</button>
                <button onClick={Reactfalse} disabled={true} className="sorry-2">Library</button>
            </div>
            <div className="answer-holder">
            {found3 === true ? <p className="Answer-right">Correct</p> : 
                found3 === false ?
                <p className="Answer-wrong">Sorry</p> : null}
            </div>
            </div>
            : 
            <div className="question-container">
            <h3>React JS is a____ ?</h3>
            <div className="proposals">
                <button onClick={ReactTrue} disabled={disableReactTrue} className="right-2">Framework</button>
                <button onClick={Reactfalse} disabled={disableReactFalse} className="sorry-2">Library</button>
            </div>
            <div className="answer-holder">
            {found3 === true ? <p className="Answer-right">Correct</p> : 
                found3 === false ?
                <p className="Answer-wrong">Sorry</p> : null}
            </div>
        </div>
        }
        
        <div className="divider-holder">
            <p className="divider"></p>
        </div>
        
        {
            makeVisible_3 === false ?
            <div style={{
                opacity: "0.3",
                cursor: "not-allowed"
            }} className="question-container">
            <h3>Next JS is a____ ?</h3>
            <div className="proposals">
                <button onClick={Nextfalse} disabled={true} className="sorry-3">JavaScript Framework</button>
                <button onClick={NextTrue} disabled={true} className="right-3">React JS Framework</button>
            </div>
            <div className="answer-holder">
            {found4 === true ? <p className="Answer-right">Correct</p> : 
                found4 === false ?
                <p className="Answer-wrong">Sorry</p> : null}
            </div>
        </div> 
        :
        <div className="question-container">
            <h3>Next JS is a____ ?</h3>
            <div className="proposals">
                <button onClick={Nextfalse} disabled={disableNextFalse} className="sorry-3">JavaScript Framework</button>
                <button onClick={NextTrue} disabled={disableNextTrue} className="right-3">React JS Framework</button>
            </div>
            <div className="answer-holder">
            {found4 === true ? <p className="Answer-right">Correct</p> : 
                found4 === false ?
                <p className="Answer-wrong">Sorry</p> : null}
            </div>
        </div>
        }


    </div>

    {
        resetAppear && <div className="Reset-holder">
        <button id="Reset" type="button" onClick={Reset}>
            Reset
        </button>
        </div>
    }
    
    </>
}