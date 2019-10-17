import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native'
import iconCake from '../Assets/Images/cake.png'
import iconCoffee from '../Assets/Images/coffee.png'
import iconWater from '../Assets/Images/water.png'
import iconDoughnut from '../Assets/Images/doughnut.png'
import iconPizza from '../Assets/Images/pizza.png'
import iconUnyil from '../Assets/Images/uyil.png'

export default class CardCategory extends Component {
    render() {
        return (
            <>
                <SafeAreaView style={styles.scrollViewItems}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.contentKategori}>
                            <View style={styles.cardItmeKategori}>
                                <View style={styles.contentKategoriIcon}>
                                    <Image style={styles.logo} source={iconCoffee} />
                                </View>
                                <View>
                                    <Text style={styles.logoText}>Coffee</Text>
                                </View>
                            </View>
                            <View style={styles.cardItmeKategori}>
                                <View style={styles.contentKategoriIcon}>
                                    <Image style={styles.logo} source={iconCake} />
                                </View>
                                <View>
                                    <Text style={styles.logoText}>Cake</Text>
                                </View>
                            </View>
                            <View style={styles.cardItmeKategori}>
                                <View style={styles.contentKategoriIcon}>
                                    <Image style={styles.logo} source={iconWater} />
                                </View>
                                <View>
                                    <Text style={styles.logoText}>Water</Text>
                                </View>
                            </View>
                            <View style={styles.cardItmeKategori}>
                                <View style={styles.contentKategoriIcon}>
                                    <Image style={styles.logo} source={iconDoughnut} />
                                </View>
                                <View>
                                    <Text style={styles.logoText}>Doughnut</Text>
                                </View>
                            </View>
                            <View style={styles.cardItmeKategori}>
                                <View style={styles.contentKategoriIcon}>
                                    <Image style={styles.logo} source={iconPizza} />
                                </View>
                                <View>
                                    <Text style={styles.logoText}>Pizza</Text>
                                </View>
                            </View>
                            <View style={styles.cardItmeKategori}>
                                <View style={styles.contentKategoriIcon}>
                                    <Image style={styles.logo} source={iconUnyil} />
                                </View>
                                <View>
                                    <Text style={styles.logoText}>Unyil</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    scrollViewItems: {
        height: '20%',
    },
    contentKategori: {
        flexDirection: 'row',
        height: 130,
        padding: 10,
        alignItems: 'center'
    },
    cardItmeKategori: {
        height: 75,
        width: 75,
        alignItems: 'center',
        marginRight: 5
    },
    contentKategoriIcon: {
        height: 70,
        borderRadius: 20,
        backgroundColor: '#dfe4ea',
        padding: 5
    },
    logo: {
        width: 60,
        height: 60,
    },
    logoText: {
        color: '#192a56',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
})