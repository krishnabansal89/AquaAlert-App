import { View, Text, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import { Image } from "react-native-elements";

type props = {
  title: string;
  icon: string;
  selected: boolean;
};

const NamedIcon = ({ title, icon, selected }: props) => {
  const [isSelected, setIsSelected] = useState(selected);
  return (
    <>
      {isSelected ? (
         <Pressable
         onPress={() => setIsSelected(!isSelected)}
         className="flex w-[120px] h-[110px] px-[32px] py-[22px] bg-[#028EA2]  border-[0.5px] border-[#DBDBDB] justify-center items-center rounded-[5px] mx-4 my-2"
       >
         <Image
           source={icon}
           style={{ width: 50, height: 40, tintColor: "white" }}
           resizeMode="contain"
         />
         <Text className="text-[10px] font-[500] font-[Lexend] text- mt-2 -ml-4 text-white ">
           {title}
         </Text>
       </Pressable>
      ) : (
        <Pressable
          onPress={() => setIsSelected(!isSelected)}
          className="flex w-[120px] h-[110px] px-[32px] py-[22px] bg-[#EEF4FF]  border-[0.5px] border-[#DBDBDB] justify-center items-center rounded-[5px] mx-4 my-2"
        >
          <Image
            source={icon}
            style={{ width: 50, height: 40, tintColor: "black" }}
            resizeMode="contain"
          />
          <Text className="text-[10px] font-[500] font-[Lexend] text- mt-2 -ml-4 text-black ">
            {title}
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default NamedIcon;
