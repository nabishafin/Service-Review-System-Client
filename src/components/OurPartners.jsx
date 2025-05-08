
import ParterCart from './ParterCart';




const OurPartners = () => {



    return (
        <div>
            <div className="py-12 bg-gray-100 p-2">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-[#1c082b]">Meet Our Partners</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        We are proud to work with these incredible partners who help us provide the best services.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ParterCart
                            name={'ReviewSphere'}
                            description={'ReviewSphere is a dynamic platform that allows users to discover, review, and share their experiences with a wide variety of services.'}
                            logo={'https://i.ibb.co.com/hV64Xrf/logo-1.png'}
                        >
                        </ParterCart>
                        <ParterCart
                            name={'FedEx'}
                            description={'FeedbackFlow fosters transparent communication between consumers and service providers. Users can easily share their experiences'}
                            logo={'https://i.ibb.co.com/q7zx1Ws/logo-3.png'}
                        >
                        </ParterCart>
                        <ParterCart
                            name={'CritiqueCloud'}
                            description={'CritiqueCloud is an online platform where users can review and critique services across various industries. With a user-friendly interface.'}
                            logo={'https://i.ibb.co.com/PcG5rxh/logo-2.png'}
                        >
                        </ParterCart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;