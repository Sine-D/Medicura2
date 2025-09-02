import React from 'react'
import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets'

const SpecialityMenu = () => {
  console.log('SpecialityMenu rendered, specialityData:', specialityData)
  
  if (!specialityData || specialityData.length === 0) {
    return (
      <div id='speciality' className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Find by speciality</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Simply browse through our specialities and find a doctor that suits your needs.</p>
        </div>
        <div className="text-center text-gray-500">
          <p>Loading specialities...</p>
        </div>
      </div>
    )
  }

  return (
    <div id='speciality' className="py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Find by speciality</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Simply browse through our specialities and find a doctor that suits your needs.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
            {specialityData.map((item, index) => (
                <Link key={index} to={`/doctors/${item.speciality.toLowerCase().replace(' ', '-')}`} className="group">
                    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform">
                        <img src={item.image} alt={item.speciality} className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-sm">{item.speciality}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu