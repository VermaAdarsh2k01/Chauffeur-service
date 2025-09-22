import React from 'react';

type Vehicle = {
    id: number;
    name: string;
    image: string;
};

const vehicles: Vehicle[] = [
    // First row - 3 luxury cars
    {
        id: 1,
        name: 'BMW M8 Convertible',
        image: '/vehicles/bmw.jpg',

    },
    {
        id: 2,
        name: 'Porsche 911 GT2 RS',
        image: '/vehicles/porche.jpg',

    },
    {
        id: 3,
        name: 'Chevrolet Corvette C8',
        image: '/vehicles/mercedes.jpg',

    },
    // Second row - 4 premium cars
    {
        id: 4,
        name: 'Lexus LC 500',
        
        image: '/vehicles/suv.jpg',

    },
    {
        id: 5,
        name: 'Lamborghini Huracan',
        image: '/vehicles/audi.jpg',

    },
    {
        id: 6,
        name: 'Mercedes-AMG GT',
        image: '/vehicles/fortuner.jpg',

    },
    {
        id: 7,
        name: 'Audi RS e-tron GT',
        image: '/vehicles/dzire.jpg',
        
    }
];

export default function VehicleFleet() {
    // Split vehicles into two rows
    const firstRow = vehicles.slice(0, 3);
    const secondRow = vehicles.slice(3);

    return (
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h4 className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-2">
                        ONLY THE BEST CARS
                    </h4>
                    <h2 className="text-4xl font-bold mb-4">
                        Our Vehicle Fleet
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide our customers with the most incredible driving emotions.
                        That's why we have only world-class cars in our fleet.
                    </p>
                </div>

                {/* First Row - 3 cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {firstRow.map((vehicle) => (
                        <div
                            key={vehicle.id}
                            className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]"
                        >
                            <img
                                src={vehicle.image}
                                alt={vehicle.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            
                        </div>
                    ))}
                </div>

                {/* Second Row - 4 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-0 md:px-4 lg:px-8">
                    {secondRow.map((vehicle) => (
                        <div
                            key={vehicle.id}
                            className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]"
                        >
                            <img
                                src={vehicle.image}
                                alt={vehicle.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}