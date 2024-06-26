import { TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';
const EmployeeSkills = () => {
  useEffect(() => {
    getRegistrationProgress("EmployeeSkills").then(progressData => {
      if (progressData) {
        setEmployeeSkills(progressData.employeeSkills || []);
      }
    });
  }, []);
  const navigation=useNavigation()
  const handleNext=()=>{
    if(employeeSkills.length > 0){
    saveRegistrationProgress('EmployeeSkills', { employeeSkills });}

   
    navigation.navigate("LookingForEmployee")}
  
  const [employeeSkills, setEmployeeSkills] = useState([]);

  const chooseOption = (option) => {

   
  
    
    if (employeeSkills.includes(option)) {
      setEmployeeSkills(employeeSkills.filter((selectedOption) => selectedOption !== option));
    } else {
      setEmployeeSkills([...employeeSkills, option]);
    }
  };

  const options = [
    {
      label: 'Skills and Qualifications',
      subOptions: ['Technical skills', 'Certifications', 'Relevant work experience', 'Educational qualifications'],
    },
    {
      label: 'Cultural Fit',
      subOptions: ['Alignment with company values', 'Teamwork', 'Adaptability', 'Positive attitude'],
    },
    {
      label: 'Work Ethic and Reliability',
      subOptions: ['Punctuality', 'Commitment', 'Accountability', 'Initiative'],
    },
    {
      label: 'Communication Skills',
      subOptions: ['Verbal communication', 'Written communication', 'Collaboration', 'Interpersonal skills'],
    },
    {
      label: 'Problem-Solving Abilities',
      subOptions: ['Critical thinking', 'Analytical skills', 'Creativity', 'Resourcefulness'],
    },
    {
      label: 'Leadership Potential',
      subOptions: ['Decision-making', 'Strategic thinking', 'Motivation', 'Team leadership'],
    },
    {
      label: 'Adaptability and Flexibility',
      subOptions: ['Ability to learn new skills', 'Flexibility in changing circumstances', 'Adaptability to new situations'],
    },
    {
      label: 'Passion and Motivation',
      subOptions: ['Enthusiasm', 'Interest in the job', 'Desire to succeed', 'Contribution to the organization'],
    },
    {
      label: 'Professionalism',
      subOptions: ['Professional appearance', 'Professional communication', 'Respectful behavior'],
    },
   
  ];
  
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <View style={{ flex: 1, marginTop: 90, marginHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name="magnify-scan" size={26} color="black" />
            </View>
            <Image
              style={{ width: 100, height: 40 }}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
              }}
            />
          </View>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', marginTop: 15 }}>What can you offer to the employer?</Text>
          <Text style={{ marginTop: 30, fontSize: 15, color: 'gray' }}>Select all that apply to you.</Text>
          {options.map((option, index) => (
            <View key={index} style={{ marginTop: 30 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{option.label}</Text>
              <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: 12 }}>
                {option.subOptions.map((subOption, subIndex) => (
                  <Pressable key={subIndex} onPress={() => chooseOption(subOption)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16, marginBottom: 12 }}>
                      <FontAwesome
                        name="circle"
                        size={26}
                        color={employeeSkills.includes(subOption) ? '#502b63' : '#F0F0F0'}
                      />
                      <Text style={{ fontWeight: '500', fontSize: 15, color: 'black', marginLeft: 8 }}>{subOption}</Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            </View>
          ))}
          <TouchableOpacity
        onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: 'auto'}}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#502b63"
            style={{alignSelf: 'center', marginTop: 20}}
          />
        </TouchableOpacity>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmployeeSkills;

const styles = StyleSheet.create({});
