import React from "react";
import Head from 'next/head';

export default function Page() {
    return (
        <>
            <Head>
                <title>Belay Devices | Learn About Belay Devices</title>
                <meta name="description" content="Find the best belay devices on our expert climbing gear guide. Explore top-rated equipment now." />
            </Head>
            <main className="bg-white">
                <div className="bg-cover bg-center w-full h-[400px] flex items-center justify-center" style={{ backgroundImage: "url('/backgrounds/belaying.jpeg')" }} >
                    <div className="text-white text-5xl font-bold text-center">Belay Devices</div>
                </div>

                <div className="text-black text-4xl font-bold text-center py-12">The different types of belaying devices</div>

                {/* Figure 8*/}
                <div className="flex flex-wrap justify-center gap-10 pb-20">
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">Figure 8</h3>
                            <img src="/belaydevices/figure.jpg" alt="Figure 8" className="w-full h-[420px] object-cover py-5" />
                            <p className="text-center">The Figure 8 is a versatile and classic belay device, often favored by climbers who engage in rappelling.
                                Its design allows for smooth, controlled descents, making it ideal for abseiling or lowering a climber. While it is easy to use, the Figure 8
                                tends to be less effective for belaying with a modern dynamic rope system due to the lack of friction control compared to other devices.
                                However, it excels in situations where large-diameter ropes are required or long rappels are common.</p>
                        </div>
                    </div>

                    {/* Tube */}
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">Tube</h3>
                            <img src="/belaydevices/tube.webp" alt="Tube" className="w-full h-[420px] object-cover py-5" />
                            <p className="text-center">The Tube Belay Device, often referred to as an ATC (Air Traffic Controller), is one of the most common and widely-used belay devices.
                                Tube devices can be used for belaying both lead and top-rope climbers,
                                and they provide smooth control when lowering a climber. Climbers appreciate the lightweight design, making it a great option for all-around
                                climbing activities, from indoor gyms to multi-pitch trad routes. However, it requires attentive belaying since it does not offer assisted braking features.</p>
                        </div>
                    </div>

                    {/* Passive Braking */}
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">Passive Braking</h3>
                            <img src="/belaydevices/gigajul.webp" alt="Passive Braking" className="w-full h-[420px] object-cover py-5" />
                            <p className="text-center">The Passive Braking Device, such as the Giga Jul or the Reverso, adds a level of security through an auto-blocking mechanism
                                that passively engages when under load. These devices are especially useful for multi-pitch climbing and belaying from above (guide mode),
                                as they automatically lock when a climber falls. Passive braking devices are versatile and can be used in both assisted-braking mode and
                                standard tube-style belaying, offering climbers control and safety during their climbs. They require proper handling to ensure effective
                                braking and unlocking.</p>
                        </div>
                    </div>

                    {/* Active Braking */}
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="bg-white p-6 border rounded-lg shadow-md">
                            <h3 className="text-black text-2xl font-semibold text-center mb-4">Active Braking</h3>
                            <img src="/belaydevices/grigri.jpeg" alt="Active Braking" className="w-full h-[420px] object-cover py-5" />
                            <p className="text-center">The Active Braking Device, such as the GriGri, is designed with a camming mechanism that assists in braking,
                                automatically engaging when there is a sudden load, like in a fall. This type of device offers additional security and reduces the
                                need for the belayer to grip the rope tightly at all times. Active braking devices are especially popular for sport climbing and
                                single-pitch climbing, where controlling the fall is crucial. However, it is essential to practice proper technique, as
                                these devices still require manual engagement for safe operation and can be tricky to lead belay with.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}