import React from "react";

const FormFeild = ({LabelName,type,name,placeholder,value,handleChange,isSupriseMe, handleSupriseMe}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {LabelName}
        </label>
        {isSupriseMe &&(
          <button
            type="button"
            onClick={handleSupriseMe}
            className =" font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black">
            suprise me!
            </button>
        )}
      </div>
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} required 
      className="bg-gray-50 border-gray-300 text-gray-900 text-sm roundeed-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 border" />
    </div>
  );
};

export default FormFeild;
