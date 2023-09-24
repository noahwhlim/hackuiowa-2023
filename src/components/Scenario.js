import React from 'react'


export const Scenario = (props) => {
    const scenes = ["Amelia, a 28-year-old, recently financed a new car. Worried about potential damage from non-driving incidents like vandalism or natural disasters, she's exploring coverage options to protect her investment.",
                    "Bianca, a 35-year-old car owner, worries about the expense of fixing her vehicle if it's damaged in an accident. She's exploring options to safeguard her investment.",
                    "Charlie, a 29-year-old with a car loan, is concerned about the potential financial gap between what he owes on the loan and the actual value of his car. He's exploring options to protect himself from unexpected expenses.",
                    "Dana, a responsible 29-year-old driver, is aware of the potential liability from accidents she might cause. She's looking into options to fulfill legal requirements and protect others in case of accidents.",
                    "Ella, a cautious 27-year-old driver, values the well-being of her vehicle's occupants after an accident. She's considering coverage to help with medical expenses and protect herself and her passengers.",
                    "Frank, a 25-year-old driver, is concerned about the well-being of his vehicle's occupants in case of an accident. He's exploring options to cover expenses like hospital bills and lost income, especially since personal injury protection is required in some states and can be beneficial for managing high medical expenses.", 
                    "George, 23, wants to protect himself on the road. He's considering coverage for underinsured motorists, which is required in some states and recommended for added security.",
                    "Hank, a 136-year-old, is thinking about the future and wants to ensure that his burial expenses are taken care of when he's no longer here. He's exploring coverage that takes care of funeral and burial expenses, making it easier on loved ones after his passing.",
                    "Inna, 23, is thinking about securing her family's financial future. She's considering a coverage option that provides income replacement for her beneficiaries in case of her passing. It's a recommended choice for those looking to ensure their loved ones' financial stability.",
                    "Juliet, 27, wants to ensure her life is insured for the long term. She's exploring a flexible option that can adapt as her needs change. While not as guaranteed as some choices, it provides her with peace of mind and potential growth.",
                    "Kiara, 34, wants to protect her family's future. She's considering an insurance plan that combines life coverage with investments, offering a fixed premium and the potential for increased payouts based on market performance.",
                    "Mike, 40, prioritizes his family. He wants a straightforward life insurance plan that covers his entire life and offers a guaranteed return on the policy's value. Despite the higher premium, Mike values the lifelong coverage it provides",
                    "Meet Grace, 27, a devoted farmer with a beloved pet goat, Coco. She's considering exclusive insurance from Silly Goose, offering complete protection for Coco, making her impervious to all harm.",
                    "Sara, a 32-year-old homeowner, is actively searching for a comprehensive insurance policy. She wants to protect her valuable assets, including her house and personal belongings, against various risks.",
                    "James, a 28-year-old tenant, is in the market for insurance to protect his rented apartment. He's looking for a policy that safeguards his personal belongings and provides coverage in case of unforeseen events.",
                    "Sophia, a 45-year-old homeowner, is considering a robust insurance plan for her residence. She wants coverage that not only protects her home and belongings but also ensures they are replaced at their full value if damaged.",
                    "Linda, 40, seeks insurance for her condo. She wants coverage for her walls, floors, ceiling, belongings, and renovations. She also values liability, medical payments, and living expenses coverage. She knows this insurance may overlap with her condo association's policy and plans to review both for complete protection.",
                    "Mark, 45, is looking for insurance for his manufactured home. He needs coverage for the structure and belongings when the home is stationary. Mark prefers an open-peril policy for comprehensive protection, similar to HO-3.",
                    "Lisa, 55, owns a historic home that's over 40 years old and needs specialized insurance. She's looking for coverage against various perils like fire, vandalism, and theft, which are essential for older homes. Lisa is also interested in liability protection and coverage for additional living expenses.",
                  ];

                  
                  //Amelia -  Auto - Comprehensive
                  //Bianca -  Auto - Collision
                  //Charlie - Auto - Gap
                  //Dana -    Auto - Liability
                  //Ella -    Auto - MedPay
                  //Frank -   Auto - Personal Injury Protection
                  //George -  Auto - Underinsured Motorist 
                  //Hank -    Life - Burial
                  //Ina -     Life - Term
                  //Juliet -  Life - Universal
                  //Kiara -   Life - Variable
                  //Mike -    Life - Whole
                  //Grace -   Other - Goat
                  //Sara -    Home - Special Form/HO-3
                  //James -   Home - Renters/HO-4
                  //Sophia -  Home - Comprehensive/HO-5
                  //Linda -   Home - HO-6 (Walls-In)
                  //Mark -    Home - HO-7
                  //Lisa -    Home - HO-8



  return (
    <div className='flex bg-zinc-500 m-3 p-2 rounded-md h-[98%]'>
        {scenes[props.num]} {props.num}

    </div>
  )

}

/**
Auto 
ATV
Boat

{  label: 'Auto - Collision', value: 'Covers collision damages to your vehicle from any source regardless of fault. Required for people with a car lease or loan. Recommended for people who wouldn\'t be able to afford out of pocket repairs if the car is damaged.'},
        {  label: 'Auto - Comprehensive', value: 'Covers damages to your vehicle from non-collision events such as vandalism or natural disasters. Required for people with a car lease or loan. Recommended for people who wouldn\'t be able to afford out of pocket repairs if the car is damaged'},
        {  label: 'Auto - Gap', value: 'Covers the "gap" in value between what you may owe on a car loan and what your car is actually worth at the time of an irreparable accident. For example, to purchase a car you often will take out a loan. However once in your possession the car will be worth less at resale than the total cost of the loan. In the event the car is totalled, normal auto-insurance will pay back what your car is currently worth, which could be less than what you owe on the car. Gap insurance cover the remaining gap between whatever normal insurance paid back and the remainder of your loans. Recommended for people with a car loan.'},
        {  label: 'Auto - Liability', value: 'Covers damages to others from accidents you caused. Does not cover any damages to you. Legally required in all states except for New Hampshire and Virginia'},
        {  label: 'Auto - MedPay ', value: 'Covers medical expenses for occupants of your vehicle after an accident. Can also cover co-pays and deductibles of other insurance policies including health insurance and PIP. Required for some residents of Maine and New Hampshire. Recommended in general as supplement to health insurance and PIP coverage.'},
        {  label: 'Auto - Personal Injury Protection', value: 'Covers assorted expenses for occupants of your vehicle after an accident. Qualifying expenses can range from hospital bills to lost income. Required for residents of DE, FL, MI, MA, KS, MN, NY, UT, OR, ND, and NJ. Recommended in general to protect against high medical expenses.'},
        {  label: 'Auto - Underinsured Motorist', value: 'Covers medical and vehicle repair expenses if the other driver in the accident doesn\'t have enough insurance to cover your expenses. Required for residents of CT, IL, KS, MA, MD, ME, MN, MO, NC, ND, NE, NH, NY, OR, SC, SD, VA, VT, WI, WV, and D.C. Recommended if you don\'t already have collision or personal injury protection insurance.'},
        {  label: 'Life - Burial', value: 'Covers expenses relating to your burial in the event of your death. Covers expenses such as a funeral, burial, and outstanding medical bills. Coverage typically has a low cap and especially if you die close to when the insurance was taken out your beneficiaries might not receive the full benefit. Recommended for people who want to have their burial covered after death.'},
        {  label: 'Life - Term', value: 'Replaces your income for your beneficiaries in the event of your death. Typically purchased in lengths of 5, 10, 15, 20, 25, or 30 years. Recommended for most people looking to acquire life insurance.'},
        {  label: 'Life - Universal', value: 'Covers your entire life, but flexes to meet your needs over time. Allows for adjustable premiums, although generally requires that premiums increase over life. The drawback is that payout isn’t as guaranteed as it would be with whole insurance. Has a guaranteed return rate on the policy’s value. Recommended for people who want a plan that covers their entire life, but with more flexibility than whole life insurance.'},
        {  label: 'Life - Variable', value: 'A type of cash value life insurance, in which part of your premium goes to investments. Has a fixed premium and guaranteed payout regardless of the market, but payout can increase when the market does well. Recommended for people who have a higher risk tolerance.'},
        {  label: 'Life - Whole', value: 'Covers your entire life, but typically has a higher premium. Has a guaranteed return rate on the policy’s value. Recommended for people who just want a straightforward life insurance plan and don’t mind paying the higher premium.'},
        {  label: 'Other - Goat', value: 'Makes your pet goat impervious to all damage. An exclusive offering of Silly Goose Insurance not available from any other provider.'}


 */