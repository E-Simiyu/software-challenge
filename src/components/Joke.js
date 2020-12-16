import React from 'react';

const Joke = props => (
<div>
	{
		props.joke && <p>{props.joke}</p>
	}
	{
		props.error && <p> {props.error}</p> 
	}
</div>
)

export default Joke;