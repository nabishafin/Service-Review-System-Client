import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import { FaUsers, FaTools, FaStar, FaProjectDiagram, FaHandshake } from 'react-icons/fa';

const stats = [
    { label: 'Users', end: 1200, color: 'text-blue-600', icon: <FaUsers /> },
    { label: 'Services', end: 350, color: 'text-green-600', icon: <FaTools /> },
    { label: 'Reviews', end: 980, color: 'text-purple-600', icon: <FaStar /> },
    { label: 'Projects Completed', end: 420, color: 'text-orange-500', icon: <FaProjectDiagram /> },
    { label: 'Partner Companies', end: 75, color: 'text-rose-600', icon: <FaHandshake /> },
];

const PlatformStats = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        if (inView) setStartCount(true);
    }, [inView]);

    return (
        <div
            ref={ref}
            className=" dark:bg-gray-900 px-6 transition-colors duration-500"
        >
            <div className=" w-full md:w-10/12 px-10  mx-auto text-center  py-20">
                <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                    Our Platform in Numbers
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    We’ve been empowering users and professionals across industries by delivering top-tier
                    services and maintaining excellence through measurable growth.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
                    {stats.map(({ label, end, color, icon }, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="flex justify-center text-3xl dark:text-white">{icon}</div>
                            <h3 className={`text-3xl font-bold ${color}`}>
                                {startCount ? <CountUp end={end} duration={2} /> : 0}+
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlatformStats;
