import React from 'react'
import StyledPageDiv from '../components/StyledPageDiv'
import ChatInput from '../components/ChatInput'
import TranslateOutputBox from '../components/TranslateOutputBox'
import TranslateTargetDropdown from '../components/TranslateTargetDropdown'

type pageProps = {
    backgroundColor : string,
}


const Translator = (props : pageProps) => {
    const [message, setMessage] = React.useState('')
    const [translated, setTranslated] = React.useState('')
    const [selectedLang, setSelectedLang] = React.useState('ja')

    const handleSelect = (lang: string) => {
        setSelectedLang(lang)
        setTranslated('')
    }

    const handleSend = async (message: string) => {
        setMessage(message)
        try {
            const response = await fetch('http://localhost:5000/api/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
            text: message,
            target: selectedLang
            })
      });
      const data = await response.json();
      setTranslated(data.translatedText);
    } catch (error) {
      console.error('Translation failed:', error);
      setTranslated('Error');
    }
  };
  return (
    <StyledPageDiv backgroundColor={props.backgroundColor}>
        <TranslateTargetDropdown value={selectedLang} onSelect={handleSelect}/>
        <TranslateOutputBox message={translated}/>
        <div style={{ maxWidth: 600, margin: '0 auto', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <ChatInput onSend={handleSend} />
        </div>
    </StyledPageDiv>
    
  )
}

export default Translator
