import React from 'react';
import {Document, Image, Page, StyleSheet, Text, View} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        padding: 5,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 85,
    },
    page: {
        flexDirection: 'column',
        backgroundColor: '#fFFFFF',
        fontSize: 12,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

// Create Document Component
export default function MyDocument () {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Image style={styles.logo} src={"/tsz-logo.png"}></Image>
                    <Text>Eszközkiadási nyilatkozat</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Miért van szükség a szigorú kölcsönzési feltételekre?</Text>
                    <Text>
                        Azért, hogy technikai eszközeink kölcsönzése mindenki számára zökkenőmentes és biztonságos
                        legyen, több fontos intézkedést hoztunk. Ezek az intézkedések nemcsak a mi érdekeinket védik,
                        hanem az Önökét is, hogy biztosan megbízható és kifogástalan állapotú eszközt kapjanak kézhez.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    )
};