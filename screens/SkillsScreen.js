import { StyleSheet, Text, View,SafeAreaView,Image, FlatList ,TextInput,Button} from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons
from 'react-native-vector-icons/MaterialIcons'
import AntDesign
from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'
import DocumentPicker from 'react-native-document-picker'
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils'

const SkillsScreen = () => {

  useEffect(() => {
    const fetchData = async () => {
      const progressData = await getRegistrationProgress('Skills');
      if (progressData) {
        const { savedSkills, savedResumeUri } = progressData;
        setSkills(savedSkills || []);
        setResumeUri(savedResumeUri || '');
      }
    };
    fetchData();
  }, []);
  const navigation=useNavigation()
  const handleNext=()=>{
    saveRegistrationProgress('Skills', { savedSkills: skills, savedResumeUri: resumeUri });

    navigation.navigate("LookingForEmployee")

  }
  const [resumeUri, setResumeUri] = useState("");

  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    if (skillInput.trim() !== '') {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };
  const handleUploadResume = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf]
      })
      setResumeUri(res.name);
      // console.log(res)
      // console.log(resumeUri)
     
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.error("User cancelled upload",err);
      }
      else{
        console.log(err)
      }
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 90, marginHorizontal: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width:44,height:44,borderRadius:22,borderWidth:2,borderColor:"black",justifyContent:"center",alignItems:"center"}}>
      <MaterialIcons name="work-outline" size={26} color="black"/>

      </View>
      <Image  style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}/>
    </View>
    <Text   style={{
            fontSize: 25,
            fontWeight: 'bold',
           color:"black",
            marginTop: 15,
          }}>Enter your Skills</Text>


          {/* new added  */}

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TextInput
            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10,borderRadius: 10 }}
            placeholder="Enter skill"
            value={skillInput}
            onChangeText={text => setSkillInput(text)}
          />
          <View style={{width:40,marginLeft:15}}>
          <MaterialIcons.Button name="add" backgroundColor="#502b63" borderRadius={30} width={50} onPress={handleAddSkill}></MaterialIcons.Button>
          </View>
        </View>
        
        <Text style={{ fontSize: 15, fontWeight:700,color: 'gray', marginTop: 15 }}>Entered Skills</Text>
        
        <FlatList
          data={skills}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
<View style={{flexDirection:"row"}}>
<Text   style={{
            fontSize: 25,
            fontWeight: 'bold',
           color:"black",
            marginTop: 15,
          }}>Upload your Resume</Text>

<View style={{width:40,marginLeft:135,marginTop:15,}}>
<AntDesign.Button name="upload" borderRadius={30} 
  width={50}  backgroundColor="#502b63" onPress={handleUploadResume} />
          
        </View>

        
</View>
{resumeUri && <Text style={{ color: "gray",fontWeight:600, marginTop: 10 }}>Resume Uploaded: {resumeUri}</Text>}


{/* new add  */}

{/* {resumeUri && (
          <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#502b63', marginBottom: 10 }}>Preview of Uploaded Resume</Text>
            <WebView
              source={{ uri: resumeUri }}
              style={{ flex: 1 }}
            />
          </View>
        )} */}


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
    </SafeAreaView>
  )
}

export default SkillsScreen

const styles = StyleSheet.create({})