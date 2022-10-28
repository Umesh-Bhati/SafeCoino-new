import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppIcon from './AppIcon';
import {COLORS} from '../../themes';

const TradeView = () => {
  const [expand, setExpand] = useState(false);

  const StaticContent = () => (
    <TouchableOpacity
      style={{
        width: '100%',
      }}
      onPress={() => setExpand(!expand)}
      activeOpacity={0.6}>
      <View
        style={{
          flexGrow: 1,
          flexDirection: 'row',
        }}>
        {/* column1 */}
        <View style={styles.columnContainer}>
          <AppIcon name={'bitcoin'} size={18} />
          <Text
            style={[styles.row1Txt, {textAlign: 'left', marginVertical: 5}]}>
            BTC
          </Text>
        </View>

        {/* column2 */}
        <View style={styles.columnContainer}>
          <Text style={styles.row1Txt}>Amount</Text>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'black',
              marginVertical: 5,
            }}>
            0.05
          </Text>
        </View>

        {/* column3 */}
        <View style={styles.columnContainer}>
          <Text style={styles.row1Txt}>Tracking code</Text>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '400',
              color: 'black',
              marginVertical: 5,
            }}>
            BU-324567865
          </Text>
        </View>
        {/* column3 */}

        <View
          style={[
            styles.columbContainer,
            {justifyContent: 'flex-end', paddingBottom: 5},
          ]}>
          <AppIcon name={'circleCross'} size={20} />
        </View>
      </View>
      <View style={styles.columnContainer}>
        <Text style={{
          color: "black",
          fontSize: 14,
          fontWeight: '300'
        }} >2022/02/28 - 14:51</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: expand ? COLORS.secTxt_Dark : COLORS.txtField_Light,
        },
      ]}>
      <StaticContent />
      {/* expandable Content here */}
      {expand && (
        <>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: expand
                ? COLORS.txtField_Light
                : COLORS.secTxt_Dark,
              marginVertical: 12,
            }}
          />
          <View style={styles.expRowContainer}>
            <Text style={styles.expTitleTxt} >Unit price</Text>
            <Text style={styles.expTitleTxt} >Paid amount</Text>
          </View>
          <View style={styles.expRowContainer}>
            <Text style={styles.expSubTitleTxt} >1,120,000,000.0 IRT</Text>
            <Text style={{
              color: "#495057",
              fontSize: 12,
              fontWeight: '300'
            }} >560,000,000 IRT</Text>
          </View>
          <Text style={styles.expTitleTxt} >Received amount</Text>
          <Text style={styles.expSubTitleTxt} >0.05 BTC</Text>
        </>
      )}
    </View>
  );
};

export default TradeView;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 7,
    marginTop: 14,
  },
  columnContainer: {
    flexGrow: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  columbContainer: {
    flexShrink: 0.2,
  },
  row1Txt: {
    textAlign: 'center',
    fontWeight: '400',
    color: "black"
  },
  expRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expTitleTxt: {
    color: "#191919",
    fontWeight: '400',
    fontSize: 12
  },
  expSubTitleTxt: {
    color: "#495057",
    fontSize: 12,
    fontWeight: '300'
  },
  
});
