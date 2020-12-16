import React from 'react';


    
const Button = props => (
    <div className= 'dib br3 pa3 ma2 bw2 shadow-5 center'>
    
        <form onSubmit={props.getRandomChuckJoke}>  
        <select className='w-15 grow f6 fw6 ttu tracked'  name="category">
       <option selected value = 'animal'>animal</option>
       <option value = 'career'>career</option>
        <option value = 'celebrity'>celebrity</option>
        <option value = 'dev'>dev</option>
        <option value = 'fashion'>fashion</option>
        <option value = 'food'>food</option>
        <option value = 'history'>history</option>
        <option value = 'money'>money</option>
        <option value = 'movie'>movie</option>
        <option value = 'music'>music</option>
        <option value = 'political'>political</option>
        <option value = 'religion'>religion</option>
        <option value = 'science'>science</option>
        <option value = 'sport'>sport</option>
        <option value = 'travel'>travel</option>
</select>

            <button className='w-15 grow mr2'>Get Random Joke</button>
        </form>
    </div>
);

export default Button;