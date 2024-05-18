
// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
// import { globalStyles } from '../Styles';
// import { useNavigation } from '@react-navigation/native';
// import FontsFam from './FontsFam';
// import { literals } from '../Literal';


// const Notification = () => {
//   const [profileData1, setProfileData1] = useState(null);
//   const [profileData2, setProfileData2] = useState(null);
//   const [profileData3, setProfileData3] = useState(null);
//   const [profileData4, setProfileData4] = useState(null);
//   const [profileData5, setProfileData5] = useState(null);
//   const [profileData6, setProfileData6] = useState(null);
//   const [loading1, setLoading1] = useState(true);
//   const [loading2, setLoading2] = useState(true);
//   const [loading3, setLoading3] = useState(true);
//   const [loading4, setLoading4] = useState(true);
//   const [loading5, setLoading5] = useState(true);
//   const [loading6, setLoading6] = useState(true);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchData1();
//     fetchData2();
//     fetchData3();
//     fetchData4();
//     fetchData5();
//     fetchData6();
//   }, []);

//   const fetchData1 = async () => {
//     try {
//       // const response = await fetch(`http://192.168.1.25:3200/api/getDataById/1`);
//       const response = await fetch(`https://03ba0f69-d132-4388-90a6-670fb8e815cd.mock.pstmn.io/foodData?id=1`);

//       if (!response.ok) {
//         throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
//       }
//       const jsonData = await response.json();
//       console.log('Fetched data 1:', jsonData);
//       setProfileData1(jsonData);
//       setLoading1(false);
//     } catch (error) {
//       console.error('Error fetching data 1:', error);
//       setLoading1(false);
//     }
//   };


//   const fetchData2 = async () => {
//     try {
//       // const response = await fetch(`http://192.168.1.25:3200/api/getDataById/2`);
//       const response = await fetch(`https://03ba0f69-d132-4388-90a6-670fb8e815cd.mock.pstmn.io/foodData?id=2`);

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const jsonData = await response.json();
//       console.log('Fetched data 2:', jsonData);
//       setProfileData2(jsonData);
//       setLoading2(false);
//     } catch (error) {
//       console.error('Error fetching data 2:', error);
//       setLoading2(false);
//     }
//   };

//   const fetchData3 = async () => {
//     try {
//       // const response = await fetch(`http://192.168.1.25:3200/api/getDataById/3`);
//       const response = await fetch(`https://03ba0f69-d132-4388-90a6-670fb8e815cd.mock.pstmn.io/foodData?id=3`);

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const jsonData = await response.json();
//       console.log('Fetched data 3:', jsonData);
//       setProfileData3(jsonData);
//       setLoading3(false);
//     } catch (error) {
//       console.error('Error fetching data 3:', error);
//       setLoading3(false);
//     }
//   };

//   const fetchData4 = async () => {
//     try {
//       // const response = await fetch(`http://192.168.1.25:3200/api/getDataById/1`);
//       const response = await fetch(`https://03ba0f69-d132-4388-90a6-670fb8e815cd.mock.pstmn.io/foodData?id=1`);

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const jsonData = await response.json();
//       console.log('Fetched data 4:', jsonData);
//       setProfileData4(jsonData);
//       setLoading4(false);
//     } catch (error) {
//       console.error('Error fetching data 4:', error);
//       setLoading4(false);
//     }
//   };

//   const fetchData5 = async () => {
//     try {
//       // const response = await fetch(`http://192.168.1.25:3200/api/getDataById/2`);
//       const response = await fetch(`https://03ba0f69-d132-4388-90a6-670fb8e815cd.mock.pstmn.io/foodData?id=2`);

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const jsonData = await response.json();
//       console.log('Fetched data 5:', jsonData);
//       setProfileData5(jsonData);
//       setLoading5(false);
//     } catch (error) {
//       console.error('Error fetching data 5:', error);
//       setLoading5(false);
//     }
//   };

//   const fetchData6 = async () => {
//     try {
//       // const response = await fetch(`http://192.168.1.25:3200/api/getDataById/3`);
//       const response = await fetch(`https://03ba0f69-d132-4388-90a6-670fb8e815cd.mock.pstmn.io/foodData?id=3`);

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const jsonData = await response.json();
//       console.log('Fetched data 6:', jsonData);
//       setProfileData6(jsonData);
//       setLoading6(false);
//     } catch (error) {
//       console.error('Error fetching data 6:', error);
//       setLoading6(false);
//     }
//   };


//   const handleProfilePress = async (id) => {
//     try {
//       // const response = await fetch(`http://192.168.1.25:3200/api/getDataById/${id}`);
//       const response = await fetch(`https://03ba0f69-d132-4388-90a6-670fb8e815cd.mock.pstmn.io/foodData?${id}`);

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const jsonData = await response.json();
//       console.log(`Fetched data for ID ${id}:`, jsonData);
//       navigation.navigate('ProfileDetails', { profileData: jsonData });
//     } catch (error) {
//       console.error(`Error fetching data for ID ${id}:`, error);
//     }
//   };

//   return (
//     <FontsFam>
//     <View style={globalStyles.containerNotification1}>
//       <View>
//         <Text style={globalStyles.new}>New</Text>
//         {loading1 ? (
//           <ActivityIndicator size="small" color="#0000ff" />
//         ) : profileData1 ? (
//           <>
//             <View style={globalStyles.cardIdOne}>
//             <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(1)}>
//               <View style={globalStyles.imageMain}>
//                 <Image source={{ uri: profileData1.profile }} style={globalStyles.imageNotification} />
//               </View>
//               <View style={globalStyles.notificationProfile}>
//                   <Text style={globalStyles.textone}>{loading1 ? 'Loading...' : profileData1?.profileName}</Text>

//                 <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
//               </View>
//               </TouchableOpacity>
//               <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
//                 <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         ) : (
//           <Text>{literals.id1Notification}</Text>
//         )}
//       </View>

//       <View>
//         <Text style={globalStyles.today}>Today</Text>
//         {loading2 ? (
//           <ActivityIndicator size="small" color="#0000ff" />
//         ) : profileData2 ? (
//           <>
//             <View style={globalStyles.cardIdOne}>
//             <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(2)}>
//               <View style={globalStyles.imageMain}>
//                 <Image source={{ uri: profileData2.profile }} style={globalStyles.imageNotification} />
//               </View>
//               <View style={globalStyles.notificationProfile}>
//                   <Text style={globalStyles.textone}>{profileData2?.profileName}</Text>
//                 <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
//               </View>
//               </TouchableOpacity>
//               <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
//                 <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         ) : (
//           <Text>{literals.id2Notification}</Text>
//         )}
//       </View>

//       <View>
//         {loading3 ? (
//           <ActivityIndicator size="small" color="#0000ff" />
//         ) : profileData3 ? (
//           <>
//             <View style={globalStyles.cardIdOne}>
//             <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(3)}>
//               <View style={globalStyles.imageMain}>
//                 <Image source={{ uri: profileData3.profile }} style={globalStyles.imageNotification} />
//               </View>
//               <View style={globalStyles.notificationProfile}>
//                   <Text style={globalStyles.textone}>{profileData3?.profileName}</Text>

//                 <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
//               </View>
//               </TouchableOpacity>
//               <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
//                 <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         ) : (
//           <Text>{literals.id3Notification}</Text>
//         )}
//       </View>

//       <View>
//         {loading4 ? (
//           <ActivityIndicator size="small" color="#0000ff" />
//         ) : profileData4 ? (
//           <>
//             <View style={globalStyles.cardIdOne}>
//             <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(1)}>
//               <View style={globalStyles.imageMain}>
//                 <Image source={{ uri: profileData4.profile }} style={globalStyles.imageNotification} />
//               </View>
//               <View style={globalStyles.notificationProfile}>
//               {/* <TouchableOpacity onPress={() => handleProfilePress(1)}> */}
//                   <Text style={globalStyles.textone}>{loading1 ? 'Loading...' : profileData4?.profileName}</Text>
//                 {/* </TouchableOpacity> */}
//                 <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
//               </View>
//               </TouchableOpacity>
//               <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
//                 <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         ) : (
//           <Text>{literals.id4Notification}</Text>
//         )}
//       </View>

//       <View>
//         <Text style={globalStyles.yesterday}>Yesterday</Text>
//         {loading5 ? (
//           <ActivityIndicator size="small" color="#0000ff" />
//         ) : profileData5 ? (
//           <>
//             <View style={globalStyles.cardIdOne}>
//             <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(2)}>
//               <View style={globalStyles.imageMain}>
//                 <Image source={{ uri: profileData5.profile }} style={globalStyles.imageNotification} />
//               </View>
//               <View style={globalStyles.notificationProfile}>
//               {/* <TouchableOpacity onPress={() => handleProfilePress(5)}> */}
//                   <Text style={globalStyles.textone}>{loading1 ? 'Loading...' : profileData5?.profileName}</Text>
//                 {/* </TouchableOpacity> */}
//                 <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
//               </View>
//               </TouchableOpacity>
//               <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
//                 <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         ) : (
//           <Text>{literals.id5Notification}</Text>
//         )}
//       </View>

//       <View>
//         {loading6 ? (
//           <ActivityIndicator size="small" color="#0000ff" />
//         ) : profileData6 ? (
//           <>
//             <View style={globalStyles.cardIdOne}>
//             <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(3)}>
//               <View style={globalStyles.imageMain}>
//                 <Image source={{ uri: profileData6.profile }} style={globalStyles.imageNotification} />
//               </View>
//               <View style={globalStyles.notificationProfile}>
//               {/* <TouchableOpacity onPress={() => handleProfilePress(6)}> */}
//                   <Text style={globalStyles.textone}>{loading1 ? 'Loading...' : profileData6?.profileName}</Text>
//                 {/* </TouchableOpacity> */}
//                 <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
//               </View>
//               </TouchableOpacity>
//               <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log('Follow button pressed for ID 1')}>
//                 <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         ) : (
//           <Text>{literals.id6Notification}</Text>
//         )}
//       </View>
//     </View>
//     </FontsFam>
//   );
// };

// export default Notification;


import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../Styles';
import { useNavigation } from '@react-navigation/native';
import FontsFam from './FontsFam';
import { literals } from '../Literal';

const Notification = () => {
  const [profileData, setProfileData] = useState(new Array(6).fill(null));
  const [loading, setLoading] = useState(new Array(6).fill(true));
  const [error, setError] = useState(new Array(6).fill(false));
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://863495e5-5800-43ac-a0dc-d8cbd02b2a3b.mock.pstmn.io/recipemain');
      if (!response.ok) throw new Error('Failed to fetch data');
      const jsonData = await response.json();

      // Assuming jsonData is an array of 3 items
      const repeatedData = [];
      for (let i = 0; i < 6; i++) {
        repeatedData.push(jsonData[i % 3]); // Repeat the data
      }

      setProfileData(repeatedData);
      setLoading(new Array(6).fill(false));
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(new Array(6).fill(true));
      setLoading(new Array(6).fill(false));
    }
  };

  const handleProfilePress = (index) => {
    const data = profileData[index];
    if (data && data.profile) {
      navigation.navigate('ProfileDetails', { profileData: data });
    } else {
      console.error(`Invalid profile data for index ${index}`);
      // Handle the error appropriately, e.g., show a message to the user
    }
  };

  return (
    <FontsFam>

      <View style={globalStyles.containerNotification1}>
        {profileData.map((data, index) => (
          <View key={index}>
            {loading[index] ? (
              <ActivityIndicator size="small" color="#0000ff" />

            ) : error[index] ? (
              <Text>Error loading profile {index + 1}</Text>
            ) : data && data.profile ? (

              <View>
                <View style={globalStyles.cardIdOneMain}>
                  {index < profileData.length - 1 && (
                    <Text style={globalStyles.additionalText}>Today</Text>
                  )}
                </View>
                <View style={globalStyles.cardIdOne}>
                  <TouchableOpacity style={globalStyles.cardIdOne1} onPress={() => handleProfilePress(index)}>
                    <View style={globalStyles.imageMain}>
                      <Image source={{ uri: data.profile }} style={globalStyles.imageNotification} />
                    </View>
                    <View style={globalStyles.notificationProfile}>
                      <Text style={globalStyles.textone}>{data.profileName}</Text>
                      <Text style={globalStyles.texttwo}>{literals.followNotification}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={globalStyles.followButton} onPress={() => console.log(`Follow button pressed for index ${index}`)}>
                    <Text style={globalStyles.followButtoon}>{literals.btnNotification}</Text>
                  </TouchableOpacity>
                </View>

              </View>
            ) : (
              <Text>{literals[`id${index + 1}Notification`]}</Text>
            )}

          </View>
        ))}
      </View>
    </FontsFam>
  );
};

export default Notification;













