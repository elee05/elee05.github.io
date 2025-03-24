import { useState} from 'react'
import './chat.css'

function Chat() {
    const [messages, setMessages] = useState([])
    const [userInput, setUserInput] = useState('')

    async function getResponse() {
        try {
            if (!UserInput) return
            const response = await fetch('https://localhost:400/chat', {
                // post request
                method: 'POST', 
                headers: {
                    'Conent-Type': 'application/json'
                },
                body: JSON.stringify({userInput})
            })
            if (!response.ok) {
                throw new Error('Oops not ok response')
            }
            const {message } = await response.json()
            setMessages([...messages, userInput, message])
        } catch (error) {
            console.error(error)
            return 'Oops, something went wrong'
        }
    }

    return (
        
    <div id="chat"><p>chat zone</p></div>

    )
}

export default Chat