import Constants from 'expo-constants';
import React from 'react';
import { SectionList, Image, StyleSheet, Text, View } from 'react-native';
import AddMoneyButton from "./AddMoneyButton.js";
import AddMoneyPage from './AddMoneyPage.js';

export default class ExpoConfigView extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {balance: '0'}
  }

  handleChange(e) {
    this.setState({balance: e.target.value});
  }

  render() {
    const { manifest = {} } = Constants;
    const balance = this.state.balance;
    const sections = [
      { data: [{ value: '$' + balance }], title: 'Balance' }, //make the value a variable that can be added to
      // { data: [{ value: '$100' }], title: 'Balance' },
      // { data: [{ value: manifest.version }], title: 'version' },
      // { data: [{ value: manifest.orientation }], title: 'orientation' },
      // {
      //   data: [{ value: manifest.primaryColor, type: 'color' }],
      //   title: 'primaryColor',
      // },
      // {
      //   data: [{ value: manifest.splash && manifest.splash.image }],
      //   title: 'splash.image',
      // },
      // {
      //   data: [
      //     {
      //       value: manifest.splash && manifest.splash.backgroundColor,
      //       type: 'color',
      //     },
      //   ],
      //   title: 'splash.backgroundColor',
      // },
      // {
      //   data: [
      //     {
      //       value: manifest.splash && manifest.splash.resizeMode,
      //     },
      //   ],
      //   title: 'splash.resizeMode',
      // },
      // {
      //   data: [
      //     {
      //       value: manifest.ios && manifest.ios.supportsTablet ? 'true' : 'false',
      //     },
      //   ],
      //   title: 'ios.supportsTablet',
      // },
    ];

    return (
      <View style={{flex: 1}}>
        <SectionList
          style={styles.container}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          stickySectionHeadersEnabled={true}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={ListHeader}
          sections={sections}
        />
        <AddMoneyPage/>
      </View>
      // Edit card info page should be added
      // Edit password page should also be added
    );
  }

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };

  _renderItem = ({ item }) => {
    if (item.type === 'color') {
      return <SectionContent>{item.value && <Color value={item.value} />}</SectionContent>;
    } else {
      return (
        <SectionContent>
          <Text style={styles.sectionContentText}>{item.value}</Text>
        </SectionContent>
      );
    }
  };
}

const ListHeader = () => {
  const { manifest } = Constants;

  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleIconContainer}>
        <AppIconPreview iconUrl={manifest.iconUrl} />
      </View>

      <View style={styles.titleTextContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          Shirley
        </Text>

        <Text style={styles.slugText} numberOfLines={1}>
          @sq19
        </Text>

        <Text style={styles.descriptionText}>{manifest.description}</Text>
      </View>
    </View>
    // Name should be a variable that can be edited
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
};

const SectionContent = props => {
  return <View style={styles.sectionContentContainer}>{props.children}</View>;
};

const AppIconPreview = ({ iconUrl }) => {
  if (!iconUrl) {
    iconUrl = 'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png';
  }

  return <Image source={{ uri: iconUrl }} style={{ width: 64, height: 64 }} resizeMode="cover" />;
};

const Color = ({ value }) => {
  if (!value) {
    return <View />;
  } else {
    return (
      <View style={styles.colorContainer}>
        <View style={[styles.colorPreview, { backgroundColor: value }]} />
        <View style={styles.colorTextContainer}>
          <Text style={styles.sectionContentText}>{value}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2,
  },
  sectionHeaderContainer: {
    backgroundColor: '#fbfbfb',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
  },
  sectionHeaderText: {
    fontSize: 14,
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
  },
  slugText: {
    color: '#a39f9f',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: '#4d4d4d',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPreview: {
    width: 17,
    height: 17,
    borderRadius: 2,
    marginRight: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  colorTextContainer: {
    flex: 1,
  },
});
