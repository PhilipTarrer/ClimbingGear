import React from "react";
import Head from 'next/head'

export default function Shoes() {
    return (

        <>
            <Head>
                <title>Learn About Climbing Shoes | Find the Best Fit for Your Climbing Style</title>
                <meta name="description" content="Learn about climbing shoes for bouldering, sport climbing, and trad climbing. Learn how to choose the right shoe for you and the different parts shoes." />
            </Head>
            <main className="bg-white">
                {/* Top of screen image */}
                <div className="bg-cover bg-center w-full h-[400px] flex items-center justify-center" style={{ backgroundImage: "url('/shoes/ShoePage.jpeg')" }} >
                    <div className="text-white text-5xl font-bold text-center "> The Anatomy of Rock Climbing Shoes</div>
                </div>

                {/* Three types of shoes */}
                <div className="text-black text-4xl font-bold text-center py-12">The three types of rock climbing shoes</div>

                <div className="flex flex-wrap justify-center gap-20 pt-18 pb-20">
                    <div className="w-full sm:w-1/4 lg:w-1/4">
                        <div className="bg-white px-8 min-h-[200px] flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-bold text-center">Aggressive</h2>
                            <img src="/shoes/AggressiveShoe.jpg" alt="Shoe 1" className="w-full h-auto object-cover" />
                            <p className="text-center">Aggressive shoes are built to excel on small footholds and overhung routes. The sharp downturn of the shoe
                                acts as a hook, forcing more pressure into the very tip of the toe box allowing climbers to stand on smaller holds while maintaining the
                                shape of the shoe. These types of shoes are generally considered to be for more advanced climbers and are very popular in the bouldering community.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/4 lg:w-1/4">
                        <div className="bg-white px-8 min-h-[200px] flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-bold text-center">Moderate</h2>
                            <img src="/shoes/OtherModerateShoe.jpg" alt="Shoe 2" className="w-full h-auto object-cover" />
                            <p className="text-center">Moderate shoes are built to be comfortable on small holds and overhung routes. They are typically designed
                                for climbers who want a mix between an aggressive shoe and a neutral shoe. Although they have a lesser downturn in the toe box, many
                                moderate shoes can outperform aggressive shoes on climbs that require smearing or larger areas of contact.
                                Many sport climbers and boulderers alike choose this shoe as a jack of all trades.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/4 lg:w-1/4">
                        <div className="bg-white px-8 min-h-[200px] flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-bold text-center">Neutral</h2>
                            <img src="/shoes/NeutralShoe.webp" alt="Shoe 3" className="w-full h-auto object-cover" />
                            <p className="text-center">Neutral shoes are built to be comfortable and are a great entry point for beginners. The lack of downturn
                                in the toe box means that they will have a harder time on overhung routes, but makes up for it where large areas of contact are required.
                                They are typically designed for smearing, multipitch, and larger footholds. Despite their popularity with beginner climbers, they can also perform
                                at high levels and are especially effective at smearing.</p>
                        </div>
                    </div>
                </div>

                {/* Rubber */}
                <div className="text-black text-4xl font-bold text-center pt-10 border-t border-black">Rubber</div>
                <div className="flex flex-wrap justify-center gap-20">
                    <div className="w-full sm:w-3/4 lg:w-3/4 pt-10">
                        <div className="bg-white px-8  flex flex-col items-center">
                            <p className="text-center">Years of technology has gone into developing the best possible rubbers for climbing shoes. The rubber is what provides the shoe with the grip climbers need
                                to stand on tiny holds without slipping. Every company has designed their own rubber compounds for climbing shoes all with different pros and cons. In general, brands try to balance
                                the stickiness and durability of the rubber. Soft rubbers tending to be less durable but more sticky and hard rubbers tending to be more durable but less sticky. Below is a list of some of the most
                                popular rubbers from different brands.</p>
                        </div>
                    </div>
                </div>

                {/* Rubber list */}
                <div className="flex flex-wrap justify-center gap-10 pt-12 pb-20">
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
                    <div className="w-full sm:w-1/4 lg:w-1/4 pt-5 ">
                        <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center">
                            <img src="/rubbers/traxxe.jpg" alt="XS Grip 2" className="w-full h-auto object-cover" />
                            <p className="text-center">Although the Trax XE may be lacking in stickiness, this rubber makes up for it in durability and edging capability. </p>
                        </div>
                    </div>
                </div>


                <div className="text-black text-4xl font-bold text-center pt-10 border-t border-black"> Sole Construction</div>
                <div className="flex flex-wrap justify-center gap-0 pb-20">
                    <div className="w-full sm:w-1/4 lg:w-1/2">
                        <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center pt-10">
                            <img src="/soles/singlepiece.webp" alt="XS Grip 2" className="w-full h-auto object-cover" />
                            <p className="text-center"> A single-piece rubber sole on a climbing shoe enhances sensitivity by allowing climbers to feel the rock or wall more accurately,
                                which is critical for precise foot placements and techniques like smearing and edging. It also improves traction since there are no gaps in the rubber,
                                ensuring consistent contact with the surface for better grip. Additionally, this design increases durability by evenly distributing pressure,
                                reducing wear and the likelihood of the sole separating over time. These benefits make single-piece soles ideal for performance-oriented climbing shoes,
                                especially for advanced climbers.</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/4 lg:w-1/2">
                        <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center pt-10">
                            <img src="/soles/doublepiece.webp" alt="XS Grip 2" className="w-full h-auto object-cover" />
                            <p className="text-center"> A double-piece rubber sole on a climbing shoe provides targeted performance by allowing for different rubber densities
                                or textures on the toe and heel. This design can enhance grip and durability where it's needed most, such as on the front for precise edging and on the heel for hooking.
                                The separation also increases flexibility, as the shoe can better accommodate movement and natural foot flexion. For climbers who engage in a variety of climbing styles,
                                this design balances sensitivity with durability, making it a versatile option for both steep bouldering and technical routes.</p>
                        </div>
                    </div>
                </div>

                <div className="text-black text-4xl font-bold text-center pt-10 border-t border-black"> Upper Construction</div>
                <div className="flex flex-wrap justify-center gap-0 ">
                    <div className="w-full sm:w-1/4 lg:w-1/2">
                        <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center pt-10">
                            <h2 className="text-3xl font-bold text-center">Synthetic Upper</h2>
                            <img src="/uppers/synthetic.jpg" alt="Synthetic" className="w-full h-auto object-cover" />
                            <p className="text-center"> Synthetic uppers on climbing shoes provide a snug, consistent fit as they resist stretching, ensuring long-term precision.
                                They're also lighter, more breathable, and dry faster than leather, making them ideal for varied climbing conditions. Additionally, synthetic materials
                                are often eco-friendly, as many are made from recycled sources.</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/4 lg:w-1/2">
                        <div className="bg-white px-20 min-h-[200px] flex flex-col items-center justify-center pt-10 pb-10">
                            <h2 className="text-3xl font-bold text-center">Leather Upper</h2>
                            <img src="/uppers/leather.jpg" alt="Leather" className="w-full h-auto object-cover" />
                            <p className="text-center">Leather uppers on climbing shoes offer excellent stretch and mold to the foot over time, providing a customized,
                                comfortable fit. They are highly durable and breathable, making them ideal for long, multi-pitch routes or extended use. While they require more
                                break-in time, leather shoes conform to foot shape better than synthetic options, delivering long-term comfort and performance. </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}