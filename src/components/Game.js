import React from 'react'
import { useState } from 'react'
import { Done } from '@mui/icons-material'
import Select from 'react-select';
import { Modal, Box } from '@mui/material';
import './ExternalFonts.css';

export const Game = (props) => {
    
    const [selected, setSelected] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [curChoice, setCurChoice] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [quota, setQuota] = useState(2);

    const options = [
      {  label: 'Auto - Collision', value: 'Covers collision damages to your vehicle from any source regardless of fault. Required for people with a car lease or loan. Recommended for people who wouldn\'t be able to afford out of pocket repairs if the car is damaged.', key:[1]}, // Collision
      {  label: 'Auto - Comprehensive', value: 'Covers damages to your vehicle from non-collision events such as vandalism or natural disasters. Required for people with a car lease or loan. Recommended for people who wouldn\'t be able to afford out of pocket repairs if the car is damaged', key:[0]}, //Comprehensive
      {  label: 'Auto - Gap', value: 'Covers the "gap" in value between what you may owe on a car loan and what your car is actually worth at the time of an irreparable accident. For example, to purchase a car you often will take out a loan. However once in your possession the car will be worth less at resale than the total cost of the loan. In the event the car is totalled, normal auto-insurance will pay back what your car is currently worth, which could be less than what you owe on the car. Gap insurance cover the remaining gap between whatever normal insurance paid back and the remainder of your loans. Recommended for people with a car loan.', key:[2]}, //Gap
      {  label: 'Auto - Liability', value: 'Covers damages to others from accidents you caused. Does not cover any damages to you. Legally required in all states except for New Hampshire and Virginia', key:[3]}, //Liability
      {  label: 'Auto - MedPay ', value: 'Covers medical expenses for occupants of your vehicle after an accident. Can also cover co-pays and deductibles of other insurance policies including health insurance and PIP. Required for some residents of Maine and New Hampshire. Recommended in general as supplement to health insurance and PIP coverage.', key:[4]}, //Medpay
      {  label: 'Auto - Personal Injury Protection', value: 'Covers assorted expenses for occupants of your vehicle after an accident. Qualifying expenses can range from hospital bills to lost income. Required for residents of DE, FL, MI, MA, KS, MN, NY, UT, OR, ND, and NJ. Recommended in general to protect against high medical expenses.', key:[5]}, //PIP
      {  label: 'Auto - Underinsured Motorist', value: 'Covers medical and vehicle repair expenses if the other driver in the accident doesn\'t have enough insurance to cover your expenses. Required for residents of CT, IL, KS, MA, MD, ME, MN, MO, NC, ND, NE, NH, NY, OR, SC, SD, VA, VT, WI, WV, and D.C. Recommended if you don\'t already have collision or personal injury protection insurance.', key:[6]}, //Uninsured
      {  label: 'Health - Health Maintenance Organization (HMO)', value: 'Health insurance plan covering a set of approved healthcare providers. Involves minimal paperwork compared to other plan types but is more restrictive in where you can receive care. Preventative care is free, all other services require payment up to a certain out-of-pocket maximum. Seeing a specialist requires a reference from your primary care provider. Out-of-network care is covered only in emergencies.', key:[20]}, //Health Maintenance Organization (HMO)
      {  label: 'Health - Preferred Provider Organization (PPO)', value: 'Similar to HMO but allows you to see out-of-network providers at the trade-offs of higher premiums, co-pays, and deductibles. Doesn’t require you to specify a primary care provider or get a referral to see specialists. Often requires a lot of paperwork to make claims.', key:[23]}, //PPO
      {  label: 'Health - Point-of-Services (POS)', value: 'Offers more flexibility in seeing out of network providers than an HMO plan, but still requires you to name a primary care provider and get referrals to see specialists.', key:[21]}, //POS
      {  label: 'Health - Exclusive Provider Organization (EPO)', value: 'Offers more flexibility than an HMO plan in that you don’t need to specify a primary care provider or get referrals to see specialists, but does require you to stay in-network for all routine care. Out-of-network care is covered only in emergencies.', key:[999]}, //EPO
      {  label: 'Health - High Deductible Health Plan (HDHP)', value: 'A healthcare plan with low monthly premiums, but at the trade-off of having extremely high deductibles that must be met before insurance chips in. Generally recommended only for young, healthy individuals with low risk of injury. Selecting this plan allows you to open a tax-free Health Savings Account to help cover any medical costs that may arise.', key:[19]}, //HDHP
      {  label: 'Health - Dental Insurance', value: 'Covers healthcare costs relating to dental work. Covers cleanings and routine exams for free. Covers fillings and extractions after the deductible is met. Also covers root canals, crowns, endodontics, periodontics, and medically necessary cosmetic orthodontia services after a deductible. Has preferred providers and a monthly premium.', key:[999]}, //Dental
      {  label: 'Health - Long Term Disability Insurance', value: 'Covers loss of income in the event of prolonged illness or injury. You can collect the benefit for injury/illness regardless of the source. You can choose how long you must be disabled before you start collecting benefits, and you can also choose how long benefits last from 5 years to retirement.', key:[22]}, //Long Term
      {  label: 'Health - Short Term Disability Insurance', value: 'Covers loss of income in the event of a short term disability. A short term disability is classified as a medical problem preventing you from working that lasts 6 months or less. Common causes of short term disability are illness, injury, and pregnancy. ', key:[999]}, //Short Term
      {  label: 'Home - HO-1 (Basic Form)', value: 'Covers 10 specific damages to the home: fire/lightning, windstorm/hail, explosion, riot/civil commotion, damage from aircraft, damage from vehicles, smoke, vandalism, theft, and volcanic eruptions. Only covers the value of the house at time of destruction, does not cover personal property or any other damages. This is the cheapest (and most limited scope) option for homeowners, but typically mortgage lenders will require a higher tier of insurance.', key:[24]}, //HO-1
      {  label: 'Home - HO-2 (Broad Form)', value: 'Covers the same scenarios as HO-1, as well as additional damages such as: heavy snow and ice, accidental overflow of water, accidental steam discharge, freezing of plumbing/air conditioning, bulging/cracking caused by a sudden, accidental event, sudden accidental damage caused by electrical currents, and falling objects. Additionally HO-2 policies also include coverage for personal belongings, medical payments to others, personal liability, and loss of use/additional living expenses.', key:[999]}, //HO-2
      {  label: 'Home - HO-3 (Special Form)', value: 'The most common home insurance policy type. Unlike HO-1 and HO-2, HO-3 is an open peril policy and provides coverage for all damages unless they are explicitly listed as an exclusion. Exclusions include: power failure, industrial pollution/smoke, earthquakes, flooding, intentional damage, war, nuclear accidents, damage caused by pets, damage caused by insects, negligence, damage or theft to unoccupied or under construction buildings, and deterioration due to weather over time. Additionally HO-3 policies also include coverage for personal belongings, medical payments to others, personal liability, and loss of use/additional living expenses.', key:[13]}, //HO-3
      {  label: 'Home - HO-4 (Renters)', value: 'Insurance designed to cover rented houses and apartments. Covers damages to belongings, additional living expenses, and liability caused by the same 16 damages described in HO-3. Does not cover damage to the rental unit itself.', key:[14]}, //HO-4
      {  label: 'Home - HO-5 (Comprehensive)', value: 'The highest level of home and personal belonging coverage. Has the same coverage conditions as HO-3, but covers the replacement cost of damaged property/items instead of the cash value at time of destruction.', key:[15]}, //HO-5
      {  label: 'Home - HO-6 (Walls-In)', value: 'Insurance designed to cover people living in a condo or co-op. The policy covers damages to the walls, floors, ceiling, personal belongings, and renovations you make to the property. It also covers liability, medical payments to others injured by your property, and additional living expenses incurred by the property. This type of insurance often covers similar cases to your condo association’s insurance policy, so it’s recommended to review both to make sure there’s no gaps in coverage or areas that both policies cover.', key:[16]}, //HO-6
      {  label: 'Home - HO-7', value: 'Insurance designed to cover single/double-wide manufactured homes, single/double-wide mobile homes, trailer, sectional homes, and modular homes. Works similarly to HO-3. Is an open-peril policy protecting the structure. Belongings are covered for the same scenarios described in HO-3. It only covers damages when the home is stationary.', key:[17]}, //HO-7
      {  label: 'Home - HO-8', value: 'Insurance designed to protect older homes, typically those more than 40 years old. Often applicable for historic homes and registered landmarks. These homes are a special case because their cost of repair often far exceeds their market value. Covers against fire/lightning, windstorm/hail, explosion, riot/civil commotion, damage from aircraft, damage from vehicles, smoke, vandalism, theft, and volcanic eruptions. Additionally covers liability, medical payments to others injured by your property, and additional living expenses incurred by the property.', key:[18]}, //HO-8
      {  label: 'Life - Burial', value: 'Covers expenses relating to your burial in the event of your death. Covers expenses such as a funeral, burial, and outstanding medical bills. Coverage typically has a low cap and especially if you die close to when the insurance was taken out your beneficiaries might not receive the full benefit. Recommended for people who want to have their burial covered after death.', key:[7]}, //Burial
      {  label: 'Life - Term', value: 'Replaces your income for your beneficiaries in the event of your death. Typically purchased in lengths of 5, 10, 15, 20, 25, or 30 years. Recommended for most people looking to acquire life insurance.', key:[8]}, //Term
      {  label: 'Life - Universal', value: 'Covers your entire life, but flexes to meet your needs over time. Allows for adjustable premiums, although generally requires that premiums increase over life. The drawback is that payout isn’t as guaranteed as it would be with whole insurance. Has a guaranteed return rate on the policy’s value. Recommended for people who want a plan that covers their entire life, but with more flexibility than whole life insurance.', key:[9]}, //Universal
      {  label: 'Life - Variable', value: 'A type of cash value life insurance, in which part of your premium goes to investments. Has a fixed premium and guaranteed payout regardless of the market, but payout can increase when the market does well. Recommended for people who have a higher risk tolerance.', key:[10]}, //Variable
      {  label: 'Life - Whole', value: 'Covers your entire life, but typically has a higher premium. Has a guaranteed return rate on the policy’s value. Recommended for people who just want a straightforward life insurance plan and don’t mind paying the higher premium.', key:[11]}, //Whole
      {  label: 'Other - Goat', value: 'Makes your pet goat impervious to all damage. An exclusive offering of Silly Goose Insurance not available from any other provider.', key:[12]}
  ]


    const handleSelectChange = (newChoice) => {
        if (newChoice !== curChoice) {
            setCurChoice(newChoice)
            setSelected(newChoice);
            setSubmitted(false);
        }
    };

    const modalWin = () => {
      return (
        <Modal
          open={modalOpen} 
          className='flex justify-center items-center '
          id='game_text'
        >
          <Box className="flex flex-col justify-center p-24" style={{backgroundImage: "url(/images/EndBacker.png)", backgroundRepeat: "no-repeat",
            backgroundSize: "cover", maxWidth: 620, maxHeight: 480, minWidth: 620, minHeight: 480, postion: "fixed",top: "5%", left: "25%", right: "25%"}}>
            <h1 className='text-center text-5xl mb-3 text-white'>You win!</h1>
            <button className='bg-blue-500 hover:bg-blue-700 py-3 px-4 font-bold bottom-10  rounded-md' onClick={() => {window.location.reload()}}>Play again!</button>
          </Box>
        </Modal>
      )
    }
    
    const handleSubmit = () => {
      // Handle the submission here, you can access the selected value in the 'selected' state
      if (selected && submitted === false) {
        // Do something with the selected value
        console.log("Submitted: ", submitted)
        setSubmitted(true); // Set submitted to true to indicate the user has submitted their choice

        if (selected.key.includes(props.num)) {
            setScore(score + 1)
            if (score >= quota) {
              setModalOpen(true)
            }
        }
      } else {
        // Handle the case where the user hasn't selected anything
        console.log('Please select an option');
      }
      
    };


    
  return (
    <div className='h-[98%] pb-2 m-3'>
        {modalOpen ? modalWin() : ""}

        <div className='bg-zinc-500 mx-2 p-2 rounded-md text-white mb-3 font-bold text-3xl'>
            Satisfied Clients: {score} / {quota+1} 
        </div>
        <div className='bg-zinc-500 mx-2 rounded-md p-2'>
        <Select
            options={options}
            onChange={handleSelectChange}
            className='bg-zinc-500'
            defaultValue={null}
        />
        </div>
        
        <div className='flex flex-col m-3'>
            {selected && (
                <div className='bg-zinc-500 p-2 rounded-md border text-white border-zinc-500 my-4'>
                <p>{selected ? selected.value : ''}</p>
              </div>
            )}
            <div className=''>
                {selected && (
                    <button onClick={() => {props.refresh(); handleSubmit();}} className='bg-green-500 w-full rounded-md p-2'><Done/> Recommend</button>
                )}
                

            </div>
        </div>
    </div>
  );
}

 

/*
{selected && (
                    <div>{selected.key.includes(props.num) ? "Correct!" : "Wrong :( womp womp"}</div>
                )}
*/