import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../Styles';
import { FontAwesome } from '@expo/vector-icons';
import FontsFam from './FontsFam';
import { literals } from '../Literal';

const CardDescription = () => {
    const route = useRoute();
    const { imageData } = route.params;
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <FontsFam>
            <ScrollView style={globalStyles.cardMainImage}>
                <View style={globalStyles.cardDishnameImage1}>
                    <Image source={{ uri: imageData.image }} style={globalStyles.image1card} />
                </View>
                <TouchableOpacity style={globalStyles.backarrowCard} onPress={handleBackPress}>
                    <FontAwesome name="angle-left" size={24.01} color="#FFFFFF" />
                </TouchableOpacity>
                
                <View style={globalStyles.cardDetailsmain}>
                    <View style={globalStyles.cardDetailsImage1}>
                        <View style={globalStyles.cardDetailsAtTop}>
                            <TouchableOpacity style={globalStyles.lineMain}>
                                <Text style={globalStyles.line4}></Text>
                            </TouchableOpacity>
                            <View>
                                <Text style={globalStyles.textImage1}>{imageData.dishname}</Text>
                              
                                 <View style={globalStyles.foodLikes}>
                                    <Text style={globalStyles.mins}>{imageData.dishtype}</Text>
                                    <FontAwesome name="circle" size={8} color="#9FA5C0" />
                                    <View style={globalStyles.minsMain}>
                                      <FontAwesome name="angle-right" size={15} color="#9FA5C0" />
                                      <Text style={globalStyles.mins}> {imageData.time} </Text>
                                    </View>
                                  </View>
                                <View style={globalStyles.profile1}>
                                    <View style={globalStyles.name1}>
                                        <Image source={{ uri: imageData.profile }} style={globalStyles.profile1card} />
                                        <Text style={globalStyles.prfileName1}>{imageData.profileName}</Text>
                                    </View>
                                    <View style={globalStyles.name1}>
                                        <View style={globalStyles.likesHeart}>
                                            <FontAwesome name="heart" size={15} color="rgba(255, 255, 255, 1)" />
                                        </View>
                                        <Text style={globalStyles.prfileName1}>{imageData.like} Likes</Text>
                                    </View>
                                </View>

                                <View style={globalStyles.lineRecepe}></View>
                                <Text style={globalStyles.textImage1}>{literals.descriptionHead}</Text>
                                <Text style={globalStyles.textDesc}>{imageData.description}</Text>
                                <View style={globalStyles.lineRecepe}></View>
                                <Text style={globalStyles.textImage1}>{literals.IngredientHead}</Text>
                                <View style={globalStyles.ingredientsList}>
                                    <View style={globalStyles.ingredientsCheck}>
                                        <FontAwesome name="check" size={15} color="rgba(31, 204, 121, 1)" />
                                    </View>
                                    <Text style={globalStyles.stepText}>{imageData.ingre1step1}</Text>
                                </View>
                                <View style={globalStyles.ingredientsList}>
                                    <View style={globalStyles.ingredientsCheck}>
                                        <FontAwesome name="check" size={15} color="rgba(31, 204, 121, 1)" />
                                    </View>
                                    <Text style={globalStyles.stepText}>{imageData.ingre2step2}</Text>
                                </View>
                                <View style={globalStyles.ingredientsList}>
                                    <View style={globalStyles.ingredientsCheck}>
                                        <FontAwesome name="check" size={15} color="rgba(31, 204, 121, 1)" />
                                    </View>
                                    <Text style={globalStyles.stepText}>{imageData.ingre3step3}</Text>
                                </View>
                                <View style={globalStyles.lineRecepe}></View>
                                <Text style={globalStyles.textImage1}>{literals.StepsHead}</Text>
                                <View style={globalStyles.stepHead}>
                                    <View style={globalStyles.stepOne}>
                                        <Text style={globalStyles.stepTextone}>{literals.StepsNum}</Text>
                                    </View>
                                    <Text style={globalStyles.textDescone}>{imageData.description}</Text>
                                </View>
                                <View style={globalStyles.ingreImage}>
                                    <Image source={{ uri: imageData.ingre }} style={globalStyles.ingre1} />
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </FontsFam >
    );
};

export default CardDescription;





