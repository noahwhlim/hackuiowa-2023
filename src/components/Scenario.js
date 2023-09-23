import React from 'react'


export const Scenario = (props) => {
    const scenes = ["Alpha is a 20 y.o. M who has a felony on his record for running a road user off the road. He takes public transport (does not own a car). ", 
                    "Beta is a 35 y.o. F who is looking to take her boat on a cruise. She is worried because this is her first time sailing out into a larger area.",
                    "Charlie is a 43 y.o. M who is a successful buisness owner. He is looking to invest in some new property but is worried about taking higher-risk investments",
                    "Delta is a 29 y.o. F who just got a new dog, Coco. She interested in meeting with a Vet.",
                    "Echo is a 27 y.o. F who is a flight attendant. She choose her career because she loves to travel. For her next adventure, she is vacationing across Europe.",
                    "Foxtrot is a 25 y.o. who is looking to go on a road-trip with his new bike. He has been in several motorcycle accidents in the past.", 
                    "Golf is a 23 year old who just signed up for a job in the military. He is working a high-risk undercover ops job. He is married with one kid.",
                    "Hotel is a 27 year old M who is married and just bought his first house. He has never lived in an house before this, and is concerned about maintance.",
                    "India is 23 y.o. F who just graduated college. She is renting an apartment for this year. However, this apartment complex, while cheap, is poorly maintained.",
                    "Juliett is a 37 y.o. F who owns a boat company in Florida. She is worried about how the unpredictable weather might affect her buisiness in the future.",
                    "Kilo is a 34 y.o. who is looking to buy a condo in a tropical location. He is very excited, but worried about how many of the locations he is considering has had multiple fires recently."
                  ];

                  //Alpha - 
                  //Beta - Boat insurance 
                  //Charlie - Property insurance 
                  //Delta - Pet insurance 
                  //Echo - Travel insurance 
                  //Foxtrot - Motorcycle insurance
                  //Golf - Life insurance 
                  //Hotel - Homeowners insurance 
                  //India - Renters insurance 
                  //Juliett - Buisness insurance 

  return (
    <div className='flex bg-white m-3 p-2 rounded-md max-h-max'>
        {scenes[props.num]}

    </div>
  )

  // The life insurance options: 
          // Auto
          // motorcycle
          // ATV
          // RV 
          // Boat

          // Homeowners
          // Renters 
          // Condo

          // Life
          // Pet
          // Business
          // Travel 
}
