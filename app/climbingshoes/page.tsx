import React from "react";

export default function Shoes() {
    return (
        <main className="bg-white">

            <div className="bg-cover bg-center w-full h-[400px] flex items-center justify-center" style={{ backgroundImage: "url('/ShoePage.jpeg')" }} >
                <div className="text-white text-5xl font-bold text-center "> The Anatomy of Rock Climbing Shoes</div>
            </div>

            {/* Three types of shoes */}
            <div className="text-black text-4xl font-bold text-center py-12">The three types of rock climbing shoes</div>

            <div className="flex flex-wrap justify-center gap-20 p-18">
                <div className="w-full sm:w-1/4 lg:w-1/4">
                    <div className="bg-white px-8 min-h-[200px] flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-center">Aggressive</h2>
                        <img src="/AggressiveShoe.jpg" alt="Shoe 1" className="w-full h-auto object-cover" />
                        <p className="text-center">Aggressive shoes are built to excel on small footholds and overhung routes. The sharp downturn of the shoe
                            acts as a hook, forcing more pressure into the very tip of the toe box allowing climbers to stand on smaller holds while maintaining the
                            shape of the shoe. These types of shoes are generally considered to be for more advanced climbers and are very popular in the bouldering community.</p>
                    </div>

                </div>
                <div className="w-full sm:w-1/4 lg:w-1/4">
                    <div className="bg-white px-8 min-h-[200px] flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-center">Moderate</h2>
                        <img src="/OtherModerateShoe.jpg" alt="Shoe 2" className="w-full h-auto object-cover" />
                        <p className="text-center">Moderate shoes are built to be comfortable on small holds and overhung routes. They are typically designed
                            for climbers who want a mix between an aggressive shoe and a neutral shoe. Although they have a lesser downturn in the toe box, many
                            moderate shoes can outperform aggressive shoes on climbs that require smearing or larger areas of contact.
                            Many sport climbers and boulderers alike choose this shoe as a jack of all trades.</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/4">
                    <div className="bg-white px-8 min-h-[200px] flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-center">Neutral</h2>
                        <img src="/NeutralShoe.webp" alt="Shoe 3" className="w-full h-auto object-cover" />
                        <p className="text-center">Neutral shoes are built to be comfortable and are a great entry point for beginners. The lack of downturn
                            in the toe box means that they will have a harder time on overhung routes, but makes up for it where large areas of contact are required.
                            They are typically designed for slab routes, multipitch, and larger footholds. Despite their popularity with beginner climbers, they can also perform
                            at high levels and are especially effective at smearing.</p>
                    </div>
                </div>
            </div>

            {/* Rubber */}
            <div className="text-black text-4xl font-bold text-center pt-20">Rubber</div>
            <div className="flex flex-wrap justify-center gap-20">
                <div className="w-full sm:w-3/4 lg:w-3/4 pt-10">
                    <div className="bg-white px-8  flex flex-col items-center">
                        <p className="text-center">Hundreds of years of technology has gone into developing the best possible rubbers for climbing shoes. The rubber is what provides the shoe with the grip climbers need
                            to stand on tiny holds without slipping. Every company has designed their own rubber compounds for climbing shoes all with different pros and cons. In general, brands try to balance
                            the stickiness and durability of the rubber. Soft rubbers tending to be less durable but more sticky and hard rubbers tending to be more durable but less sticky. Below is a list of some of the most
                            popular rubbers from different brands.</p>
                    </div>
                </div>
            </div>

            {/* Rubber list */}
            <div className="flex flex-wrap justify-center gap-10 p-12">
                <div className="w-full sm:w-1/4 lg:w-1/4">
                    <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center">
                        <img src="/rubbers/grip2.png" alt="XS Grip 2" className="w-full h-auto object-cover" />
                        <p className="text-center"> An improvement on Vibram's popular XS Grip rubber and one of the softest and stickiest rubbers on the market.</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/4">
                    <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center">
                        <img src="/rubbers/edge.png" alt="XS Grip 2" className="w-full h-auto object-cover" />
                        <p className="text-center">Vibram's stiffer rubber designed for multipitch and slab routes providing excellent foot support. </p>
                    </div>
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/4">
                    <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center">
                        <img src="/rubbers/stealthc4.jpg" alt="Stealth C4" className="w-full h-auto object-cover" />
                        <p className="text-center">Originally designed by 5.10, Stealth C4 is widely acclaimed for its stickiness as one of the best rubbers. </p>
                    </div>
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/4 pt-5">
                    <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center">
                        <img src="/rubbers/stealthhf.jpg" alt="Stealth HF" className="w-full h-auto object-cover" />
                        <p className="text-center">5.10's Stealth HF is a high performance sticky rubber found on competitive indoor climbing shoes. </p>
                    </div>
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/4 pt-5">
                    <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center">
                        <img src="/rubbers/traxsas.avif" alt="Trax SAS" className="w-full h-auto object-cover" />
                        <p className="text-center">Although Trax is not as popular as Vibram and 5.10, Trax SAS is one of the stickiest and most durable rubbers on the market. </p>
                    </div>
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/4 pt-5">
                    <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center">
                        <img src="/rubbers/traxxe.jpg" alt="XS Grip 2" className="w-full h-auto object-cover" />
                        <p className="text-center">Although the Trax XE may lack in stickiness, this rubber makes up for it in durability and edging capability. </p>
                    </div>
                </div>
            </div>
        </main>
    );
}