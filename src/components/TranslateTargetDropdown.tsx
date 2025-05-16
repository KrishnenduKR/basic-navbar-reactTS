import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import styled from 'styled-components';


const StyledSelect = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  width: 10vw;
  height: 5vh;
`;

type props = {
    onSelect: (lang: string) => void;
    value: string;
}

const TranslateTargetDropdown = ({value, onSelect}:props) => {
    const { data: languages } = useSelector(
    (state: RootState) => state.language
  );
  return (
    <div style={{width:'40vw', height: '10vh', border: '1px solid #7B6F9A', 
    borderRadius: '5px', backgroundColor:'whitesmoke', margin: '0 auto', marginTop: '20px', 
    padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    
        <div style={{padding: '12px', width: '5vw', height: '5vh', border: '1px soild #ddd'}}><p>English</p></div>
        <div style={{padding: '12px', width: '5vw', height: '5vh'}}><p>⇒</p></div>
        <div>
            <StyledSelect value={value} onChange={(e) => onSelect(e.target.value)}>
                {Object.entries(languages).map(([code, name]) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </StyledSelect>
        </div>
    </div>
  )
}

export default TranslateTargetDropdown
