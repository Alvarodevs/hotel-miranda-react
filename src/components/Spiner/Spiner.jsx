import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { SpinerContainer } from './SpinerStyled';

const Spiner = () => {
 
	 return (
		 <SpinerContainer>
			<CircularProgress color='success'/>
		 </SpinerContainer>
	 )
}
 
export default Spiner;