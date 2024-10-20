// *** SHOW INFO ***
show_info_btn.addEventListener('click', () => {
    if (info.classList.contains("info-visible")) {
        info.classList.remove('info-visible')
        show_info_btn.style.background = "#fff";
        show_info_btn.style.color = "#000";
        show_info_btn.style.borderColor = "#000";
    } else {
        info.classList.add('info-visible')
        show_info_btn.style.background = "#000";
        show_info_btn.style.color = "#fff";
        show_info_btn.style.borderColor = "transparent";
    }
})

// *** AN ARRAY OF ALL SENTENCES
let levelOne = [
"Private Larson, dismantle the enemy’s radio tower at 0340 hours tonight.",
"Lieutenant Turner, coordinate with Bravo Company for a synchronized attack at dawn.",
"Resupply the front-line troops with ammunition and water by 1300 hours.",
"Establish communication with HQ at 0700 to receive the next set of coordinates.",
"Take two squads and sweep the forest area near Sector 14 for enemy combatants.",
"By 2200 hours, fortify the eastern defense line and prepare for a night assault.",
"Ensure that all heavy weaponry is operational before the assault on Sector Tango.",
"Set up claymore mines at the base of Hill 19, and be on standby for further orders.",
"Staff Sergeant Beckett, lead the assault team on the enemy outpost at 0400 hours.",
"Patrol the East Wing of the mall every two hours, starting at 0800, and check all exits.",
"Officer Martinez, ensure that the loading dock is locked and monitored after 2100.",
"Check Mr. Thompson’s visitor ID, and escort him to Conference Room 3 on the fifth floor.",
"By 1800, monitor the security feeds for any unusual activity in the retail section.",
"Confirm that all fire exits are clear before the fire drill begins at 1430.",
"Advance to checkpoint Bravo by 0900 hours, and hold until reinforcements arrive.",
"Lieutenant Jackson, report to Captain Rivera in the command center immediately.",
"Private Mitchell, clear the south wing and disable the enemy's communication tower.",
"Secure the northern perimeter, and make sure to deploy the drones for surveillance.",
"By 1500 hours, set up an outpost near Sector Delta, and fortify the position.",
"Sergeant Cooper, lead your team to recover the intel from Building 47 before sundown.",
"Ensure all units are equipped with night vision goggles before the night raid.",
"Deploy the artillery strike on coordinates 32°N 74°W, confirmed by Sergeant Miller.",
"Corporal Davis, escort the wounded to the medivac chopper at Landing Zone Alpha.",
"Prepare to launch the assault on the enemy's main compound at 0500 tomorrow.",
"Staff Sergeant Grey, secure the bridge at Point Echo before enemy forces arrive.",
"By 0800, position snipers on the ridge overlooking Sector Zulu for recon.",
"Radio headquarters and request backup before engaging the enemy in the forest.",
"Lieutenant Parker, lead your squad to disable the enemy's armored vehicles.",
"Set up a temporary command post at the village crossroads by noon.",
"Secure the enemy’s ammunition depot and confirm with Command at 2100 hours.",
"By 1800, take control of the high ground overlooking the valley.",
"Provide covering fire for the evacuation of Alpha Company at Grid 27.",
"Deploy the UAV for reconnaissance and report findings to Sergeant Cole.",
"By 1200, confirm that all surveillance cameras in the West Wing are operational.",
"Activate the alarm system at 2200, and disable it for maintenance at 0700 tomorrow.",
"Check the package delivered to the loading dock for any anomalies, and log it by 1400.",
"Ensure that the control room is staffed at all times, especially during the evening shift.",
"Guard the entrance to the CEO's office during the board meeting from 1600 to 1700.",
"Perform a thorough check of all vehicles entering the premises between 0800 and 1000.",
"By 0930, inspect all emergency exits in the North Tower for any blockages.",
"Escort the VIPs to the event at 1300, and remain on standby until their departure at 1600.",
"Guard the north exit after 2300, and prevent unauthorized personnel from entering.",
"At 0500, check the warehouse’s interior security cameras for any overnight disturbances.",
]

let levelTwo = [
"Escort the delivery personnel from Baker Industries to the warehouse, and ensure all packages are scanned.",
"Secure the parking garage after 2100, and ensure that the barriers are lowered for the night.",
"Officer Daniels, patrol the storage facility at 0300, and report any suspicious vehicles near the perimeter.",
"Staff Sergeant Matthews, retrieve the classified documents from HQ and deliver them to Forward Base Delta.",
"Prepare the convoy for departure at 0600, ensuring all vehicles are fully stocked with supplies.",
"Monitor the construction site at the West Gate during lunch hours, and ensure safety protocols are followed.",
"Respond to any fire alarms within the building in under two minutes, ensuring evacuation routes are clear.",
"Lock all entrances to the south parking lot by 1900, and ensure the CCTV cameras are operational.",
"Confirm that the backup power generators are fully functional before the power outage test at 1200.",
"Officer Hayes, keep a close watch on the main entrance from 1700 to 1900 when foot traffic is heaviest.",
"Ensure that all access codes are changed weekly, and report any irregularities to the head of security.",
"Officer Jenkins, monitor the visitor flow at the entrance from 0900 to 1200 during the peak hours.",
"Officer Taylor, review yesterday’s footage from 1500 to 1800 for any potential security breaches.",
"Ms. Richards, verify the security codes for the restricted access areas before closing time.",
"Double-check the ID badges of all contractors working on the electrical system on Level 7.",
"Escort Ms. Franklin to the executive offices, and ensure no unauthorized personnel follow her.",
"By 2200, ensure all entrances to the server room are locked and that the keycards are deactivated.",
"Prepare a cost-benefit analysis of switching to renewable energy sources for our warehouses.",
"You’ll work closely with the design team to develop marketing materials for our international clients.",
"Compile a list of vendors who can provide eco-friendly packaging options by the end of the month.",
"Develop a project plan for the relocation of our West Coast distribution center to a larger facility.",
"You’ll be responsible for tracking and reporting KPIs for the customer service department on a weekly basis.",
"Identify potential logistics partners in emerging markets, and present your findings at the next board meeting.",
"Create a timeline for implementing a new CRM system across all departments by the end of Q2.",
"Lead a cross-functional team to address customer complaints and improve overall service satisfaction.",
"Prepare a detailed report on the latest industry trends affecting international shipping regulations.",
"Develop a quarterly performance review template for use by department heads across all locations.",
"Welcome to GlobalTech Solutions, headquartered in New York City, specializing in logistics and supply chain management.",
"You’ll be working closely with Sarah Bennett, our Head of Operations, and the warehouse management team.",
"GlobalTech operates in 12 countries, including Germany, Japan, and Brazil, with over 3,000 employees worldwide.",
"Our main focus is streamlining logistics processes to improve efficiency and reduce shipping times.",
"Your role will involve coordinating with the operations team and managing key client accounts such as Backridge Industries.",
"Each department reports to our executive team, which includes CFO Michael Stone and COO Rebecca Smith.",
"You’ll receive training on our in-house software platform, which tracks deliveries in real time.",
"Our company was founded in 2005 and has since grown into a leading logistics provider across Europe and North America.",
"You’ll report directly to Robert Clark, who oversees the warehouse operations across three major regions.",
"Our main logistics center is located in Warsaw, Poland, and handles over 20,000 shipments per month.",
"We work with major clients like Tesla and Amazon, ensuring timely and accurate deliveries.",
"Our customer satisfaction rates have been consistently high, thanks to our focus on quality and efficiency.",
"You’ll start by shadowing our senior logistics coordinator, Emma Hill, who will guide you through your daily tasks.",
"Your first project will be to improve the shipping process for our international clients by 10%.",
"Our company values employee development, offering continuous learning through workshops and online courses.",
"You’ll have access to a team of support staff to help you with any technical issues you encounter.",
"Each division holds weekly strategy meetings to align with our quarterly business goals.",
"You’ll be handling sensitive data, so confidentiality and adherence to our security protocols are paramount.",
"Our marketing department, led by Angela Thompson, works closely with operations to promote new business initiatives.",
"We hold quarterly reviews to assess performance, and bonuses are distributed based on individual contributions.",
"You’ll work with an internal project management system to keep track of milestones and deadlines.",
"GlobalTech is committed to reducing its environmental footprint, with several sustainability projects in the works.",
"You’ll collaborate with the IT department to streamline the integration of new software solutions.",
"Our annual corporate retreat takes place in Spain, providing an opportunity for cross-departmental networking.",
"As part of your onboarding, you’ll receive a detailed overview of our client portfolio, including historical performance metrics.",
"Your role will also involve collaborating with the finance department to forecast and allocate resources effectively.",
"Each department sets monthly performance goals, reviewed by upper management at the end of each quarter.",
"You’ll work with stakeholders to ensure smooth communication between departments and external partners.",
"Our team is divided into four core areas: operations, customer service, IT, and finance.",
"You’ll have access to our employee portal, which includes training modules, company updates, and HR resources.",
"You will manage the development of a marketing campaign for our new line of eco-friendly products, set to launch in Q3.",
"Prepare a market analysis report for the expansion of our logistics operations into the Asian market.",
"By next Friday, submit a proposal for reducing operational costs in our European distribution centers.",
"Lead a team of five to develop a new software module that integrates real-time tracking with client systems.",
"By next Monday, design a customer satisfaction survey that captures feedback on shipping times and product condition.",
"Develop a comprehensive strategy for the upcoming product launch, including target markets, pricing, and advertising.",
"Oversee the implementation of a new inventory management system, ensuring minimal disruption to daily operations.",
"Research and present a case study on a recent technological innovation in logistics that could benefit our business.",
"Prepare a presentation detailing the risks and benefits of expanding our client base in South America.",
"Your first task will be to improve the order fulfillment rate by 15% within the next three months.",
"Collaborate with the HR department to design a new employee engagement program for remote workers.",
"Your role will include analyzing and recommending new technologies for optimizing supply chain management.",
"Your first assignment will be to assess the financial health of three of our largest clients and present your findings.",,
"You’ll be tasked with optimizing our supply chain network to reduce lead times by 20% over the next six months.",
"Coordinate with the legal team to ensure all contracts with third-party vendors are compliant with industry standards.",
"Prepare a comprehensive onboarding plan for new employees in our distribution centers.",
"Analyze competitor pricing strategies, and recommend adjustments to our product line for increased competitiveness.",
"Your first task will be to design a new system for managing incoming and outgoing shipments to improve accuracy.",
"Lead a workshop on team collaboration tools, focusing on improving communication between remote teams.",
"Develop a proposal for expanding our transportation fleet, considering the potential return on investment.",
]

let leverThree = [
"You are responsible for scheduling a meeting between the product development team and the marketing team at 10:00 AM next Wednesday to discuss strategies for our upcoming launch.",
"Prepare a market research report by Friday at 5 PM, focusing on the potential of expanding our logistics services to Eastern European countries, especially Poland and Hungary.",
"By the end of this month, analyze the last six months of client feedback and recommend three actionable strategies for improving customer satisfaction and reducing product returns.",
"Collaborate with the HR and IT departments to implement a new employee training program that focuses on cybersecurity best practices for remote workers, rolling out by Q2 of next year.",
"Develop a comprehensive marketing plan targeting eco-conscious consumers in the North American region for our new sustainable packaging line, including an outline of potential partnerships with influencers.",
"Your task is to lead a cross-departmental team in the design and launch of an internal communication platform that integrates messaging, file sharing, and task management, with a proposed launch date in Q3.",
"By the end of this week, prepare a presentation for the board of directors that outlines the financial risks and operational challenges of expanding our manufacturing operations to Southeast Asia, including a timeline of necessary investments.",
"Lead a task force to investigate inefficiencies in our shipping process, and deliver a report by the end of the quarter, detailing specific changes that could improve our on-time delivery rate by at least 10%.",
"Coordinate with both the legal and finance teams to develop a proposal for renegotiating vendor contracts, focusing on reducing overall supply costs by 15% while maintaining product quality and ensuring compliance with industry regulations.",
"Over the next month, you will work closely with the operations and customer service teams to develop a comprehensive customer feedback strategy that includes surveys, focus groups, and social media monitoring, aimed at improving our customer experience by the end of the fiscal year.",
"Your task is to analyze the performance of our five major distribution centers over the last fiscal year, focusing specifically on inventory turnover rates, labor costs, and warehouse capacity, and deliver a full report by the next quarterly review.",
"By the end of next month, you will be expected to lead a cross-functional team that includes members from operations, IT, and finance to implement a new enterprise resource planning (ERP) system that integrates supply chain management and inventory control.",
"Your first major assignment will be to develop a risk management plan for our international logistics operations, taking into account geopolitical risks, trade regulations, and potential supply chain disruptions, with the goal of minimizing delays and protecting profit margins.",
"As part of the new sustainability initiative, you’ll collaborate with the procurement and product development teams to source eco-friendly materials for our packaging, and you’ll present a proposal by the end of the quarter that includes cost analysis and potential environmental impact.",
"You are responsible for leading the quarterly performance review for the European region, which involves gathering data from each department, assessing key performance indicators (KPIs), and providing actionable insights for improving efficiency and cutting costs by at least 8% by year-end.",
"Over the next three months, you will work with our IT department and third-party consultants to assess the feasibility of transitioning our logistics operations to a cloud-based platform that offers real-time tracking and predictive analytics to improve decision-making and resource allocation.",
"By the end of Q3, you are tasked with developing and executing a multi-phase strategy for the expansion of our e-commerce operations into new markets, particularly in the Asia-Pacific region, focusing on improving delivery times, customer satisfaction, and warehouse efficiency.",
"Within the next four weeks, you’ll collaborate with the finance team to prepare a detailed cost-benefit analysis for upgrading our current fleet of delivery vehicles to electric-powered trucks, taking into account environmental regulations, long-term fuel savings, and initial investment costs.",
"You are tasked with overseeing the rollout of a new company-wide health and safety program in compliance with updated industry standards, working closely with HR, legal, and external safety consultants, and ensuring full compliance before the end of the year.",
"As part of the business continuity plan, you’ll lead the development of a disaster recovery strategy for our IT infrastructure, including backup systems, data recovery protocols, and coordination with key stakeholders, with the goal of minimizing downtime in the event of a cyberattack.",
]

let levelFour = [
"You are responsible for overseeing the expansion of our North American distribution network, which involves selecting and negotiating contracts with third-party logistics providers, assessing warehouse locations based on proximity to key markets, and developing a phased rollout plan that ensures seamless integration with our existing supply chain by Q4 of next year.",
"In collaboration with the legal and compliance teams, you’ll develop a comprehensive export compliance program that ensures adherence to all relevant trade regulations, including the Export Administration Regulations (EAR) and the International Traffic in Arms Regulations (ITAR), with the objective of reducing customs delays and avoiding potential fines or penalties.",
"By the end of this quarter, you are tasked with leading a team of analysts to conduct an in-depth competitor analysis, which includes evaluating their pricing strategies, market positioning, customer acquisition tactics, and product differentiation, and presenting actionable recommendations for improving our market share in key regions by at least 5% over the next fiscal year.",
"Your primary responsibility over the next six months will be to design and implement a strategic sourcing initiative aimed at reducing material costs by 12% across our European supply chain, while maintaining product quality and delivery timelines, and ensuring that all suppliers comply with our corporate social responsibility (CSR) guidelines.",
"You will work closely with the finance and HR departments to develop a comprehensive compensation and benefits package for our remote workforce, which should include competitive salaries, performance-based incentives, and wellness programs, with the goal of improving employee retention and satisfaction by at least 15% by the end of the year.",
"As part of our corporate social responsibility initiative, you’ll collaborate with the marketing and sustainability teams to launch a new public-facing campaign that highlights our environmental efforts, such as reducing carbon emissions and sourcing eco-friendly materials, and you’ll prepare a full presentation by the annual shareholders' meeting in September.",
"By the end of next quarter, you are tasked with leading the integration of our European and Asian supply chain operations, which will require the development of new logistical processes, streamlining of warehouse operations, and implementation of a global inventory tracking system that allows for real-time visibility of stock levels and order fulfillment across both regions.",
"Over the next year, you will work with senior leadership to develop a strategic roadmap for the global expansion of our e-commerce platform, focusing on key markets such as India, Brazil, and South Africa, and ensuring that all legal, financial, and operational aspects are addressed to support a seamless rollout in each region.",
"Your role will involve leading a cross-functional team to design and implement a new enterprise resource planning (ERP) system that integrates all aspects of our supply chain, from procurement to order fulfillment, with the goal of improving efficiency, reducing costs, and providing real-time insights to decision-makers across the company.",
"You are tasked with developing a five-year growth plan for our logistics operations, which includes expanding into new markets, adopting the latest technologies in automation and AI, improving sustainability initiatives, and increasing warehouse capacity by 30%, all while maintaining a strong focus on operational efficiency and profitability.",
"Over the next six months, you are responsible for developing and executing a detailed procurement strategy aimed at diversifying our supplier base across Europe and Asia, with the objective of reducing reliance on single-source suppliers by 25%, minimizing risks from geopolitical issues, and ensuring all vendors meet our stringent sustainability and ethical sourcing standards.",
"Your next assignment will be to lead a multi-disciplinary team in conducting a comprehensive audit of our logistics operations across all regions, focusing on areas such as order fulfillment rates, warehouse optimization, transportation costs, and customer satisfaction, and providing the executive team with a final report outlining actionable insights for improving operational efficiency by at least 10% within the next fiscal year.",
"You will collaborate with the finance, HR, and legal departments to develop a comprehensive labor cost reduction plan for our North American distribution centers, which includes optimizing staff schedules, renegotiating union contracts, and implementing new workforce management technologies, with the goal of reducing labor costs by 15% by the end of the next fiscal year.",
"By the end of this quarter, you’ll be tasked with creating a five-year capital expenditure plan that includes investments in new warehouse facilities, advanced automation technologies, and fleet expansion, with the ultimate goal of increasing our global distribution capacity by 30% while maintaining or improving our current delivery times and service levels.",
"You are responsible for leading the design and implementation of a company-wide cybersecurity initiative aimed at protecting sensitive customer data and preventing potential cyberattacks, which will involve working closely with the IT, legal, and compliance teams to ensure that all systems, protocols, and policies are fully aligned with international data protection regulations such as GDPR and CCPA.",
"Your next project will involve managing the end-to-end process of opening a new distribution hub in Eastern Europe, which includes conducting site evaluations, negotiating property leases, hiring and training local staff, establishing relationships with regional logistics partners, and ensuring full operational readiness within the next 12 months.",
"Within the next six weeks, you will work closely with the marketing and finance teams to develop a detailed plan for launching a new line of eco-friendly products in the North American market, including setting pricing strategies, coordinating with advertising agencies, securing key retail partnerships, and ensuring that all supply chain processes are ready to meet the anticipated demand.",
"You are tasked with leading the digital transformation of our supply chain, which will involve selecting and implementing advanced analytics tools, predictive algorithms, and AI-based platforms to improve real-time decision-making, reduce operational costs, and enhance overall logistics performance by at least 20% over the next 18 months.",
"By the end of Q2, you will be responsible for spearheading a global talent acquisition strategy aimed at attracting top-tier professionals in logistics, procurement, and operations management, with a focus on diversifying our workforce, improving employee retention, and ensuring that we meet our long-term growth objectives in key markets such as Asia and Latin America.",
"You will be overseeing the integration of our newly acquired subsidiary into our existing logistics operations, which will require coordinating with legal, finance, and IT departments to ensure a smooth transition, aligning systems and processes, and ensuring that the acquisition leads to a 10% increase in operational efficiency by the end of the year.",
]
let levelFive = [
"You are to lead Alpha Squad in a night reconnaissance mission along the eastern perimeter, ensuring you gather intel on enemy positions and report back by 0400 hours without being detected.",
"Your next task is to secure the southern outpost and establish a defensive perimeter with anti-vehicle barricades, sniper coverage, and tripwire explosives, ensuring no unauthorized personnel breach our lines until reinforcements arrive in 12 hours.",
"Coordinate with the Air Force to arrange an aerial strike on the identified enemy stronghold, ensuring the attack is precisely timed with ground movements, and confirm the elimination of the target before calling in the extraction team by 1800 hours.",
"You will conduct a full tactical sweep of Sector 7 within the next 48 hours, disarming any explosives, securing intelligence files, and clearing the area for our infantry unit’s advancement by the time they arrive.",
"In the event of an ambush, you are to fall back to the second defensive line, deploy smoke grenades for cover, and radio for air support while ensuring all units regroup for a counteroffensive strike.",
"You are responsible for overseeing the installation of security cameras across all seven entrance points in the facility, ensuring that each camera provides full 360-degree coverage and real-time streaming capabilities back to the control room, with the entire system operational by 1800 hours.",
"During the upcoming high-profile event, your duty is to monitor all VIP entries, verify credentials using biometric scanners, and ensure that only pre-approved personnel are allowed into the restricted access zones. All reports of any suspicious behavior must be communicated immediately to headquarters.",
"At 0800 hours, perform a full security sweep of all external perimeters, checking for any signs of tampering with the motion sensors, security lights, or perimeter fences. Ensure that all guards remain on high alert, particularly around the southeast sector, where recent breaches have occurred.",
"You will handle the transfer of classified materials to our secure storage facility, ensuring that all items are transported using armored vehicles, escorted by armed security, and signed off by two senior officers at both the departure and arrival locations.",
"In case of a fire or emergency evacuation, ensure that all exits are clear, follow the designated evacuation protocols, and coordinate with local emergency responders to establish a safe perimeter around the facility.",
"Upon arrival at the disaster zone, set up triage tents within the first 15 minutes, prioritize patients with severe trauma or life-threatening injuries, and ensure that the medical team is fully equipped and ready for mass casualty care by 0700 hours.",
"You are to lead the medical evacuation effort, coordinating with helicopter pilots to airlift critical patients to the nearest hospital, ensuring all necessary life-saving equipment is in place during the flight, and keeping in constant communication with ground control.",
"Your task is to assess the condition of the injured personnel, stabilize them with IV fluids and emergency medication, and prepare them for immediate transport while reporting updates on their status to the hospital ER team.",
"Oversee the distribution of medical supplies in the field, ensuring that all frontline medics are fully stocked with first aid kits, trauma bags, and defibrillators, and maintain constant communication with logistics to avoid any shortages during the rescue operation.",
"In the event of a chemical spill, you are to initiate the decontamination procedure, sealing off the affected area, equipping all staff with hazmat suits, and coordinating with the local environmental agency to prevent further exposure to the public.",
"You are responsible for overseeing the completion of the foundation for the new skyscraper, ensuring that all structural reinforcements are in place, concrete pouring is completed within the next 48 hours, and all safety protocols are strictly followed.",
"Your task is to install the electrical wiring for the north wing of the building, making sure that all systems are compliant with local building codes, and coordinating with the inspector to schedule the final check by Friday afternoon.",
"By next week, you are expected to finalize the design of the new bridge’s support structure, taking into account the environmental conditions and ensuring that the materials used meet both durability and sustainability standards.",
"You will lead a team to repair and reinforce the dam’s floodgates, ensuring that all hydraulic systems are functional, and providing a detailed report of the repairs made and any potential risks identified during the maintenance process.",
"During the next phase of construction, you are tasked with managing the installation of the solar panels on the roof of the corporate headquarters, coordinating with the energy consultants to maximize efficiency, and ensuring completion by the end of Q2.",
"Within the next two hours, you are required to troubleshoot and resolve all connectivity issues affecting the main server, ensuring that all departments regain full access to their data and applications without any further interruptions.",
"You will be tasked with implementing a new cybersecurity protocol across all office networks, installing advanced firewall protection, and setting up employee training sessions to prevent phishing attacks and unauthorized access.",
"By the end of this week, your team must finalize the migration of all company data to the cloud-based system, ensuring that the process is smooth, with minimal downtime, and that all sensitive information is securely encrypted.",
"Your responsibility is to upgrade the current database management software, ensuring compatibility with the existing IT infrastructure, and conducting performance tests to verify that the system can handle increased data loads without affecting speed.",
"During the next system update, you will ensure that all hardware and software installations are completed overnight to avoid disruption to daily operations, and that a backup plan is in place should any critical errors arise.",
"As part of your role, you’ll be expected to develop a three-year marketing strategy for launching our new product line, coordinating with both local and international teams, and presenting your findings to the executive board in the final quarter of the fiscal year.",
"You will be responsible for overseeing the financial consolidation process during the company’s upcoming merger, ensuring that all accounting systems are aligned, and providing a detailed financial analysis to ensure the transaction is completed smoothly.",
"Your task is to prepare a project timeline for the development of a new mobile application, outlining key deliverables, deadlines, and budget constraints, while ensuring that all stakeholders are kept informed of progress and any potential roadblocks.",
"Within your first six months, you’ll be leading a cross-departmental initiative aimed at improving customer retention by analyzing user feedback, enhancing service offerings, and implementing new loyalty programs to increase overall satisfaction.",
"Your role will involve conducting a detailed market analysis of competitors in the renewable energy sector, identifying key trends, and making recommendations on how our company can gain a competitive edge while adhering to sustainability goals.",
"You are to take the lead in interviewing witnesses from the robbery scene, gather their statements, and cross-reference them with the available CCTV footage from 1700 to 1830 hours, reporting any discrepancies by end of day.",
    "For this investigation, you will coordinate with forensics to analyze the DNA samples collected at the crime scene, ensuring the results are expedited within 48 hours to confirm the suspect’s identity before issuing a warrant.",
    "You’ll be overseeing the undercover operation at the port, tracking the suspected smuggling route and reporting any unusual movements or incoming shipments, making sure not to compromise the team’s cover.",
    "At 0900 hours, brief the task force on the plan to raid the illegal drug manufacturing facility, ensuring all personnel are equipped with necessary protective gear and coordinating with SWAT for breach and entry.",
    "Your assignment is to trace the phone records of the primary suspect over the past two months, filtering out irrelevant contacts and identifying any patterns of communication with known criminal affiliates.",
    "You are responsible for ensuring that all company-wide policies comply with the newly established GDPR regulations, conducting an audit of data collection practices, and providing a detailed compliance report by next month.",
    "By the end of this quarter, your team will have completed a full review of all contracts with third-party vendors, flagging any that contain outdated or non-compliant clauses, and submitting them for legal revision.",
    "You’ll be tasked with updating the company’s employee handbook to reflect recent changes in labor law, coordinating with HR and legal departments to ensure the document is distributed to all staff before the start of the next fiscal year.",
    "Within the next 24 hours, conduct a thorough review of all internal compliance reports submitted in the past six months, identifying any recurring issues, and creating a remediation plan for senior management approval.",
    "You will oversee the establishment of a new anti-corruption policy for our operations in high-risk countries, ensuring that all regional offices adopt the updated procedures and reporting any challenges encountered during implementation.",
    "For tomorrow’s conference, you’ll coordinate with the catering team to ensure all meals meet dietary restrictions, brief the event staff on table arrangements, and conduct a final walkthrough of the venue by 0800 hours.",
    "During the upcoming gala, your role will be to manage VIP guest relations, ensuring that each guest is escorted to their designated seating area and that all special requests, including security measures, are handled discreetly.",
    "You will oversee the entire setup of the main ballroom for the charity auction, coordinating with the decorators, sound engineers, and lighting technicians to ensure the space is ready by 1500 hours for the evening’s event.",
    "For the wedding scheduled next weekend, ensure that all floral arrangements are delivered and set up by noon, the DJ has completed a sound check, and that the bridal party is briefed on the timeline for the ceremony and reception.",
    "You are tasked with organizing the guest list for the product launch event, verifying RSVP confirmations, and coordinating with the PR team to prepare personalized gift bags for all attendees.",
    "At 0600 hours, conduct a final inspection of the runway before the arrival of the international flight, ensuring that all lighting systems are fully operational and that there are no obstructions along the taxiway.",
    "Your task is to oversee the handling of high-priority cargo arriving on Flight 245, ensuring it is transferred to the secure storage facility within 30 minutes of touchdown, with all paperwork completed and signed off by customs officials.",
    "During the morning shift, you’ll be responsible for managing passenger flow through security checkpoints, ensuring that no delays occur, and coordinating with TSA agents to handle any flagged items efficiently.",
    "You will lead the de-icing operation for the aircraft departing between 0500 and 0800 hours, ensuring that all ground crews adhere to safety protocols and that the runway remains clear for takeoff.",
    "As head of operations, your role is to coordinate the arrival and departure schedules of all flights on Christmas Eve, ensuring that no delays disrupt the heavy passenger traffic, and maintaining regular communication with air traffic control.",
    "By end of shift today, follow up with all clients who submitted complaints in the last 48 hours, resolving outstanding issues, and ensuring that customer satisfaction surveys are sent to each one.",
    "For the upcoming holiday season, prepare the support team to handle an expected increase in inquiries, ensuring that all representatives are familiar with the latest promotions and return policies.",
    "You are to lead the training session for new customer service agents, focusing on conflict resolution, upselling techniques, and how to handle escalated calls, with the session completed by next Wednesday.",
    "Throughout the day, monitor the team’s call response time, ensuring that no call is left on hold for longer than three minutes, and address any bottlenecks immediately with shift supervisors.",
    "Oversee the processing of refund requests received this week, verifying that each case meets the company’s return criteria, and providing a detailed report of completed refunds to the finance department by Friday.",
    "During today’s shift, manage the setup of the holiday product display, ensuring that all items are stocked, priced accurately, and promoted through in-store signage by noon.",
    "You are tasked with leading the inventory count in the stockroom tonight, ensuring that all items are scanned into the system, any discrepancies are reported, and restock orders are placed before closing.",
    "Throughout the Black Friday sale, you’ll oversee checkout operations, ensuring that registers remain fully staffed, lines move efficiently, and any price disputes are resolved without delaying other customers.",
    "For the new product launch next week, you’ll train staff on key selling points, how to demonstrate features to customers, and coordinate with the marketing team to prepare in-store promotional materials.",
    "You are responsible for the end-of-day financial reconciliation, counting the cash from all registers, ensuring that discrepancies are logged and investigated, and completing the deposit by 1900 hours.",
    "By the end of today’s shift, ensure that all assembly line machines are calibrated, running at optimal speed, and produce no defective units, and prepare a performance report for review.",
    "For the next production cycle, you’ll coordinate the installation of new robotics on the floor, ensuring that all systems are integrated with the existing process and conducting a test run by Friday morning.",
    "During this week’s maintenance, oversee the inspection of all heavy machinery, ensuring that any worn parts are replaced, and log all repair work in the system for review by the end of the quarter.",
    "You are responsible for managing the inventory of raw materials in the warehouse, ensuring that stock levels remain above the minimum threshold, and placing orders for any materials expected to run out within the next two weeks.",
    "By 1700 hours, complete a full audit of the production lines, identifying any inefficiencies or bottlenecks, and make recommendations for how we can improve output by 10% in the next quarter.",
    "As part of the next semester’s curriculum development, you are tasked with designing a project-based learning module for students, incorporating real-world scenarios, and ensuring that all materials are finalized by the start of classes.",
    "For the upcoming science fair, you’ll be responsible for coordinating with all student participants, verifying that their projects meet safety and ethical standards, and setting up the exhibition space by Friday.",
    "Over the next three weeks, you are to review and grade all mid-term essays submitted by students, providing detailed feedback and assigning a final grade for each assignment by the deadline.",
    "Your task is to organize a series of workshops for first-year students, covering time management, study strategies, and effective research methods, with sessions held once a week for the next month.",
    "You are responsible for managing the final exam schedule for the department, ensuring that no conflicts arise between courses, and that all exams are graded and submitted by the end of the term.",
    "You’ll be managing patient intake this morning, ensuring that all new arrivals are processed, assigned a bed, and have their initial health assessments completed within the first two hours of their admission.",
    "Coordinate with the surgical team to prepare the operating room for the next procedure, ensuring that all equipment is sterilized, the correct instruments are laid out, and the patient’s file is reviewed for any special considerations.",
    "During your shift, monitor the vitals of all patients in the ICU, responding immediately to any critical changes, and updating the attending physician every 30 minutes on their status.",
    "Your responsibility is to oversee the distribution of medication to all wards, ensuring that doses are administered on time, and tracking any adverse reactions reported by the nursing staff.",
    "As head of the radiology department, you are tasked with reviewing all imaging reports from the past week, verifying diagnoses, and submitting your final analysis for each case to the referring doctors by the end of today.",
    "By 0700 hours, ensure that all delivery trucks are loaded according to their route schedules, with high-priority packages placed at the front for quicker access, and confirm the departure of each vehicle with the dispatch office.",
    "You are tasked with overseeing the unloading of the cargo ship arriving at dock 4, ensuring that all containers are processed through customs by noon and that perishable goods are transferred to refrigerated storage immediately.",
    "For the upcoming week, organize the transportation of hazardous materials from the production plant to the disposal facility, coordinating with safety officers to ensure that all protocols are followed during transit.",
    "During the next 48 hours, you’ll manage the rerouting of deliveries due to the road closure, ensuring that all customers are notified of any delays and that priority shipments are expedited.",
    "At the end of today’s shift, complete an audit of the warehouse inventory, identifying any items that need to be reordered, and submit a replenishment request to the procurement team before the close of business.",
    "At 0600 hours, lead your platoon in a tactical drill, ensuring that all members understand their roles, the communication protocol is followed, and any issues encountered are debriefed post-exercise.",
    "You are responsible for preparing the briefing materials for tomorrow’s operation planning meeting, ensuring that all objectives are clearly outlined, and that any necessary data is included for review.",
    "As part of the reconnaissance team, your assignment is to gather intel on enemy troop movements in the designated area, reporting your findings back to command by 1800 hours.",
    "Throughout the week, monitor the training progress of all new recruits, providing feedback on their performance, and preparing a report for their evaluations to be submitted by Friday.",
    "During the upcoming field exercise, ensure that all units are equipped with the necessary supplies, including ammunition, rations, and first-aid kits, and that any logistical issues are resolved beforehand.",
    "You’ll be overseeing the operation of the command center during the drill, ensuring all communications are functioning properly, and that all reports are logged in real-time for after-action analysis.",
    "For the upcoming audit, you’ll compile all financial records from the past year, ensuring that every transaction is documented and that any discrepancies are flagged for review by the finance committee.",
    "As part of the marketing strategy review, analyze the effectiveness of current campaigns, preparing a presentation of your findings for the executive team by the end of next week.",
    "You are tasked with managing the rollout of the new software update across the organization, ensuring that all departments are trained on the changes, and addressing any technical issues that arise.",
    "By next month, you will conduct a full analysis of customer feedback collected over the last quarter, identifying key areas for improvement and recommending actionable changes to enhance service quality.",
    "Throughout the day, monitor website traffic and sales conversions, preparing a report that highlights trends and areas for growth, and share your insights with the sales team at the end of the day.",
    "For the next board meeting, compile an update on the company’s performance metrics, including revenue, customer satisfaction scores, and employee engagement levels, and prepare talking points for the CEO.",
    "You’ll be overseeing the organization’s annual fundraising gala, coordinating with vendors, managing ticket sales, and ensuring that all details are finalized at least two weeks in advance of the event.",
    "As part of the upcoming merger discussions, prepare a comprehensive analysis of both companies’ financial health, identifying any potential risks and opportunities for synergy that can be presented to stakeholders.",
"By the end of this week, coordinate with the engineering team to finalize the blueprints for the new office complex, ensuring that all structural and safety regulations are met, and submit the design for client approval.",
    "For the next three days, you are responsible for managing the installation of the HVAC system in the main building, ensuring that all units are properly calibrated and that the project remains on schedule.",
    "Over the next two weeks, oversee the completion of the foundation for the new residential development, coordinating with contractors and ensuring that all materials arrive on-site according to the planned timeline.",
    "During today’s site inspection, identify any potential safety hazards, ensure that all workers are wearing the necessary protective gear, and report any violations to the safety officer by the end of the day.",
    "You are tasked with managing the subcontractors for the plumbing and electrical systems of the new shopping mall, ensuring that both installations are completed by the end of this quarter without any delays.",
    "At the start of your shift, ensure that all high-demand products are restocked and displayed prominently in the store, and brief the sales team on today’s promotions, focusing on upselling techniques.",
    "For the upcoming clearance sale, your task is to reorganize the product layout, placing discounted items near the entrance and ensuring that all price tags are clearly visible to customers.",
    "During the morning rush, manage customer flow at the registers, ensuring that checkout times remain under three minutes, and address any issues with the point-of-sale system immediately.",
    "You are responsible for overseeing the returns and exchanges department today, making sure that all customer complaints are handled efficiently and that any defective items are logged for quality control.",
    "By the end of the day, complete an inventory of all high-ticket items in the electronics section, ensuring that stock levels are accurate and that any discrepancies are reported to the department manager.",
    "At 0800 hours, you are to lead a system-wide security audit, identifying any vulnerabilities in the network, patching all outdated software, and ensuring that no unauthorized access is detected.",
    "Over the next week, oversee the migration of the company’s servers to the cloud, coordinating with the IT support team to ensure minimal disruption to business operations, and complete the process by Friday.",
    "You will be tasked with setting up the new office network, including configuring routers, switches, and firewalls, and ensuring that all workstations are connected and tested by the end of today.",
    "For the upcoming software release, manage the deployment process, ensuring that all developers have completed their final code reviews, and prepare a rollback plan in case any critical bugs are discovered post-launch.",
    "During the next 48 hours, troubleshoot the performance issues reported by the finance department, identifying the root cause, and providing a detailed report of your findings and suggested solutions.",
    "Tonight, you are responsible for monitoring the CCTV feeds for the entire facility, paying close attention to any suspicious activity, and reporting any incidents to the security office immediately.",
    "For the next week, conduct random security sweeps of the warehouse perimeter, ensuring that all entry points are secured, and brief the security team on the new access control procedures.",
    "During the night shift, manage the security detail for the VIP event, coordinating with local law enforcement and ensuring that all guests are cleared through security checkpoints without delay.",
    "By tomorrow morning, complete a full risk assessment of the building’s security system, identifying any weak points, and submit recommendations for upgrading the surveillance and access control systems.",
    "You are tasked with leading the security team in response to any emergency situations, ensuring that all personnel are trained on evacuation procedures and that any threats are neutralized efficiently.",
    "At the start of your shift, ensure that all incoming shipments are received, sorted, and placed in the appropriate storage areas, and update the inventory system to reflect the current stock levels.",
    "You are responsible for organizing the outgoing shipments for the afternoon, verifying that all items are properly packed, labeled, and loaded onto the trucks for delivery by the end of the day.",
    "For the upcoming inventory count, your task is to coordinate with the warehouse staff, ensuring that all products are scanned and accounted for, and submit a final report of stock levels by the end of the week.",
    "During today’s shift, oversee the loading dock, ensuring that all safety protocols are followed, and address any issues with damaged goods or misplaced shipments before the close of business.",
    "By the end of the month, implement the new warehouse management software, training all staff on its features, and ensuring that the system is fully integrated with the current inventory processes.",
    "For the upcoming campaign, design three variations of the product packaging, ensuring that the colors, fonts, and imagery align with the brand’s message, and submit the drafts to marketing by Friday.",
    "You are tasked with redesigning the company’s website, focusing on improving user experience, simplifying navigation, and ensuring that the site is mobile-friendly by the end of next month.",
    "By the end of today, complete the initial sketches for the new logo design, incorporating feedback from the client, and prepare a presentation for the final design review meeting.",
    "Over the next two weeks, develop a new product concept, brainstorming with the R&D team to explore innovative features, and present your ideas at the upcoming creative strategy session.",
    "You will oversee the production of the company’s next commercial, ensuring that the script, casting, and visuals are aligned with the marketing strategy, and that filming is completed on schedule.",
    "By the end of today, reconcile all transactions from last month, ensuring that no discrepancies are left unresolved, and prepare a financial report for the CFO’s review.",
    "Over the next week, oversee the budget planning process for the next fiscal year, coordinating with department heads to ensure that all spending is accounted for and that budget proposals are submitted on time.",
    "You will manage the quarterly audit of the company’s financial statements, identifying any errors or inconsistencies, and submitting a detailed report to the audit committee by the end of this month.",
    "During the next 48 hours, review the tax filings for all international subsidiaries, ensuring that compliance is maintained across all jurisdictions, and preparing the final tax return for submission.",
    "Your task is to analyze the performance of the company’s investment portfolio, identifying any underperforming assets, and making recommendations for reallocating funds to higher-yield opportunities.",
    "By next Tuesday, complete the analysis of the soil samples collected from the experimental site, documenting any variations in nutrient levels, and preparing your findings for presentation at the research symposium.",
    "For the upcoming grant application, prepare a detailed project proposal outlining the objectives, methodology, and expected outcomes of the study, and submit it to the funding committee by the end of this week.",
    "You are responsible for conducting a peer review of the research paper on gene editing, providing feedback on the methodology and conclusions, and submitting your review by Friday.",
    "Over the next three months, lead a series of experiments testing the effects of different compounds on cellular regeneration, and ensure that all findings are documented and submitted for publication.",
    "During today’s lab session, oversee the calibration of all equipment, ensuring that the experiments can be conducted without any technical issues, and document any deviations from the expected results."
]

let levelSix = [
    "As part of the company’s global expansion plan, you will lead a cross-functional team tasked with identifying and evaluating potential acquisition targets in emerging markets such as Brazil, India, and Southeast Asia, assessing their financial health, market position, and operational synergies, and delivering a full report to the board of directors by the end of Q3, with recommendations on how to proceed with at least two high-potential targets.",
"Over the next 12 months, you will be responsible for designing and implementing a global logistics optimization program that includes the automation of warehouse operations, the use of AI-driven forecasting tools to predict demand and manage inventory, the expansion of our delivery fleet with electric vehicles, and the negotiation of new long-term contracts with key suppliers, all aimed at reducing overall supply chain costs by 15% and improving delivery times by 20%.",
"You are tasked with leading the company's efforts to expand its e-commerce operations into China, which will involve navigating complex trade regulations, establishing partnerships with local logistics providers, ensuring compliance with data privacy laws, setting up localized marketing campaigns, and developing a tailored customer service strategy, with the goal of achieving a 25% market share within the next two years.",
"As part of the leadership team, you will work closely with our global HR, finance, and legal departments to develop and roll out a new employee benefits program for all staff across North America, Europe, and Asia, which will include health and wellness initiatives, performance-based bonuses, flexible work arrangements, and retirement savings plans, with a specific focus on improving employee engagement and reducing turnover by 10% by the end of the year.",
"You will oversee the design and execution of a multi-phase project to automate our North American distribution centers, which will include the deployment of autonomous robots for picking and packing orders, the implementation of AI-powered inventory management systems, and the integration of advanced machine learning algorithms for demand forecasting, all aimed at improving order accuracy, reducing labor costs, and shortening delivery times by at least 20% over the next 18 months.",
"In collaboration with the marketing, finance, and sustainability teams, you are tasked with developing a long-term corporate social responsibility (CSR) strategy that aligns with our overall business objectives, which includes reducing our carbon footprint by 25%, increasing our use of renewable energy in all facilities, establishing partnerships with environmentally friendly suppliers, and launching community outreach programs, with a final proposal due to the executive board by Q4.",
"You will lead a global cross-functional team to develop a comprehensive risk mitigation plan for our international logistics operations, focusing on reducing potential disruptions from geopolitical events, trade wars, natural disasters, and cyberattacks, while ensuring that all regional teams have contingency plans in place, with the objective of reducing overall supply chain risks by 30% over the next three years.",
"As part of the company's five-year growth plan, you are responsible for leading the expansion of our product lines into new markets, which will involve conducting market research to identify consumer trends and preferences, working with the product development and marketing teams to create localized offerings, negotiating partnerships with key retailers, and managing all aspects of the product launch, with the goal of achieving $100 million in sales revenue by the end of year two.",
"Within the next six months, you are tasked with spearheading the implementation of a new global transportation management system that will integrate real-time tracking, route optimization, and automated carrier selection, with the goal of improving delivery times by 15%, reducing transportation costs by 10%, and providing customers with enhanced visibility into their shipments from the moment they place an order to final delivery.",
"You will lead the development of a comprehensive post-merger integration plan for our recent acquisition, focusing on aligning supply chain processes, integrating IT systems, streamlining operational workflows, and managing the cultural integration of employees across both organizations, with the goal of achieving $50 million in operational synergies within the first year and ensuring minimal disruption to day-to-day operations.",

]

// *** START A GAME ***
play_btn.addEventListener('click', () => {
    play_btn.textContent = 'Play Next';
    playground.style.background = 'none';
    endgame.textContent = '';
    endgame.style.display = 'none';
    users_sentence.value = '';
    mistakes_amount.value = 0;
    // GET A RANDOM SENTENCE
    let randomSentence = Math.floor(Math.random() * levelOne.length);
    sentence.textContent = levelOne[randomSentence];
    // TRANSLATE AMOUNT OF WORDS IN A SENTENCE INTO COUNTER'S SECONDS + 1 just in case (av.person reads 3 words in 1 second)
    let counter = Math.floor((sentence.textContent.trim().split(/\s+/).length / 3) + 1);
    // START A GAME
    let interval = setInterval(() => {
        show_sentence.style.display = 'block';
        write_sentence.style.display = 'none';
        countdown.style.display = 'block';
        // STOP A COUNTER
        if (counter <= 0) {
            show_sentence.style.display = 'none';
            write_sentence.style.display = 'block';

            clearInterval(interval);
        }
        // SHOW CURRENT COUNTER
        countdown.textContent = counter + '...';
        counter--;
    }, 1000)

})

// *** SHOW MISTAKES-CHECKING STAGE ***
function showChecking () {
    show_sentence.style.display = 'block';
    countdown.style.display = 'none';
    write_sentence.style.display = 'none';
    mistakes_counter.style.display = 'block';
    
    submitted_sentence.textContent = `You wrote: ${users_sentence.value}`;
}
// ON CLICKED SUBMIT BUTTON
submit_sentence.addEventListener('click', () => {
    showChecking();
})
// THE SAME ON CLICKED ENTER KEY
users_sentence.addEventListener('keypress', (e) =>  {
    if (e.key === 'Enter' && !e.shiftKey) {
        showChecking();
    }
})

// *** SUBMITTING MISTAKES-AMOUNT USER DID ***
let amount = 0;
submit_mistakes.addEventListener('click', () => {
    if(mistakes_amount.value == 0) amount+=1000;
    if(mistakes_amount.value < 6) amount += 500;
    if (mistakes_amount.value < 11) amount += 100;
    if (mistakes_amount.value < 16) amount += 10;
    if (mistakes_amount.value < 21) amount += 1;

    let newAmount = +users_points.innerHTML + amount;
    users_points.innerHTML = newAmount;

    // HIDE EVERYTHING IN THE PLAYGROUND, SHOW END-GAME SCREEN THERE
    show_sentence.style.display = 'none';
    mistakes_counter.style.display = 'none';

    endgame.style.display = 'block';
    endgame.textContent = `Great, You get ${amount} points for ${mistakes_amount.value} mistakes. Click 'Play Again' button to continue.`;
    amount = 0;
})