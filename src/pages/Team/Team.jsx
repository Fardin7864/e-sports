import { useEffect, useState } from "react";
import TeamCompo from "../../components/TeamCompo/TeamCompo";

const Team = () => {
    const [teamMembers, setTeamMembers] = useState();

    useEffect(() => { 
        const data = async () => { 
            await fetch('/team.json')
            .then(res => res.json())
            .then(members => setTeamMembers(members))
         }
         data();
     },[])

    
    return (
        <div className="bg-gradient-to-b from-[#1c153f] to-[#1c153f] overflow-hidden py-28">
            <h3 className=' transform my-5 text-center  lg:text-7xl md:text-5xl text-4xl font-extrabold text-white '> Our <br className='md:hidden'/> <span className='bg-gradient-to-r from-[#be006b] to-[#e33b54] text-transparent  bg-clip-text'>SOLDIERS</span> </h3>
           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 px-16 gap-y-10">
           {
                teamMembers?.map(member => 
                    <TeamCompo
                    key={member.name}
                    member={member}
                    ></TeamCompo>
                )
            }
           </div>
        </div>
    );
};

export default Team;