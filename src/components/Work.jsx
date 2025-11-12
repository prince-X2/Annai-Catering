import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import Delivery from '../assets/delivery-image.png'

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Explore our menu and choose dishes that perfectly match your cravings.",
        },
        {
            image: ChooseMeals,
            title: "Choose Your Fav Meal",
            text: "Select your preferred flavors, crafted with care and premium ingredients.",
        },
        {
            image: Delivery,
            title: "Fast Delivery",
            text: "We deliver your meals fresh, hot, and right on time.",
        },
    ];

    return (
    
        <div id="work" className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-header'>How It Works</h1>
        <p className='primary-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, natus.</p>

    </div>
    <div className='work-section-bottom'>
        {workInfoData.map((data, index) =>(
            <div key={index} className='work-section-info'>
                <div className='info-boxes-img-container'>
                    <img src = {data.image} alt='Loading' />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                    </div>
    ))}

    </div>

  </div>
)
}

export default Work;
