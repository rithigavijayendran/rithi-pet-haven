import React from 'react';
import video from "./images/background-video.mp4";



function PetCategoriesPage() {
    return (
        <section className="relative h-screen">
            <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="bg-gray-400 bg-cover bg-center bg-fixed min-h-screen relative z-10">
                <div className="container  py-20">
                    <h1 className="text-4xl text-black font-extrabold mb-10 text-center">Adopt a Pet</h1>
                    <div className="flex flex-wrap justify-center -mx-4">
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                            <div className="bg-blue-50 ml-[0.5rem] rounded-lg shadow-lg p-6">
                                <img src="https://2.bp.blogspot.com/-F7nf-gBRWv4/Uj_ztbmo9lI/AAAAAAAAFwU/D_NRsx_lBEY/s1600/Cute-Dog.jpg" alt="Dogs" className="w-full rounded-lg mb-4 h-60" />
                                <h2 className="text-xl font-extrabold mb-2 mx-36">Dogs</h2>
                                <p className="text-gray-700 mb-4 font-bold">Dogs leave paw prints on your heart.Find your new best friend.</p>
                                <a href="/Pet" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">View Dogs</a>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                            <div className="bg-blue-50 rounded-lg shadow-lg p-6">
                                <img src="http://3.bp.blogspot.com/-dui-f0hQUHE/U0Qs5dOcWII/AAAAAAAACpg/S1lb9AnsMU4/s1600/loveable-cat-wallpaper-free.jpg" alt="Cats" className="w-full rounded-lg mb-4 h-60" />
                                <h2 className="text-xl font-extrabold mb-2 mx-36">Cats</h2>
                                <p className="text-gray-700 mb-4 font-bold">Cats are connoisseurs of comfort.Adopt a loving cat.</p>
                                <a href="/Cat" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">View Cats</a>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                            <div className="bg-blue-50 rounded-lg shadow-lg p-6">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.Jfvsur5jResA-wKaG7ipoQHaE7&pid=Api&P=0&h=180" alt="Fish" className="w-full rounded-lg mb-4 h-60" />
                                <h2 className="text-xl font-extrabold mb-2 mx-36">Fish</h2>
                                <p className="text-gray-700 mb-4 font-bold">There's plenty of fish in the sea, but you're my Nemo.</p>
                                <a href="/Fish" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">View Fish</a>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                            <div className="bg-blue-50 mr-[1rem] rounded-lg shadow-lg p-6">
                                <img src="https://i.pinimg.com/736x/7d/8e/76/7d8e764cd5ce78cf643a79e7dfe6e35f--nature-photos-pet-birds.jpg" alt="Other Pets" className="w-full rounded-lg h-60 mb-4" />
                                <h2 className="text-xl font-extrabold mb-2 mx-36">Birds</h2>
                                <p className="text-gray-700 mb-4 font-bold">A bird doesn't sing because it has an answer, it sings because it has a song.</p>
                                <a href="/Bird" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">View Birds</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PetCategoriesPage;
