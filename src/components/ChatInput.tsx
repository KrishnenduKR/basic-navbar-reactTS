import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 12px;
  background: #7B6F9A;
  border-top: 1px solid #ddd;
  border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
  flex: 1;
  resize: none;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  background: white;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  min-height: 40px;
  overflow-y: auto;
  line-height: 1.5;
`;

const SendButton = styled.button`
  background: #10a37f;
  color: white;
  border: none;
  margin-left: 8px;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #0d8b6c;
  }
`;

type ChatInputProps = {
  onSend: (message: string) => void;
};

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (text.trim()) {
      onSend(text.trim());
      setText('');
    }
  };

  return (
    <InputContainer>
      <StyledTextarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your text..."
        rows={1}
      />
      <SendButton onClick={handleSend}>Send</SendButton>
    </InputContainer>
  );
};

export default ChatInput;
